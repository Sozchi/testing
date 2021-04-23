//Eaercises
// 1. Solve the same problem above but in much less code. Hint: Look at how the solution
// treats the variable called row. It keeps setting it to an empty string and then adding all
// the stars for the row. An alternative might be to initialise it to the empty string and add
// one star to it before we log the value of the row. Starting again with this idea might give
// us the following Step 1. Can you take the necessary steps to turn this into a different
// solution to the same problem?

let row = "";
let numberOfRows = 5;
let count = 0;
// print one row

while (count < numberOfRows) {
  row = row + "*";
  count++;
  console.log(row);
}

// 2. Can you generate the following pattern, where the number of rows is determined by
// the value of a variable. Here is an eaample where the numberOfRows is equal to 10.
// Look for a pattern in each row. Hint: Two different characters are used when building
// each row.
//          *
//         **
//        ***
//       ****
//      *****
//     ******
//    *******
//   ********
//  *********
// **********

let numberOfRows = 10;
let row = "";
let count = 0;
while (count < numberOfRows) {
  row = "";
  count = count + 1;
  let numberOfStars = count;
  let numberOfSpaces = numberOfRows - numberOfStars;
  let spaceCount = 0;

  let starsCount = 0;
  while (spaceCount < numberOfSpaces) {
    row = row + " ";

    spaceCount++;
  }
  while (starsCount < numberOfStars) {
    row = row + "*";
    starsCount++;
  }
  console.log(row);
}

// 3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen. Sample
// Output :
// 0 is even
// 1 is odd
// 2 is even
// Before you start, think about how you decide whether a number is odd or even.

let a = 0;
while (a <= 15) {
  if (a % 2 === 0) {
    console.log(a + " " + "is even");
  } else {
    console.log(a + " " + "is odd");
  }
  a++;
}

// 4. There are two arrays with individual values, write a JavaScript program to compute
// the sum of each individual indea value from the given arrays. Sample array :
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
let newArray = [];
// Eapected Output :
// [4, 5, 8, 10, 12, 13]

for (let i = 0; i < array2.length; i++) {
  newArray.push(array1[i] + array2[i]);
  if (isNaN) {
    newArray === 0;
  }
}
console.log(newArray);

//5. Starting with this array:
const scores = [73, 35, 40, 68, 67, 91, 42, 48, 39, 55, 21, 95];
// Write JavaScript code to log the idea of each score that is greater than or equal to 40.

let i = 0;
while (i < scores.length) {
  if (scores[i] >= 40) {
    console.log(i);
  }
  i++;
}

//6. Starting with this array:
const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// //Write JavaScript code to log the largest score in the array
let maaScore;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < scores[i + 1]) {
    maaScore = scores[i + 1];
  }
}
console.log(maaScore);

//7. Starting with this array:
const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
//Write JavaScript code to log the smallest score in the array

let minScore;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < scores[i + 1]) {
    minScore = scores[i];
  }
}
console.log(minScore);

//8. Starting with this array:
const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
//Write JavaScript code to log the average score. Compute the average by first adding
//up each individual score to calculate the total and then divide the total by the length of the array.
let average;
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
  average = sum / scores.length;
}
console.log("Total scores is " + " " + sum);
console.log("The average is" + " " + average);

//9. Use the following array with your solution to Eaercise 8. The average printed out should be 40.

const scores = [40, 40, 40];

let average;
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
  average = sum / scores.length;
}
console.log("Total scores is " + " " + sum);
console.log("The average is" + " " + average);

//10. Use the following array with your solution to Eaercise 8. How can you avoid an error
//when you divide by the length of the array.
const scores = [];

let average;
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
  average = sum / scores.length;
}
console.log("Total scores is " + " " + sum);
console.log("The average is" + " " + average);
//We can avoid an error by ensuring that we don't have a situation where 0 / 0. Make sure that the array's length is >= 0

//11. Starting with this array:
const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// // Write JavaScript code to log each score that is within the 10 marks each side of the average (ie less than (average + 10) and greater than (average 􀀀 10))
let averagePlus10 = 59.5 + 10;
let averageMinus10 = 59.5 - 10;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < averagePlus10 && scores[i] > averageMinus10) {
    console.log(scores[i]);
  }
}

//12. Starting with this array:
let scores = [73, 35, 68, 67, 20, 91, 42, 48, 55, 21, 95];
// Write JavaScript code to move the smallest score to the end of the array. Do this by
// starting with the first element and compare it with the second element. If the first
// element is smaller than the second, swap the two values. Neat compare the second
// element with the third element and again swap if the second element is smaller than
// the third. Keep comparing and swapping until the smallest value has been moved all
// the way to the end of the array. When you have finished, the original array should look
// like this with the smallest value, 20, being the last element in the array:

// [73, 68, 67, 35, 91, 42, 48, 55, 21, 95, 20];

let swap1;
let swap2;
const scores = [73, 35, 68, 67, 20, 91, 42, 48, 55, 21, 95];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] < scores[i + 1]) {
    swap1 = scores[i];
    swap2 = scores[i + 1];
    scores[i + 1] = swap1;
    scores[i] = swap2;

    console.log(scores);
  }
}

// 13. How would you eatend your solution to 13 to repeat this swapping of elements so that
// the entire array is sorted with the largest element at indea 0 and the smallest element
// at the last indea.

let swap1;
let swap2;
const scores = [73, 35, 68, 67, 20, 91, 42, 48, 55, 21, 95];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < scores[i + 1]) {
    const temp = scores[i + 1];
    scores[i + 1] = scores[0];
    scores[0] = temp;
    swap1 = scores[i];
    swap2 = scores[i + 1];
    scores[i + 1] = swap1;
    scores[i] = swap2;
  }
}

console.log(scores);

// 14. How would you change your solution to eaercise 13 so that the array was sorted in the
// opposite order with the smallest element in indea 0 and the largest element in the last
// indea?

const scores = [73, 35, 68, 67, 20, 91, 42, 48, 55, 21, 95];

let minScore = scores[0];
let maaScore;

for (let i = 1; i < scores.length; i++) {
  if (scores[i] < scores[i + 1] && scores[i] < minScore) {
    minScore = scores[i];
    maaScore = scores[i + 1];
    scores[i] = scores[0];
    scores[0] = minScore;
  }
}

console.log(scores);
