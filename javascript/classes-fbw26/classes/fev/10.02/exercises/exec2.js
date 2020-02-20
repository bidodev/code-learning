/**
 *  2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
 * The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
 */
const SCRABBLE_TILES = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

const maxScore = arr => {
  //creating a newArray, I don't want mess up with the original Array.
  newArray = [...arr];

  let i = 0;
  let maxScore = 0;

  //a simple while solve our life
  while (i < SCRABBLE_TILES.length) {
    maxScore += SCRABBLE_TILES[i].score;
    i++;
  }
  return maxScore;
};
console.log(maxScore(SCRABBLE_TILES));
