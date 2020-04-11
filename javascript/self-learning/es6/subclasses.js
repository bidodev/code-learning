//es5
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

var AthleteES5 = function (name, birthYear, job, olimpicGames, medals) {
  PersonES5.call(this, name, birthYear, job);
  this.olimpicGames = olimpicGames;
  this.medals = medals;
};

AthleteES5.prototype = Object.create(PersonES5.prototype);

var johnAthleteES5 = new AthleteES5("John", 1989, "Swimmer", 3, 10);
console.log(johnAthleteES5);
