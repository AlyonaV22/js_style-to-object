'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const splitString = sourceString.trim().split(';');

  splitString.forEach((item) => {
    const splitItem = item.trim().split(':');

    if (splitItem.length === 2) {
      const key = splitItem[0].trim();
      const value = splitItem[1].trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
