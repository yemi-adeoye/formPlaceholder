const { formPlaceholder, presets } = require('./index.js');

let options = {
  format: true, // the text will be formatted if true
  replace: true, // text will be replaced from start to stop if specified
  separator: '-', // character to be used as separator
  replacer: 'X', // character to be used to replace part of string
  separatorPos: [2, 4], // separator positions: in this case will appearm after the third and fifth character
  replaceStart: 3, // character from which replacing will start; first character here
  replaceStop: 5, // character where replacing will stop; sixth character here. Note that you count the     separators too for the positioning of the replacer
};

console.log(formPlaceholder('17061986', options));
