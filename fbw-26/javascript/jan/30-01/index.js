// try {
//   console.log(`${juca}`);
// } catch (erro) {
//   console.error(`Erro` + erro);
// }

// try {
//   throw new Error("We made a error");
// } catch (error) {
//   console.error(error.message);
// } finally {
//   console.log("This is always going to print");
// }

// Write a function will give the alphabetical order for a passed character
//  i.e.  A -> 1
// B -> 2
const characterValue = letter => {
  return letter.toLowerCase().charCodeAt(letter) - 96;
};

console.log(characterValue("l"));

var someString = "dcba";
someString.split("");

for (i = 0; i < someString.length; i++) {
  console.log(someString.charCodeAt(i) - 96);
}
