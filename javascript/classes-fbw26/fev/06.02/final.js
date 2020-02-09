function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,

    yourZodiac: function() {
      const signs = [
        { name: "Capricornio", start: "01", end: "19" },
        { name: "Aquarius", start: "20", end: "49" },
        { name: "Pisces", start: "50", end: "79" },
        { name: "Aries", start: "80", end: "109" },
        { name: "Taurus", start: "110", end: "140" },
        { name: "Gemini", start: "141", end: "171" },
        { name: "Cancer", start: "172", end: "203" },
        { name: "Leo", start: "204", end: "234" },
        { name: "Virgo", start: "235", end: "265" },
        { name: "Libra", start: "266", end: "295" },
        { name: "Scorpio", start: "296", end: "325" },
        { name: "Sagittarius", start: "326", end: "355" },
        { name: "Capricorn", start: "356", end: "366" }
      ];

      if (22 <= signs[this.birthMonth].end) {
        sign = signs[this.birthMonth].name;
      } else {
        sign = signs[this.birthMonth + 1].name;
      }
      return sign;
    }
  };
  return result.yourZodiac();
}
console.log(zodiac("Hadi", 27, 6, 1989));
