<h1 align="center">formPlaceholder</h1>

<p align="center">Helps create strings that have some part concealed or formatted in a given fashion</p>

## Links

- [Repo](https://github.com/yemi-adeoye/formPlaceholder 'Badbank FullStack Repo')

- [Live](https://registry.npmjs.org/form-placeholder 'Live View')

## Installation Guidelines

To install from the command line run "npm install form-placeholder"

## Usage

```Javascript
const { formPlaceholder, presets } = require('./index.js');

console.log(formPlaceholder('7013067099', presets.phone));

/* formPlaceholder takes two arguments. First thge string you want formatted and the second
* an object that contains the settings that determines how the string is formatted.
A valid srecond parameter is one that contains one or more keys from the following object
*/

{
  format: true, // the text will be formatted if true
  replace: true, // text will be replaced from start to stop if specified
  separator: '-', // character to be used as separator
  replacer: 'X', // character to be used to replace part of string
  separatorPos: [3, 5], // separator positions: in this case will appearm after the third and fifth character
  replaceStart: 1, // character from which replacing will start; first character here
  replaceStop: 6, // character where replacing will stop; sixth character here. Note that you count the     separators too for the positioning of the replacer
}

### Example 1
console.log(formPlaceholder('701306709'));

[outputs] XXX-XX-6709

### Example 2
console.log(formPlaceholder('1208', presets.ccv));

[outputs] 12/08

### Example 3
console.log(formPlaceholder('7013067098', presets.phone));

[outputs] 701 306 7098

### Example 4

let options = {
  format: true, // the text will be formatted if true
  replace: true, // text will be replaced from start to stop if specified
  separator: '-', // character to be used as separator
  replacer: 'X', // character to be used to replace part of string
  separatorPos: [3, 6], // separator positions: in this case will appearm after the third and fifth character
  replaceStart: 3, // character from which replacing will start; first character here
  replaceStop: 4, // character where replacing will stop; sixth character here. Note that you count the     separators too for the positioning of the replacer
}

console.log(formPlaceholder('7013067098', options));

[outputs] 17-XX-1986
```

## Author

**Yemi Adeoye**

- [Profile](https://github.com/yemi-adeoye 'Yemi Adeoye')
- [Email](mailto:adeyemi_adeoye@hotmail.com?subject=Hi 'Hi!')

## License

MIT
