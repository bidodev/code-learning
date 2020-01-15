//  1 .Calculate the perimeter of a square. Assume each side is 4.75cm.
// perimeter formula is (p= 4a)
function squarePerimeter(value) {
  return value * 4;
}

//  2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
function trianglePerimeter(firstSide, secondSide, thirdSide) {
  return firstSide + secondSide + thirdSide;
}

//  3. Calculate the area of a square. Each side is 5cm.
function squareArea(value) {
  return value * value;
}

// 4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// solved using theory of Heron
// triagle area calculator = https://keisan.casio.com/exec/system/1223267646
// How to calculate triangle area: https://www.todamateria.com.br/area-do-triangulo/
function triangleArea(sideA, sideB, sideC) {
  let perimeter = (sideA + sideB + sideC) / 2;
  return console.log(
    `The triagle area of trigle with the follow sizes: sideA: ${sideA}, sideB: ${sideB}, sideC: ${sideC} is =`,
    (area = Math.sqrt(
      perimeter *
        (perimeter - sideA) *
        (perimeter - sideB) *
        (perimeter - sideC)
    ).toFixed(3))
  );
}

//  5. Calculate the volume of a cube. Length of each side is 9cm.
const columeCube = value => {
  return value ** 3;
};

//  6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
const finalBill = (value, tip) => {
  return (tip / 100 + 1) * value;
};

var bills = {
  firstBill: {
    value: 22.35,
    tipPercentage: 10
  },
  secondBill: {
    value: 26.67,
    tipPercentage: 15
  },

  thirdBill: {
    value: 35.92,
    tipPercentage: 20
  }
};

//1 .Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(squarePerimeter(4.75));

//  2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log(trianglePerimeter(5, 6, 7));

//  3. Calculate the area of a square. Each side is 5cm.
console.log(`\nThe area of a square with a side of ${5} is`, squareArea(5));

// 4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
triangleArea(5, 6, 7);

//  5. Calculate the volume of a cube. Length of each side is 9cm.
console.log(`\nThe volume of a Cube is`, columeCube(5));

//  6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
console.log(
  `The final value is`,
  finalBill(bills.firstBill.value, bills.firstBill.tipPercentage).toFixed(2)
);
console.log(
  `The final value is`,
  finalBill(bills.secondBill.value, bills.secondBill.tipPercentage).toFixed(2)
);
console.log(
  `The final value is`,
  finalBill(bills.thirdBill.value, bills.thirdBill.tipPercentage).toFixed(2)
);

// Heron's formula finds the area of a triangle of which all its sides are known.
// The area is calculated from the semi-perimeter of the triangle s and the length of the sides (a, b and c).

let sides = {
  a: 10,
  b: 10,
  c: 15
};

//calculate the semiPerimeter
let semiPerimeter = (sides.a + sides.b + sides.c) / 2;

let areaResult = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - sides.a) *
    (semiPerimeter - sides.b) *
    (semiPerimeter - sides.c)
);

//The Math.sqrt() function is used to get the square root of a number. If the value of the number is negative, Math.sqrt() returns NaN.
console.log(
  `The area of a triagle with 3 differ sides is ${areaResult.toFixed(1)}cm²`
);
