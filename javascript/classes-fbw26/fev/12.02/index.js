class User {
  constructor(_name, _age, _email) {
    this.name = _name;
    this.age = _age;
    this.email = _email;
  }
}

class Administrator extends User {
  constructor(_name, _age, _email, _role) {
    super(_name, _age, _email);
    this.role = _role;
  }
  show() {
    return `{$this.name} is a {$this.age}`;
  }
}

const bido = new Administrator("Bido", 30, "bido.c@live.com", "sysadmin");
console.log(bido);

class formatDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new formatDate("August 19, 1975 23:15:30").getFormattedDate());
// expected output: "19-Aug-1975"
