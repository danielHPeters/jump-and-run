'use strict'
import Game from './model/Game'
import Player from './model/Player'
import Canvas from './model/Canvas'
import Area from './model/Area'
import AudioManager from './application/AudioManager'
import AssetManager from './application/AssetManager'
import KeyboardEventHandler from './application/KeyboardEventHandler'
import Material from './model/Material'

/**
 *
 * @param ctx
 * @param game
 */
function animate (ctx, game) {
  // Clear canvas before drawing new animation
  ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)

  // Update game logic
  game.update()

  // Render objects
  game.render(ctx)

  // Request new frame when ready. Allows the game to play in a loop
  window.requestAnimationFrame(() => animate(ctx, game))
}

/**
 * Initializes all game Objects
 */
function init () {
  let canvas = document.getElementById('game')

  if (canvas.getContext) {
    let ctx = canvas.getContext('2d')
    let player = new Player('Player1', 100, 100, 60, 60, new Material('player'))
    let map = new Canvas(0, 0, canvas.width, canvas.height, new Material('background'))
    let areas = []
    let area1 = new Area(map)
    let area2 = new Area(map)
    let area3 = new Area(map)
    let gameObjects = []
    let audioManager = new AudioManager()
    let game = new Game(map, player, audioManager)
    let assetManager = new AssetManager()
    let keyEventHandler = new KeyboardEventHandler(canvas)

    let bl = 'block'
    let se = 'secret'
    let no = null
    let blocksList = [
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, no, no, no, no, bl, bl, no, no, no, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, no, no, bl],
      [bl, bl, bl, bl, bl, bl, bl, bl, no, no, no, no, no, no, se],
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl]
    ]

    let blocksList2 = [
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, bl, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, no, no, no, no, bl, bl, bl, bl, bl, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, no, no, bl],
      [se, no, no, no, no, no, bl, bl, no, no, no, no, no, no, bl],
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, no, no, bl]
    ]

    let blocksList3 = [
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, no, no, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, no, bl, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, bl, bl, bl],
      [bl, bl, bl, bl, bl, bl, no, no, no, bl, bl, bl, bl, bl, bl],
      [bl, no, no, no, no, no, no, no, no, no, no, no, no, no, bl],
      [bl, no, no, no, no, no, bl, bl, no, no, no, no, no, no, bl],
      [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl]
    ]
    player.keyActionsRegister = keyEventHandler.getKeyActionsRegister()
    area1.right = area2
    area2.left = area1
    area2.bottom = area3
    area3.top = area2
    area1.generateBlocks(blocksList)
    area2.generateBlocks(blocksList2)
    area3.generateBlocks(blocksList3)
    areas.push(area1)
    areas.push(area2)
    areas.push(area3)
    game.areas = areas
    game.current = game.areas[0]
    game.assetManager = assetManager
    game.audioManager.load('ambient', 'assets/audio/ambient/ambient.mp3', () => game.audioManager.playSound('ambient', true))

    game.audioManager.load('jump', 'assets/audio/effects/jump.wav', () => {
      gameObjects.push(map)
      gameObjects.push(player)
      gameObjects = gameObjects.concat(area1.blocks)
      gameObjects = gameObjects.concat(area2.blocks)
      gameObjects = gameObjects.concat(area3.blocks)

      // Add all sprites to the download queue
      assetManager.queueDownload('background', 'assets/textures/background.jpg')
      assetManager.queueDownload('player', 'assets/textures/player.png')
      assetManager.queueDownload('stone-block', 'assets/textures/stone-block.jpg')
      assetManager.queueDownload('heart', 'assets/textures/heart.png')
      // Start playing ambient music

      // Download all sprites
      assetManager.downLoadAll(function () {
        // Assign the sprites to the correct material
        gameObjects.forEach((obj) => obj.material.setSprite(assetManager.getAsset(obj.material.getName())))

        // After the sprites are initialized start drawing
        animate(ctx, game)
      })
    })
  } else {
    document.getElementById('unsupported').textContent = 'Please update your browser or download another one which supports HTML5'
  }
}

$(document).ready(() => init())
