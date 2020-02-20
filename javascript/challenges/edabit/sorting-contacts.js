// **Contact List**

/**
 * Write a sorting function that takes in an array of names and sorts them by last name either
 * alphabetically (ASC) or reverse-alphabetically (DESC).
 * alphabetically (ASC) or reverse-alphabetically (DESC).
 * */

// **Notes**
// An array with a single name should be trivially returned.
// An empty array, or an input of null or undefined should return an empty array.

// **Examples**

const sortContacts = (arr, order = "ASC") => {
  if (arr == null) {
    return [];
  }
  const SORT = order;
  const NAMES = arr;

  switch (SORT) {
    case "ASC":
      result = NAMES.sort();
      break;

    case "DESC":
      result = NAMES.sort().reverse();
      break;
  }

  return result;
};

const array = ["Paul Erdosa", "Carl Gauss", "Leonhard Euler"];
console.log(sortContacts(array, "ASC"));
console.log(sortContacts(array, "DESC"));
console.log(sortContacts([], "DESC")); //➞ []
console.log(sortContacts(null, "DESC")); //➞ []
console.log(sortContacts(undefined, "DESC")); //➞ []
