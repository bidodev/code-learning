let vals = [3, 2, 0, 9, 4, 5];

// const sum = (arr) => {
//   let result = 0;
//   for (let vals of arr) {
//     result += vals;
//   }
//   return result;
// };
// console.log(sum(vals));

// sum = (acc, currect) => {
//   return acc + currect;
// };

// const answer = vals.reduce(sum);
// console.log(answer);

sum = (acc, currect) => {
  if (currect < acc) {
    acc = currect;
  }
  return acc;
};

const answer = vals.filter(sum);
console.log(answer);
