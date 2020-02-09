data = [
  { signName: "Not real day!", from: "0000" }, //0
  { signName: "Capricorn", from: "0101" }, //1
  { signName: "Aquarius", from: "0121" }, //2
  { signName: "Pisces", from: "0220" }, //3
  { signName: "Aries", from: "0321" }, //4
  { signName: "Taurus", from: "0421" }, //5
  { signName: "Gemini", from: "0521" }, //6
  { signName: "Cancer", from: "0622" }, //7
  { signName: "Leo", from: "0723" }, //8
  { signName: "Virgo", from: "0824" },
  { signName: "Libra", from: "0924" },
  { signName: "Scorpio", from: "1024" },
  { signName: "Sagittarius", from: "1123" },
  { signName: "Capricorn", from: "1222" },
  { signName: "Not real day!", from: "1232" },
  { signName: "empty", from: "0000" }
];

function mySign(day, month) {
  dataFull = `0${month}${day}`;

  if (dataFull >= data[month + 1].from) {
    console.log(data[month + 1].signName);
    //console.log("if");
  } else {
    //console.log("else");
    console.log(data[month].signName);
  }
}
mySign(1, 9);
