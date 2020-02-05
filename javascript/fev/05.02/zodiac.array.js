function createObject(name, day, month, year) {
  let result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year
  };
  return result;
}
userData = createObject("juca", 27, 06, 1989);
// console.log(saveUser);

const lastDay = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
const signs = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn"
];

let array = [["Capricorn", 19]];
console.log(array[0][1]);

function mySign(day, month) {
  if (day > lastDay[month]) {
    console.log(signs[month]);
  } else {
    console.log(signs[month - 1]);
  }
}
//print the Sign
mySign(01, 06);
