/**
 *
 * @type {module.BlockGenerator}
 */
let BlockGenerator = require('./BlockGenerator')

/**
 *
 * @type {module.Area}
 */
let Area = require('./../model/Area')

/**
 *
 * @type {module.LevelLoader}
 */
module.exports = class LevelLoader {
  /**
   * Default constructor. Sets the path to level definition files.
   *
   * @param {string} levelsPath path to level files
   */
  constructor (levelsPath) {
    this.levelsPath = levelsPath
  }

  /**
   * Loads level file.
   *
   * @param {string} level level name
   */
  loadLevel (game, level) {
    let levelDefinition = require(this.levelsPath + level)

    let areasDone = 0

    levelDefinition.areas.forEach(areaDefinition => {
      let area = new Area(areaDefinition.id)
      areasDone++
      area.blocks = BlockGenerator.generateBlocks(game, area, areaDefinition.blocks)
      game.areas.push(area)
      if (areasDone === levelDefinition.areas.length) {
        this.setExits(game, levelDefinition)
      }
    })
  }

  /**
   * After loading level. The areas need to be set to allow travelling between them.
   *
   * @param {module.Game} game initialized game instance
   * @param {{}} levelDefinition level definition data loaded from file
   */
  setExits (game, levelDefinition) {
    levelDefinition.areas.forEach(areaDefinition => {
      let area = game.areas.filter(area => area.id === areaDefinition.id)[0]
      Object.keys(areaDefinition.exits).forEach(function (key) {
        if (areaDefinition.exits[key] !== null) {
          area[key] = game.areas.filter(area => area.id === areaDefinition.exits[key])[0]
        }
      })
    })
  }
}
