// For James to get a 1st class degree,
//he needs to get an average of 80% in all 9 of his assessments.
//He has taken 8 assessments and his average is 78%.
//What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

let sumNote = 8 * 7.8; //After 8 assessment James ended with a deficit of 16% or 1.6 point
console.log(`After 8 assessment he has a total of`, sumNote); //After 8 assessment he has a total of 62.4 points.. but he was supoused to have 64 points.

let supousedNote = 8 * 8;
console.log(
  `After 8 assessment he was supoused to have a total of`,
  supousedNote
);

//Let calculate the deficit in his note..
let noteDeficit = supousedNote - sumNote;

let lastAssessment = 8 + noteDeficit; //he need atlast a 8 plus his deficit..

console.log(`\nThe last note has to be at least ${lastAssessment.toFixed(2)}`);

//During the 8 assessments James had a deficit of 1.6 point, it means that he has to recover it at the end.. sum everything /assessment number.
