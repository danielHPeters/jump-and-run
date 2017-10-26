'use strict'
const chai = require('chai')
const Player = require('./../../../src/game/model/Player')
const Area = require('./../../../src/game/model/Area')
const Material = require('./../../../src/game/model/Material')

chai.should()

describe('Player', () => {
  let player
  beforeEach(() => {
    player = new Player(10, 20, 30, 30, new Material('Player'), new Area('area'))
  })
  describe('#gainLife', () => {
    it('should add only one life to player', () => {
      player.gainLife()
      player.lives.should.equal(4)
    })
  })

  describe('#loseLife', () => {
    it('should remove only one life from player', () => {
      player.loseLife()
      player.lives.should.equal(2)
    })
  })

  describe('#toggleRun', () => {
    it('change flag running to true', () => {
      player.toggleRun()
      player.running.should.equal(true)
    })
  })
})