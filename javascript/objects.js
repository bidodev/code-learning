//Objects in JavaScript

let student = {
    firstName: 'Robert',
    lastName: 'Silva',
    age: 25,
    height: 170,
    studentInfo: function() {
        return this.firstName + '\n' + this.lastName + '\n' + this.age;
    }
}

console.log(student.firstName);

//change the value in key;
student.firstName = 'Jose';

//console.log(student.firstName);

student.age++; //increment the age
console.log(student.age);

//
console.log(student.studentInfo());