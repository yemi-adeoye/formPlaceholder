/** Hold the defauklt options*/
let defaultOptions = {
  format: true,
  replace: true,
  separator: '-',
  replacer: 'X',
  separatorPos: [3, 5],
  replaceStart: 1,
  replaceStop: 6,
};

/** Holds a couple of predefined options */
const presets = {
  ccv: {
    format: true,
    replace: false,
    separator: '/',
    replacer: '',
    separatorPos: [2],
    replaceStart: 0,
    replaceStop: 0,
  },
  mastercard: {
    format: true,
    replace: true,
    separator: ' ',
    replacer: 'X',
    separatorPos: [4, 8, 12],
    replaceStart: 1,
    replaceStop: 13,
  },
  phone: {
    format: true,
    replace: false,
    separator: ' ',
    replacer: 'X',
    separatorPos: [3, 6],
    replaceStart: 0,
    replaceStop: 0,
  },
};

/** Updates the default options with the user options */
/** @param {object} userOptions : The options provided by the user */
const setOptions = (userOptions) => {
  const options = { ...defaultOptions, ...userOptions };
  return options;
};

/** Helper function, replaces the characters to be concealed in the provided string */
/** @param {string} text : Text supplied by user */
/** @param {integer} start : Position where concealing starts from */
/** @param {integer} stop : Position where concealing ends */
const replaceString = (
  text,
  replacer = defaultOptions.replacer,
  start = defaultOptions.replaceStart,
  stop = defaultOptions.replaceStop
) => {
  const toBeReplaced = text.slice(start - 1, stop - 1);

  const replaceWith = Array(toBeReplaced.length + 1).join(replacer);

  replacedString = text.replace(toBeReplaced, replaceWith);
  return replacedString;
};

/** Helper function, formats the string provided by placing separators where required */
/** @param {string} text : Text supplied by user */
/** @param {char} separator : Character used to separate string */
/** @param {array} pos : Holds positions where the sepoarators should be placed*/
const formatString = (
  text,
  separator = defaultOptions.separator,
  pos = defaultOptions.separatorPos
) => {
  start = 0;

  parts = [];

  for (a of pos) {
    parts.push(text.slice(start, a));
    start = a;
  }

  parts.push(text.slice(a, text.length));

  return parts.join(separator);
};

const formPlaceholder = (text, customOptions = defaultOptions) => {
  let returnVal;

  options = setOptions(customOptions);

  if (options.format === true && options.separatorPos.length === 0) {
    throw 'Please set separator positions, if separator are not required then set format options to false';
  } else if (
    options.separatorPos.forEach((pos) => {
      return pos > text.length ? true : false;
    })
  ) {
    throw 'One or more separator position out of text range';
  } else {
    returnVal = options.replace
      ? replaceString(
          text,
          options.replacer,
          options.replaceStart,
          options.replaceStop
        )
      : text;

    returnVal = options.format
      ? formatString(returnVal, options.separator, options.separatorPos)
      : returnVal;
  }
  return returnVal;
};

module.exports = { formPlaceholder, presets };
