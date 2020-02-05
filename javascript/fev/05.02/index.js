//Object literal context

const object = {
  name: "Ali",
  age: 22,
  add: "xxx str"
};

//property access
object.name;
object.age = 33;

//bracket notation
object["add"];
object["name"];

//object keys
console.log(Object.keys(object));

//object values
console.log(Object.values(object));

//Methods
object.print = function() {
  console.log(`Hi ${object.name} you're very old..`);
};
object.print();

function userData(userName, userAge, userAdd) {
  const object = {
    name: userName,
    age: userAge,
    add: userAdd,
    outPut: function() {
      console.log(`Hi ${this.name} you are.`);
    }
  };
  return object;
}

userData("Jose", 30, "Landersberg Alle");

//this

//Object.prototype.hasOwnProperty();

const person = {
  height: 177,
  age: 30,
  city: "Berlin"
};
console.log(person.hasOwnProperty("age"));
