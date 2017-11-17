const Entity = require('./Entity')
/**
 * This class defines an item. Each item has a name, description and action.
 *
 * @author Daniel Peters
 * @version 1.0
 * @type {module.Item}
 */
module.exports = class Item extends Entity {
  constructor (x, y, width, height, type, description, action) {
    super(x, y, width, height, type)
    this.description = description
    this.action = action
    this.solid = true
  }

  /**
   * Sets the description of the item.
   * @param {string} description
   */
  set description (description) {
    if (typeof description !== 'string') {
      throw new Error('item description must be of type string')
    }
    this._description = description
  }

  /**
   *
   * @param {function} action
   */
  set action (action) {
    if (typeof action !== 'function') {
      throw new Error('item action must be of type function')
    }
    this._action = action
  }

  /**
   * Gets the description of the item.
   * @returns {string}
   */
  get description () {
    return this._description
  }

  /**
   * Gets the action of this item.
   * @returns {function}
   */
  get action () {
    return this._action
  }

  /**
   * Executes the action of this item.
   */
  use () {
    this.action()
  }
}
