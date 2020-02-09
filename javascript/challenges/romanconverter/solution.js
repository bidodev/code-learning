/**
 * JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 */

const ROMAN_DECIMAL_VALUES = [
  { d: 1, r: "I" },
  { d: 4, r: "IV" },
  { d: 5, r: "V" },
  { d: 9, r: "IX" },
  { d: 10, r: "X" },
  { d: 40, r: "XL" },
  { d: 50, r: "L" },
  { d: 90, r: "XC" },
  { d: 100, r: "C" },
  { d: 400, r: "CD" },
  { d: 500, r: "D" },
  { d: 900, r: "CM" },
  { d: 1000, r: "M" }
];

const convertToRoman = num => {
  let saveString = num.split("");
  console.log("DEBUG: saveString", saveString);

  for (let i = 1; i < saveString.length; i++) {
    // restNumber += "0";
  }
  //   number = saveString.shift() + restNumber;
  //   console.log(number);
};

convertToRoman("84");

//Under development

/**
 *
 */
