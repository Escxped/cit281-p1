/*
  CIT 281 Project 1
  Name: Cadin Kraft
  4/13/2025
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // Cs 111 
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = getRandomInteger(5, 26);
  let result = "";
  
  for (let i = 0; i < length; i++) {
    result += alphabet[getRandomInteger(0, alphabet.length)];
  }
  
  console.log(`${length} lowercase letters: ${result}`);
  