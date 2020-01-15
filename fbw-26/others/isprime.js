// isPrime? Create a function that returns true if a number is prime and false if it's not.
// a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
// If the loop find others divisors, it means the number isn't prime.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    console.log(i);
    console.log(value);

    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
console.log(isPrime(1));

/* Number 2
    first interaction i = 2 < 2 (false) We won't enter the loop, so go to the return.
*/

/* Number 3
    first interaction i = 2 < 3 (true) (3 % 2 = 1)
    second interaction i = 3 < 3 (false) We won't enter the loop, so go to the return.
*/

/* Number 4
    first interaction i = 2 < 4 (true) (4 % 2 = 0) we left the interaction, because when the remainder is 0, means we don't have a prime number.
*/

/* Number 5
    first interaction i = 2 < 5 (true) (5 % 2 = 1)
    second interaction i = 3 < 5 (true) (5 % 3 = 1)
    third interaction i = 4 < 5 (true) (5 % 4 = 1)
    fourth interaction i = 5 < 5 (false) we left the loop without find a divisor, it means the number is prime.
    
/* Number 9
first Interaction = 9 % 2 = 1
second Interaction = 9 % 3 = 0 //we left the interaction, because when the remainder is 0, means we don't have a prime number.
*/

