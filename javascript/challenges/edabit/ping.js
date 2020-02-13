/* A game of table tennis almost always sounds like Ping! followed by Pong!

* Therefore, you know that Player 2 has won if you hear Pong!as the last sound
* (since Player 1 didn't return the ball back).
* Given an array of Ping!, create a function that inserts Pong! in between each element. Also: 
* If win equals true, end the list with Pong!. If win equals false, end with Ping! instead.
* pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
* pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
* pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
* You will always return the ball (i.e. the Pongs are yours). Player 1 serves the ball and makes Ping!.
 
* Return an array of strings.
*/

const pingPong = (arr, win) => {
  let result = [];

  arr.forEach((element) => {
    result.push(element) + result.push("Pong");
  });
  return win ? result : result.slice(0, result.length - 1);
};
console.log(pingPong(["Ping!"], false));
console.log(pingPong(["Ping!", "Ping!"], true));
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));
