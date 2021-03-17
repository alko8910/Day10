function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      // Add a record here
      artist: "Djordje Balasevic",
      title: "Boza zvani Pub",
      release_year: 1980,
      id: 1234,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: false,
    },
  };
  return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
