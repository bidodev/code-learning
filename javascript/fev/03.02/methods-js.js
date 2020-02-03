const getEquivalent = note => {
  const FIRST_NOTE = ["C#", "D#", "F#", "G#", "A#", "B#"];
  const SECOND_NOTE = ["Db", "Eb", "Gb", "Ab", "Bb", "C"];

  let index = null;
  const newArray = FIRST_NOTE.concat(SECOND_NOTE);
  console.log(newArray);

  if (typeof note === "undefined" || note.length == 0) {
    return `Please insert a value..`;
  } else {
    if (newArray.includes(note)) {
      index = newArray.indexOf(note);
      console.log(index);
    } else {
      return `This is not a valide note..`;
    }
    if (index >= FIRST_NOTE.length) {
      index -= SECOND_NOTE.length;
      return `The equivalent value for ${note} is ${FIRST_NOTE[index]}`;
    } else {
      index;
      return `The equivalent value for ${note} is ${SECOND_NOTE[index]}`;
    }
  }
};
