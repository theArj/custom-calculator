// A-sync function and a math filter required.
// After getting input from type of music, it should prompt
// filter to show elements within that genre.

// Create a function that takes the number of strings and multiplies it by the number of frets to give the total number of notes playable on the instrument.
function calculate() {
  //   Because A-sync and math fileters are required to omit certain number of strings and frets according to genre, the "jam" variable will be disabled for the time being.
  var jam = document.getElementById("jam").nodeValue;
  var strings = document.getElementById("strings").nodeValue;
  var frets = document.getElementById("frets").nodeValue;
  var total = strings * frets;
  total = total.toFixed(1);
  document.getElementById("total_notes").style.display = "block";
}
