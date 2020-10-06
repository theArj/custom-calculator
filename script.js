// console.log("Hello World");

// A-sync function and a math filter required.
// After getting input from type of music, it should prompt
// filter to show elements within that genre.

// Create a function that takes the number of strings and multiplies
//  it by the number of frets to give the total number of notes playable
//  on the instrument.

// Since A-sync and math filters were not working, "jam" related elements are
//  commented out.

// const inputJam = document.getElementById("jam");
const calculatebutton = document.getElementById("#btnClick");
const inputStrings = document.getElementById("#strings");
const inputFrets = document.getElementById("#frets");
const displayTotal = document.getElementById("#total_notes");

// inputJam.addEventListener("change", calculate);
inputStrings.addEventListener("input", calculate);
inputFrets.addEventListener("input", calculate);
calculatebutton.addEventListener("click", calculate);

function calculate() {
  console.log("hello world");
  //   Because A-sync and math fileters are required to omit certain
  //      number of strings and frets according to genre, the "jam" variable
  //      will be disabled for the time being.
  //   const jam = document.getElementById("jam").nodeValue;
  const strings = parseInt(inputStrings.value);
  const frets = parseInt(inputFrets.value);
  const total = strings * frets;
  console.log(total);
  displayTotal.innerHTML = total;
  //   total = total.toFixed(1);
  //   document.getElementById("total_notes").style.display = "block";
  //   document.getElementById("notes").innerHTML = total;
}

document.getElementById("btnClick").onclick = function () {
  calculate();
};

calculate();
