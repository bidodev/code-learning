var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true
  },
  {
    artist: "Metallica",
    title: "Black",
    year: 1991,
    formats: ["CD", "Cassette"],
    gold: false
  }
  // Add record here
];

for (let i = 0; i < myMusic.length; i++) {
  console.log(myMusic[i]);
}
