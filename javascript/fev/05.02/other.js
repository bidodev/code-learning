/**
 * name: our sign name
 * month:
 * lastDay: our last day of the sign.
 */

const signs = {
  0: { sign: "Capricorn", lastDay: 19 },
  1: { sign: "Aquarius", lastDay: 18 },
  2: { sign: "Pisces", lastDay: 20 },
  3: { sign: "Aries", lastDay: 20 },
  4: { sign: "Taurus", lastDay: 21 },
  5: { sign: "Gemini", lastDay: 21 },
  6: { sign: "Cancer", lastDay: 22 },
  7: { sign: "Leo", lastDay: 22 },
  8: { sign: "Virgo", lastDay: 21 },
  9: { sign: "Libra", lastDay: 22 },
  10: { sign: "Scorpio", lastDay: 21 },
  11: { sign: "Sagittarius", lastDay: 20 },
  12: { sign: "Capricorn", lastDay: 19 }
};

const mySign = (birthDay, month) => {
  if (birthDay > signs[month].lastDay) {
    return signs[month].sign;
  } else {
    return signs[month - 1].sign;
  }
};

console.log(mySign(18, 01));
