/**
 * 4. Free Shipping. Create a function that determines whether an online order should get free shipping.
 * An order gets free shipping if the total cost of items exceeds €50.
 *
 * Examples:
 * freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
 * freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
 * freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
 */

const freeShipping = obj => {
  let result = 0;

  for (let key in obj) {
    result += obj[key];
  }

  return result > 50; //gets free shipping if the total cost of items exceeds €50.
};
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);
