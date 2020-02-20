/**
 * Person Class
 *
 * Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: “name, age years old”. So, for example, if John is 19 years old, then the function describe of his object will return “John, 19 years old”.
 */

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describre() {
    console.log(`${this.name}, is ${this.age} years old`);
  }
}
const john = new Person("John", 19);
john.describre();

/**
 * TV Class
 *
 * Create a TV class with properties like brand, channel and volume.
 * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
 * Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
 * Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
 * Add a method to reset TV so it goes back to channel 1 and volume 50.
 * It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.
 */

class Television {
  //television template
  constructor(_brand, _channel = 1, _volume = 3) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }

  //method to increase the TV volume.
  increaseVolume() {
    console.log(
      this.volume == 100
        ? `Sorry the volume is already at the maximum.`
        : this.volume++
    );
  }
  //method to decrease the TV volume.
  decreaseVolume() {
    console.log(
      this.volume == 0
        ? `Sorry the volume is already at minimum.`
        : this.volume--
    );
  }

  //method to set the TV to a random channel between 1 and 50
  randomChannel() {
    const MAX_TV_CHANNEL = 51;
    const RANDOM = (this.channel = Math.floor(Math.random() * MAX_TV_CHANNEL));
    console.log(`The TV Channel was set to the channel ${RANDOM}`);
  }

  //method to set the TV values to default
  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  //method to get the TV values
  info() {
    console.log(
      `${this.brand} is at channel ${this.channel}, volume ${this.volume}`
    );
  }
}

const zimmer = new Television("Panasonic", 20);
//increase our volume
//console.log(zimmer);
zimmer.decreaseVolume();
zimmer.decreaseVolume();
console.log("Zimmer volume is", zimmer.volume); //print out the new volume.

// //decrease our volume
// zimmer.decreaseVolume();
// zimmer.decreaseVolume();
// zimmer.decreaseVolume();
// console.log(zimmer.volume);

// //Set th TV to a random channel
// zimmer.randomChannel();

// //get info from the TV
// zimmer.info();

// //reset the TV to default.
// zimmer.resetTV();

// //let see if the TV was reseted to defaltu using or info methd.
// zimmer.info();

// //Create a new instance of the Television class.
// const wohnZimmer = new Television("Sony", 10, 50);
// wohnZimmer.info();
console.log(Math.random());
