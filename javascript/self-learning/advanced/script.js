// Function constuctor
class Person {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
    this.calculateAge = function () {
      console.log(2016 - this.birthYear);
    };
  }
}

const jahn = new Person("Jahn", 1988, "Developer");

jahn.calculateAge();
