// From CoWork mentor:
// A-sync function and a math filter required.
// After getting input from type of music, it should prompt
// filter to show strings and frets within that genre.

// Create a function that takes the number of strings and multiplies
//  it by the number of frets to give the total number of notes playable
//  on the instrument.

// Since A-sync and math filters were not working, "jam" related elements are
//  commented out.

// const inputJam = document.getElementById("jam");
const calculatebutton = document.querySelector("#btnClick");
const inputStrings = document.querySelector("#strings");
const inputFrets = document.querySelector("#frets");
const displayTotal = document.querySelector("#total_notes");

calculatebutton.addEventListener("click", calculate);

function calculate() {
  //   Because A-sync and math fileters are required to omit certain
  //      number of strings and frets according to genre, the "jam" variable
  //      will be disabled for the time being.

  //   const jam = document.getElementById("jam").nodeValue;
  const strings = parseInt(inputStrings.value);
  const frets = parseInt(inputFrets.value);
  const total = strings * frets;
  console.log(total);
  displayTotal.innerHTML = total;
}

document.getElementById("btnClick").onclick = function () {
  calculate();
};

// Collaborative with Jackie Chan to fix getQuerySelector (previously getElementById
//  and was not working).
