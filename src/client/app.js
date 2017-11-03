'use strict'

import AssetManager from './application/AssetManager'
import InputManager from './application/InputManager'
import Animation from './graphics/2D/Animation'

let socket = io()
let canvas = document.getElementById('game')
let inputManager = new InputManager(canvas)
let assetManager = new AssetManager()
let playerId // player id is registered here on socket connection
let ctx // graphics context
let spritesLoaded = false // set to true when asset manager finishes to start drawing
let animationRight
let animationLeft
let animationIdle
let currentAnimation
let coinAnimation

/**
 * Shim for animation loop.
 * Selects one that's available or uses fallback with setTimeout.
 */
window.requestAnimFrame = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback, element) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

/**
 * Download all game assets.
 */
function init () {
  // check if canvas is supported by browser
  if (canvas.getContext) {
    socket.emit('new player')
    ctx = canvas.getContext('2d')
    // Add all sprites and music files to the download queue
    assetManager.queueDownload('ambient', 'assets/audio/ambient/ambient.mp3', 'audio')
    assetManager.queueDownload('jump', 'assets/audio/effects/jump.wav', 'audio')
    assetManager.queueDownload('background', 'assets/textures/background.png', 'texture')
    assetManager.queueDownload('player', 'assets/textures/player.png', 'texture')
    assetManager.queueDownload('stone-block', 'assets/textures/stone-block.jpg', 'texture')
    assetManager.queueDownload('heart', 'assets/textures/heart.png', 'texture')
    assetManager.queueDownload('coin', 'assets/textures/coin.png', 'texture')
    assetManager.queueDownload('playerSheet', 'assets/textures/test.png', 'spriteSheet', {
      frameWidth: 32,
      frameHeight: 64
    })
    assetManager.queueDownload('coinSheet', 'assets/textures/coin-sprite-animation-sprite-sheet.png', 'spriteSheet', {
      frameWidth: 44, frameHeight: 44
    })
    assetManager.loadAll(() => {
      animationRight = new Animation(assetManager.getSpriteSheet('playerSheet'), 3, 3, 6, 12)
      animationLeft = new Animation(assetManager.getSpriteSheet('playerSheet'), 3, 3, 6, 12)
      animationIdle = new Animation(assetManager.getSpriteSheet('playerSheet'), 10, 0, 2, 12)
      coinAnimation = new Animation(assetManager.getSpriteSheet('coinSheet'), 3, 0, 9)
      currentAnimation = animationLeft
      // Play ambient sound
      assetManager.playSound('ambient', true)
      update()
      // Draw Background only once to improve performance
      document.getElementById('background').getContext('2d').drawImage(assetManager.getSprite('background'), 0, 0, canvas.width, canvas.height)
      // tells socket.on(state) that all sprites needed for drawing are downloaded
      spritesLoaded = true
    })
  } else {
    document.getElementById('unsupported').textContent = 'Please update your browser or download another one which supports HTML5'
  }
}

/**
 * Sends user input to the server.
 */
function update () {
  socket.emit('movement', inputManager.registeredInputs)
  // Request new frame when ready. Allows the game to play in a loop in approximately 60fps
  window.requestAnimationFrame(() => update())
}

/**
 * Draw all objects.
 * @param players player objects with objects within their viewport
 */
function draw (players) {
  if (playerId && players[playerId] && spritesLoaded) {
    let currentPlayer = players[playerId]
    if (inputManager.registeredInputs['w'] || inputManager.registeredInputs[' ']) {
      // Check if players is not already jumping
      if (!currentPlayer.jumping && currentPlayer.grounded) {
        assetManager.playSound('jump')
      }
    }
    currentAnimation.update()
    coinAnimation.update()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    Object.keys(players).forEach(key => {
      const player = players[key]
      // Make sure to only draw players in the same area
      if (player.viewport.areaId === currentPlayer.viewport.areaId) {
        if (player.registeredInputs['a']) {
          currentAnimation = animationLeft
        }
        if (player.registeredInputs['d']) {
          currentAnimation = animationRight
        }
        if (!player.registeredInputs['d'] && !player.registeredInputs['a']) {
          currentAnimation = animationIdle
        }
        currentAnimation.draw(ctx, player.position._x, player.position._y, player.width, player.height)
      }
    })
    // Draw all blocks
    players[playerId].viewport.blocks.forEach(block => {
      if (block.material.name === 'stone-block') {
        ctx.drawImage(assetManager.getSprite(block.material.name), block.position._x, block.position._y, block.width, block.height)
      } else if (block.material.name === 'coin') {
        coinAnimation.draw(ctx, block.position._x, block.position._y, block.width, block.height)
      }
    })
    // Display health
    let x = canvas.width - 35
    for (let i = 0; i < players[playerId].lives; i++) {
      ctx.drawImage(assetManager.getSprite('heart'), x, 5, 30, 30)
      x -= 30
    }
    ctx.drawImage(assetManager.getSprite('coin'), 5, 5, 30, 30)
    ctx.font = '30px serif'
    ctx.fillStyle = 'red'
    ctx.fillText(players[playerId].coins.toString(), 35, 30)
  }
}

/**
 * modern browser equivalent of jQuery $(document).ready()
 */
document.addEventListener('DOMContentLoaded', init())

/**
 * Initialize player id on socket connection
 */
socket.on('connect', () => {
  // Tell server to add this player
  socket.emit('new player')
  // remember socket id to identify current player when drawing
  playerId = socket.io.engine.id
})

/**
 * Listen to server sending objects to draw.
 * Contains the drawing loop
 */
socket.on('state', players => {
  draw(players)
})
