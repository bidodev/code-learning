const user = {
  johnDoe: {
    age: 34,
    email: "claudinei@bido.com"
  }
};

const {
  johnDoe: { age, email }
} = user;

const {
  johnDoe: { age: userAge, email: userEmail }
} = user;

console.log(email);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// change code below this line

const {
  today: { low: lowToday, high: highToday }
} = LOCAL_FORECAST;
// change code above this line

console.log(lowToday); // should be 64
console.log(highToday); // should be 77
