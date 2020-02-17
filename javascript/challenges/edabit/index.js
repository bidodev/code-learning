/**
 * Odds vs. Evens
 * 
 * Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.

Examples
 oddsVsEvens(97428) ➞ "odd"
// odd = 16 (9+7)
// even = 14 (4+2+8)

oddsVsEvens(81961) ➞ "even"
// odd = 11 (1+9+1)
// even = 14 (8+6)

oddsVsEvens(54870) ➞ "equal"
// odd = 12 (5+7)
// even = 12 (4+8+0)
*/

var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});
