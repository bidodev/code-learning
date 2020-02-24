const shapeArena = (n) => {
  const x = n + (n - 1);
  const y = x * n - (n - 1);
  return y;
};

console.log(shapeArena(4));

/**
1*2^0 = 1
2*2^1 = 4
3*2^2 = 12
4*2^3 = 32
5*2^4 = 80
6*32 = 192
 */
// console.log(1 * 2 ** 0);
// console.log(2 * 2 ** 1);
// console.log(3 * 2 ** 2);
// console.log(4 * 2 ** 3);
// console.log(5 * 2 ** 4);
// console.log(6 * 2 ** 5);

//   n * 2 ** (n -1)
