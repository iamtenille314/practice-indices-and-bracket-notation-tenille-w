// Task 1: Create a 2D array (3 shelves, 3 items each)
let library = [
  ["Book1", "Book2", "Book3"],
  ["Movie1", "Movie2", "Movie3"],
  ["Book4", "Movie4", "Book5"]
];


// Task 2: Access all elements using numbers
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);

console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);

console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);


// Task 3: Access using variables
let row = 1;
let item = 2;

console.log(library[row][item]);


// Task 4: Loop through second shelf
for (let i = 0; i < library[1].length; i++) {
  console.log("Second shelf item:", library[1][i]);
}