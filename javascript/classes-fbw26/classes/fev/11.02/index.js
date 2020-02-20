// Nesting arrays
// Nesting and accessing arrays within each other
const arr = [
  [2, 3, 4],
  [533, 53],
  [345, 56, 6]
];
// 111 222 333 444
console.log(arr[1][1]);
console.log(arr[2][1]);
for (let i = 0; i < arr.length; i++) {
  // o
  for (let j = 0; j < arr[i].length; j++) {
    // o
    console.log(arr[i][j]); // 2 0
  }
}
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, i, 44]); // pushing an array
  }
}
let names = ["Ali", "Olga", "Nancy"];
names.forEach((name) => console.log(name)); // just an ex
names.map((name) => console.log(name)); //
let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
];
// our beloved for
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// forEach
family.forEach((arr) => arr.forEach((element) => console.log(element)));
// fon in
console.log("array new");
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}
// reading why not for in is working

// Nesting objects
// Nesting and accessing objects in objects
const tShirt = {
  color: "red",
  size: ["XS", "S", "M", "l", "XL"],
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    obj: {
      one: 3344,
      two: 5654,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  }
};
console.log(tShirt.size[2]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.name[0]);
console.log(tShirt.countries.obj.two);

// Nesting and accessing arrays in objects

// Nesting and iterating over objects in arrays

// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

// Extracting values from objects: Object destructuring assignment

tShirt.method();
tShirt.countries.display();
tShirt.countries.obj.printOut();

let newShort = tShirt.countries;
newShort.display();

//nesting and acessing arrays in the objects.
let car = ["ford", "pink", 2020, "enj", "macac"];
let [carName, carColor, carYear, ...rest] = car;

console.log(carName);
console.log(carColor);
console.log(rest);
//nesting and iterating over objectcs in arrays
