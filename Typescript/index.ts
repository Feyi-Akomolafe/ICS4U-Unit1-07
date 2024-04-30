/**
 * The program is the mean and median calculator for unit-1-06
 *
 * By: Feyi Akomolafe
 * Version: 1.0
 * Since: 2024-03-18
 */

/**
 * @param {Array<number>} listArray parameter one as a number
 * @returns {number} return mean value as a number
 */
function MeanCalculation(listArray: number[]): number {
  // process
  let sum = 0;
  const arraySize = listArray.length;
  for (let loopCounterTwo = 0; loopCounterTwo < arraySize; loopCounterTwo++) {
    sum += listArray[loopCounterTwo];
  }
  const mean = sum / arraySize;
  return mean;
}

/**
 * @param {Array<number>} listArray parameter one as a number
 * @returns {number} return median value as a number
 */
function MedianCalculation(listArray: number[]): number {
  // process
  let median = 0;

  const sortedArray = listArray.sort(function(a, b) {
    return a - b;
  });

  const arraySize = listArray.length;

  if (arraySize % 2 === 0) {
    median = (sortedArray[arraySize / 2] + sortedArray[arraySize / 2 - 1]) / 2;
  } else {
    median = sortedArray[(arraySize - 1) / 2];
  }
  return median;
}

// Check if a file path is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}

const filePath = process.argv[2];

// Read the file contents
const fileContent = readFileSync(filePath, 'utf8');

const newArray = fileContent.split(/\r?\n/);
// pop last element, since it will be empty (the EOF)
newArray.pop();

const listArray = [];

for (
  let loopCounterOne = 0;
  loopCounterOne < newArray.length;
  loopCounterOne++
) {
  listArray.push(Number(newArray[loopCounterOne]));
}

console.log(The mean is: ${MeanCalculation(listArray)});
console.log(The median is: ${MedianCalculation(listArray)});

console.log('\nDone.');