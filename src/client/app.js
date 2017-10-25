'use strict'

import AudioManager from './application/AudioManager'
import AssetManager from './application/AssetManager'
import KeyboardEventHandler from './application/KeyboardEventHandler'

let socket = io()
let canvas = document.getElementById('game')
let keyEventHandler = new KeyboardEventHandler(canvas)
let audioManager = new AudioManager() // TODO Combine audio manager with asset manager to avoid duplicate code
let assetManager = new AssetManager()
let playerId // player id is registered here on socket connection
let ctx // graphics context
let spritesLoaded = false // set to true when asset manager finishes to start drawing

/**
 * Sends user input to the server.
 */
function update () {
  socket.emit('movement', keyEventHandler.keyActionsRegister)
  // Request new frame when ready. Allows the game to play in a loop in approximately 60fps
  window.requestAnimationFrame(() => update())
}

/**
 * Listen to server sending objects to draw.
 * Contains the drawing loop
 */
socket.on('state', players => {
  if (playerId && players[playerId] && spritesLoaded) {
    console.log(players[playerId])
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    Object.keys(players).forEach(key => {
      const player = players[key]
      // Make sure to only draw players in the same area
      if (player.viewport.areaId === players[playerId].viewport.areaId) {
        ctx.drawImage(assetManager.getAsset(player.material.name), player.position._x, player.position._y, player.width, player.height)
      }
    })
    // Draw all blocks
    players[playerId].viewport.blocks.forEach(block => {
      ctx.drawImage(assetManager.getAsset(block.material.name), block.position._x, block.position._y, block.width, block.height)
    })
    // Display health
    let x = canvas.width - 35
    let y = 5
    for (let i = 0; i < players[playerId].lives; i++) {
      ctx.drawImage(assetManager.getAsset('heart'), x, y, 30, 30)
      x -= 30
    }
    if (players[playerId].jumping) {
      // audioManager.playSound('jump') TODO Currently fires multiple times. Find a way to only play when the last jump sound ended
    }
  }
})

/**
 * Initializes all game Objects.
 */
function init () {
  // check if canvas is supported by browser
  if (canvas.getContext) {
    socket.emit('new player')
    ctx = canvas.getContext('2d')
    // Add all sprites and music files to the download queue
    audioManager.queueDownload('ambient', 'assets/audio/ambient/ambient.mp3')
    audioManager.queueDownload('jump', 'assets/audio/effects/jump.wav')
    assetManager.queueDownload('background', 'assets/textures/background.png')
    assetManager.queueDownload('player', 'assets/textures/player.png')
    assetManager.queueDownload('stone-block', 'assets/textures/stone-block.jpg')
    assetManager.queueDownload('heart', 'assets/textures/heart.png')
    audioManager.loadAll(() => {
      audioManager.playSound('ambient', true)
      // Download all sprites
      assetManager.downLoadAll(() => {
        update()
        // Draw Background only once to improve performance
        document.getElementById('background').getContext('2d').drawImage(assetManager.getAsset('background'), 0, 0, canvas.width, canvas.height)
        // tells socket.on(state) that all sprites needed for drawing are downloaded
        spritesLoaded = true
      })
    })
  } else {
    document.getElementById('unsupported').textContent = 'Please update your browser or download another one which supports HTML5'
  }
}

socket.on('connect', function () {
  // Tell server to add this player
  socket.emit('new player')
  // remember socket id to identify current player when drawing
  playerId = socket.io.engine.id
})

/**
 * modern browser equivalent of jQuery $(document).ready()
 */
document.addEventListener('DOMContentLoaded', init())

/**
 * Shim for animation loop.
 * Selects one that's available or uses fallback with setTimeout.
 */
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback, element) {
      window.setTimeout(callback, 1000 / 60)
    }
})()
