// // then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// // Move the first letter of each word to the end of the word.
// // Add “ay” to the end of the word.

// // Extra Practice
// // Preserve proper capitalization as in the examples below.
// // Examples:
// // pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// // pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// // pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

// // Words starting with a vowel (A, E, I, O, U) append “way” to the end instead. [done]
function startVowel(str) {
  // Convert string to lowercase
  str = str.toLowerCase();

  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    return str + "way";
  } else {
    // If first letter is a vowel
    return str + "ay";
  }
}

// function moveToEnd() {}

// // Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it.
// function takeString(str) {
//   let strArr = str.split(" ");
//   //   console.log(startVowel(strArr[0]));
//   //   console.log(startVowel(strArr[1][1]));
// }

// console.log(startVowel("Tom"));
// function arraymove(arr, fromIndex, toIndex) {
//   var element = arr[fromIndex];
//   arr.splice(fromIndex, 1);
//   console.log("::" + arr);
//   arr.splice(toIndex, 0, element);
// }

// function test() {
//   var AR = ["A", "B", "C", "D", "E", "F"];
//   console.log(AR);
//   // var AR2 = AR.slice(); // copy
//   var N = AR.length;
//   for (var i = 0; i < N; i++) {
//     for (var j = 0; j < N; j++) {
//       console.log("(" + i + "," + j + ")");
//       var AR2 = AR.slice();
//       console.log(AR2);
//       arraymove(AR2, i, j);
//       console.log(AR2);
//       arraymove(AR2, j, i);
//       console.log(AR2);
//     }
//   }
// }

function move(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));
