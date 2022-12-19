// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Pumpkin's Prizes</h1>`;

/**
 * Scrimba mascot Pumpkin has won the grand prize at an international cat show. Below are Pumpkin's scores from the judges, as well as all the prizes he's won. In all the excitement of victory, they've become a jumbled mess of nested arrays. Let's help Pumpkin by sorting it out.
 *
 * Write a function to flatten nested arrays of string or numbers into a single array. There's a method for this, but practice both doing it manually and using the method.
 *
 * Example input: [1, [4, 5], [4, 7, 6, 4], 3, 5]
 * Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
 */

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ['💰', '🐟', '🐟'],
  '💰',
  '💐',
  '💵',
  ['💵', '💰'],
  ['🐟', '💐', '💐'],
  '💵',
  '💵',
  ['🐟'],
  '🐟',
];

function flatten(arr) {
  /** MANUAL WAY */
  const flatArr = [];
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;

  /** USING REDUCE() METHOD
   * a -> accumulator
   * c -> currentValue
   */
  // return arr.reduce((a, c) => a.concat(c), []);
}

console.log(flatten([1, [4, 5], [4, 7, 6, 4], 3, 5]));
console.log(flatten(kittyScores));
console.log(flatten(kittyPrizes));
