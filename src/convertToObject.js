'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const arrayString = sourceString.split(';');

  for (let i = 0; i < arrayString.length; i++) {
    const item = arrayString[i].trim().split(':');

    if (item.length === 2) {
      const key = item[0].trim();
      const value = item[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
