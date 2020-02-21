//**Who's The Oldest?**
// Given an object containing the names and ages of a group of people, return the name of the oldest person.
// **Notes**
// All ages will be different.
// **Examples**
// oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"
// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"
// **Notes**
// All ages will be different.
const people = {
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
};

const oldest = (obj) => {
  let orderedObj = Object.entries(obj);
  let bigger = 0;

  for (let i = 0; i < orderedObj.length; i++) {
    const element = orderedObj[i];
    //console.log(element[1]);
    bigger = element[1];
    // console.log(element[0]);
    if (element[i] > bigger) {
      bigger = element[i];
    }
  }
  console.log(bigger);
};
console.log(oldest(people));
