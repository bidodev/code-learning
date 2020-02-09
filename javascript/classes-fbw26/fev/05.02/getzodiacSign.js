const signs = {
  Capricorn: 19,
  Aquarius: 18,
  Pisces: 20,
  Aries: 20,
  Taurus: 21,
  Gemini: 21,
  Cancer: 22,
  Leo: 22,
  Virgo: 21,
  Libra: 21,
  Scorpio: 21,
  Sagittarius: 20,
  Juca: 19
};

const userData = (userName, birthDay, birthMonth, birthYear) => {
  const myUser = {
    name: userName,

    birth: {
      day: birthDay,
      month: birthMonth,
      year: birthYear
    },

    printSign: function() {
      signArray = Object.entries(signs);

      return this.birth.day > signArray[this.birth.month][1]
        ? `Hello ${this.name}. Your zodiac sign is ${
            signArray[this.birth.month][0]
          }`
        : `Hello ${this.name}. Your zodiac sign is ${
            signArray[this.birth.month - 1][0]
          }`;
    }
  };
  return myUser.printSign();
};

console.log(userData("Hadi", 01, 09, 1989)); //Hadi
console.log(userData("Claudinei", 27, 06, 1989)); //Claudinei
console.log(userData("Simona", 22, 06, 1989)); //Simona
console.log(userData("Marcelo", 31, 10, 1980)); //Marcelo
console.log(userData("Leonardo", 13, 10, 1987)); //Leonardo
console.log(userData("Mauricio", 27, 12, 1987)); //Leonardo
