//Challenge 1: Your Age in Days..

const ageInDays = () => {
  let birthYear = prompt("What year were you born?");

  const date = new Date();
  const currentYear = date.getFullYear();

  const daysOld = (currentYear - birthYear) * 365;

  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(`Your are ${daysOld} days old!`);
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
};

const reset = () => {
  document.getElementById("ageInDays").remove();
};
