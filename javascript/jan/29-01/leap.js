//1. Write a function that gives us the next 20 leap years. (Schaltjahre)

/**
* How to Calculate Leap Years
* In the Gregorian calendar, three criteria must be taken into account to identify leap years:

* The year can be evenly divided by 4;
* If the year can be evenly divided by 100, it is NOT a leap year, unless;
* The year is also evenly divisible by 400. Then it is a leap year.
* According to these rules, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years.
*/

//years to check
let myYearsArr = [];

//Populate the array with the nexts 100 years..
let d = new Date();
let currentYear = d.getFullYear();

for (let i = currentYear; i < 2220; i++) {
  myYearsArr.push(i);
}

const leapYear = arrYears => {
  //let save the found leap years ..
  let leapYears = [];

  for (let i = 0; i < arrYears.length; i++) {
    if (
      (arrYears[i] % 4 == 0 && arrYears[i] % 100 != 0) ||
      arrYears[i] % 400 == 0
    ) {
      leapYears.push(arrYears[i]);
    }
  }
  return leapYears;
};

const myLeapYears = leapYear(myYearsArr);

//print the next 20 leap years..
console.log(
  `The next 20 leap years are: ${myLeapYears.slice(0, 20).join(" ")}`
);
