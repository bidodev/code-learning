// const isPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       console.log(num % i === 0);
//       return "I'm here which means I'm not a Prime Number";
//     }
//   }
//   return num > 1;
// };

// console.log(isPrime(50));

/**
 * console.log(isPrime(8));
 * First interaction..
  8 % 2 = 0  return "I'm here which means I'm not a Prime Number"; 
 */

/**
 * console.log(isPrime(9));
 * First interaction..
  9 % 2 == 0 (It's 1 the result)  continue the Loop, now i has the value of 3; 
  9 % 3 == 0 (It's 0 the result) then the loop return "I'm here which means I'm not a Prime Number"; 
 */

/**
 * console.log(isPrime(5));
 * First interaction..
  5 % 2 == 0 (It's 1 the result)  continue the Loop, now i has the value of 3; 
  5 % 3 == 0 (It's 2 the result) continue the Loop, now i has the value of 4; 
  5 % 4 == 0 (It's 1 the result) continue the Loop, now i has the value of 5; 
  5 < 5 (false) then we have to return this number.. now we have 5 and 1.. 
  
  It means, that the we couldn't find any dividing number between 1 and 5
 */

function isInt(number) {
  return number % 1 === 0;
}
let value = 6;

for (let i = 2; i < value; i++) {
  let num = value / i;
  if (isInt(num)) {
    return console.log(false);
  }
  return console.log(true);
}
