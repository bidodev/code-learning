// Basic JavaScript: Record Collection
// You are given a JSON object representing a part of your musical album collection.
// Each album has several properties and a unique id number as its key. Not all albums have complete information.

// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"),
// and a value (like "Addicted to Love") to modify the data in this collection.
// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
// Your function must always return the entire collection object.
// There are several rules for handling incomplete data:
// If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
// If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
// If value is empty (""), delete the given prop property from the album.

// Hints
// Use bracket notation when accessing object properties with variables.

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};
//print out the albun's name and tracks from the collection 2548
//album name
// console.log(collection[2548].album);

// //tracks array
// console.log(collection[2548].tracks);

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

// // Alter values below to test your code
updateRecords(5439, "tracks", "Luiz, Jos3");

//teste = collection[2548].album = "Album";
console.log(collection[5439]);
