// // /**
// //  * JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// //  * Convert the given number into a roman numeral.
// //  *
// //  * All roman numerals answers should be provided in upper-case.
// //  */

// const convertToRoman = (num) => {
//   let saveString = num.split("");
//   let otherArray = [];
//   //   console.log("DEBUG: saveString", saveString);

//   //   for (let i = 0; i < ROMAN_DECIMAL_VALUES.length; i++) {
//   //     if (ROMAN_DECIMAL_VALUES[i].d === 1000) {
//   //       console.log(ROMAN_DECIMAL_VALUES[i].r);
//   //     }
//   //   }
//   // };
//   for (let i = saveString.length - 1; i >= 0; i--) {
//     otherArray.push(saveString[i]);
//   }
//   console.log(otherArray);
//   console.log(otherArray[0]);
//   console.log(otherArray[1]);
//   console.log(otherArray[2]);
//   console.log(otherArray[3]);

//   // console.log(otherArray.slice)
//   /**
//    *[90]
//    * 1984
//    * 1000
//    * 900
//    * 80
//    * 4
//    */
// };
// // convertToRoman("1984"); //M CM LXXX IV
// // convertToRoman("3999"); //MMM CM XC IX
/**
 *  { },
  {  },
  { },
  { },
  {  },
  {  },
  {  },
  {  },
  { d:  },
  { d: 900, r: "CM" },
  { d: 1000, r: "M" }
 */

const ROMAN_DECIMAL_VALUES = {
  0: "",
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

function zero(arg) {
  let shit = [1, 10, 100, 1000];
  let num = arg.split("").reverse();
  // console.log(num);

  let str = [];
  for (let i = 0; i < num.length; i++) {
    str.push(num[i] * shit[i]);
  }
  return str;
}
continues = zero("1500");
console.log(continues);

let resultRoman = "";
for (let i = continues.length - 1; i >= 0; i--) {
  resultRoman += ROMAN_DECIMAL_VALUES[continues[i]];
}
console.log(resultRoman);
