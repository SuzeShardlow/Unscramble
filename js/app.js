// Pseudocode
//
// - Take a scrambled grid from the list
// - Put the numbers into the game board
// - Listen for a click on on of the boxes
// - If it is a box which touches the empty box, move the number into the empty box
// - If it is not, do nothing
// - If a number is in the correct position, turn the background green
// - When all the numbers are in the correct position, tell the player they have won and ask if they want to play again




$(() => {
  console.log('loaded');
  // ensuring the DOM is loaded before we start
});

var p1 = p1 || {};

const grids = [
[ 3, 6,  7, 10,  5,  9, 15,  4, 13, 12,  2,  1,  8, 14, 11],
[ 9, 5, 12,  8,  6,  3,  4, 11, 15,  7, 14, 10,  2,  1, 13],
[ 2, 6, 11,  3, 13,  9,  5,  4, 14, 15,  8, 12, 10,  7,  1],
[ 8, 7,  2,  5, 12, 14,  1, 11, 10,  6, 13,  3,  9, 15,  4],
[ 5, 6, 10,  1,  3, 15,  8, 14,  2, 13, 11,  4,  9,  7, 12],
[ 1, 5,  4,  8,  3,  7,  9,  2, 10, 13, 15, 14, 12, 11,  6],
[ 9, 3,  8,  2,  1,  6, 10, 11,  7,  5, 13,  4, 15, 12, 14],
[ 2, 8,  5,  1,  6, 14,  7,  3, 15, 10,  9,  4, 13, 12, 11],
[ 9, 1,  4,  7,  6, 14,  3,  8, 10,  2,  5, 11, 13, 15, 12],
[14, 6, 12,  7, 13,  2,  3, 11, 15,  1,  8,  4,  5,  9, 10]
];

p1.setup = function setup() {
  console.log('The function SETUP is running.');
  p1.getClick(); // invoking getClick
};

p1.getGrid = function getGrid() {
  let scrambledGrid = grids[Math.floor((Math.random() * 10) + 1)];
  console.log('This is the grid we will use: ', scrambledGrid);
};
p1.getGrid();


let $liArray = ($('li').toArray());

console.log('This is an array of the LIs', $liArray);




p1.populateBoard = function populateBoard() {
  console.log('These are the grids', grids);

};

p1.populateBoard(); // invoking the function

p1.getClick = function getClick() {
  // a function to listen for clicks
  let $boxes = $('.gridbox');
  let $selectedBox = $boxes.prop('innerText');
  console.log($boxes);
  console.log($selectedBox);


  $boxes.on('click', (e) => {
    var $clickedBox = $(e.delegateTarget);
    console.log('This is the box that has been clicked:', $clickedBox);

    $(e.delegateTarget).css('background', 'red');
    console.log(e);
  });

};



// const legalMoves0 = [1, 4];
// const legalMoves1 = [0, 2, 5];
// const legalMoves2 = [1, 3, 6];
// const legalMoves3 = [2, 7];
// const legalMoves4 = [0, 5, 8];
// const legalMoves5 = [1, 4, 6, 9];
// const legalMoves6 = [2, 5, 7, 10];
// const legalMoves7 = [3, 6, 11];
// const legalMoves8 = [4, 9, 12];
// const legalMoves9 = [5, 8, 10, 13];
// const legalMoves10 = [6, 9, 11, 14];
// const legalMoves11 = [7, 10, 15];
// const legalMoves12 = [8, 13];
// const legalMoves13 = [9, 12, 14];
// const legalMoves14 = [10, 13, 15];
// const legalMoves15 = [11, 14];

const legalMoves1 = [2, 5];
const legalMoves2 = [1, 3, 6];
const legalMoves3 = [2, 4, 7];
const legalMoves4 = [3, 8];
const legalMoves5 = [1, 6, 9];
const legalMoves6 = [2, 5, 7, 10];
const legalMoves7 = [3, 6, 8, 11];
const legalMoves8 = [4, 7, 12];
const legalMoves9 = [5, 10, 13];
const legalMoves10 = [6, 9, 11, 14];
const legalMoves11 = [7, 10, 12, 15];
const legalMoves12 = [8, 11, 16];
const legalMoves13 = [9, 14];
const legalMoves14 = [10, 13, 15];
const legalMoves15 = [11, 14, 16];
const legalMoves16 = [12, 15];





$(p1.setup.bind(p1)); // function to sort any THIS issues
