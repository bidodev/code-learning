// function zodiac(name, day, month, year) {
//   const result = {
//     userName: name,
//     birthDay: day,
//     birthMonth: month,
//     birthYear: year,

//     yourZodiac: function() {
//       let signs = [
//         ["Capricorn", 19],
//         ["Aquarius", 18],
//         ["Pisces", 20],
//         ["Aries", 20],
//         ["Taurus", 21],
//         ["Gemini", 21],
//         ["Cancer", 22],
//         ["Leo", 22],
//         ["Virgo", 21],
//         ["Libra", 22],
//         ["Scorpio", 21],
//         ["Sagittarius", 20],
//         ["Capricorn", 19]
//       ];

//       let getSign = day > signs[0][1] ? signs[month][0] : signs[month - 1][0];
//       return `Hey ${this.userName}, your zodiac sign is ${getSign}.`;
//     }
//   };
//   return result.yourZodiac();
// }
// console.log(zodiac("Hadi", 01, 09, 1989));

const dayOfYear = date => {
  let month = date.getMonth();
  let year = date.getFullYear();
  let days = date.getDate();

  for (let i = 0; i < month; i++) {
    days += new Date(year, i + 1, 0).getDate();
  }
  return days;
};

const signs = [
  { name: "Capricornio", start: "01", end: "19" }, //0
  { name: "Aquarius", start: "20", end: "49" }, //1
  { name: "Pisces", start: "50", end: "79" }, //2
  { name: "Aries", start: "80", end: "109" }, //3
  { name: "Taurus", start: "110", end: "140" }, //4
  { name: "Gemini", start: "141", end: "171" }, //5
  { name: "Cancer", start: "172", end: "203" }, //6
  { name: "Leo", start: "204", end: "234" }, //7
  { name: "Virgo", start: "235", end: "265" }, //8
  { name: "Libra", start: "266", end: "295" }, //9
  { name: "Scorpio", start: "296", end: "325" }, //10
  { name: "Sagittarius", start: "326", end: "355" }, //11
  { name: "Capricorn", start: "356", end: "366" } //11
];

const zodiacSign = () => {
  return dayYear <= signs[month - 1].end
    ? signs[month - 1].name
    : signs[month].name;
};

/**
 * Change here
 */
day = 19;
month = 12;
year = 1989;

data = new Date(year, month - 1, day);

dayYear = dayOfYear(data);
console.log(zodiacSign(dayYear));
