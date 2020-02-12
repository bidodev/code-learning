/**
 * Step 1
Initially number = 3549
Since 3549 >= 1000 ; largest base value will be 1000 initially.
Divide 3549/1000. Quotient = 3, Remainder =549. The corresponding symbol M will be repeated thrice.
Step 2

Now, number = 549
1000 > 549 >= 500 ; largest base value will be 500.
Divide 549/500. Quotient = 1, Remainder =49. The corresponding symbol D will be repeated once.
Step 3

Now, number = 49
50 > 49 >= 40 ; largest base value is 40.
Divide 49/40. Quotient = 1, Remainder = 9. The corresponding symbol XL will be repeated once.
Step 4

Now, number = 9
10> 9 >= 9 ; largest base value is 9.
Divide 9/9. Quotient = 1, Remainder = 0. The corresponding symbol IX will be repeated once.
Step 5
 */
console.log(3549 % 1000);
console.log(549 % 100);
console.log(49 % 10);
console.log(9 % 1);
