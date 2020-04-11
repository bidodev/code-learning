//es5
/*
var PersonES5 = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

PersonES5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

var pedro = new PersonES5("Pedro", 1989, "Designer");
pedro.calculateAge();

//subclass
var AthleteES5 = function (name, birthYear, job, olimpicGames, medals) {
  PersonES5.call(this, name, birthYear, job);
  this.olimpicGames = olimpicGames;
  this.medals = medals;
};

AthleteES5.prototype = Object.create(PersonES5.prototype);

//method
AthleteES5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};

var johnAthleteES5 = new AthleteES5("John", 1989, "Swimmer", 3, 10);
console.log(johnAthleteES5);

johnAthleteES5.wonMedal();
console.log(johnAthleteES5);
*/

//ES6
class PersonES6 {
  constructor(name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
  }

  //methods
  calculateAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there..");
  }
}

//subclass
class AthleteES6 extends PersonES6 {
  constructor(name, yearBirth, job, olympicGames, medals) {
    super(name, yearBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

pedro = new AthleteES6("Pedro", 1990, "Designer", 3, 10);

//call wonMedal method
pedro.wonMedal();

pedro.calculateAge();
