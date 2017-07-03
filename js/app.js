// Pseudocode
//
// - Take a scrambled grid from the list
// - Put the numbers into the game board
// - Listen for a click on one of the boxes
// - If it is a box which touches the empty box, move the number into the empty box
// - If it is not, do nothing
// - If a number is in the correct position, turn the background green
// - When all the numbers are in the correct position, tell the player they have won and ask if they want to play again

var p1 = p1 || {};

let gridNumber = Math.floor((Math.random() * 10)); // this chooses one grid number to be picked from the array of arrays
console.log('The grid number is ' + gridNumber);

$(() => {
  console.log('The DOM is loaded.');
  // ensuring the DOM is loaded before we start
  // all the below commands need the DOM to be loaded before they can run

  // Want to take each item of the GRIDS and put it into one of the GRIDBOXes

  // p1.getGrid = function getGrid() {
  //   let scrambledGrid = grids[gridNumber]; // scrambledGrid is assigned as the actual index to be picked from the array
  //   console.log('This is the grid we will use: ', 'number ' + gridNumber, scrambledGrid); // outputs the index number and the contents of it
  // };
  // p1.getGrid(); // invokes the above function (but this function may not be needed)

  let $liArray = ($('li').toArray()); // this puts all the created LIs into a function should it be needed
  console.log('This is an array of the LIs', $liArray);


  p1.populateBoard = function populateBoard() {
    console.log('These are the grids', grids);

    let scrambledGrid = grids[gridNumber]; // scrambledGrid is assigned as the actual index (grid) to be picked from the array
    let boardList = $('ul.gameboard'); //boardList is the name given to the enclosing UL for the LIs

    $.each(scrambledGrid, function(i) { // we're going to run this function for all the items in the array
    const li = $('<li/>') // creating the LI tags
    .addClass('gridbox') // adding the class
    .addClass('font-effect-emboss') // adding another class
    .attr('id', [i]) // giving each of them a unique id, starting with 0 for the first one
    .appendTo(boardList) // appending them to the UL
    .text(scrambledGrid[i]); // putting the text in from the array
  });



  p1.getFirstBlankTile = function getBlankTile() {
    let firstBlankTile = scrambledGrid.indexOf(null);
    console.log('The first blank tile is ' + firstBlankTile);
    // this works!!!

  };

  p1.getFirstBlankTile(); // invoking the function





};

p1.populateBoard(); // invoking the function




p1.getClick = function getClick() {
  // a function to listen for clicks
  console.log('Now we shall listen for clicks.');

  // we only want to listen for clicks on the tiles touching the blank one

  let $firstClickableTiles = legalMoves[firstBlankTile];
  console.log($firstClickableTiles);


  let $boxes = $('.gridbox');

  $boxes.on('click', (e) => {
    var $clickedBox = $(e.delegateTarget);
    console.log('This is the box that has been clicked:', $clickedBox);

    $(e.delegateTarget).css('background', 'red');
    console.log(e);
  });
};

}); // the last brace and bracket of the DOM loading function


p1.setup = function setup() {
  console.log('The function SETUP is running.');
  p1.getClick(); // invoking getClick
};


const grids = [
  [ 3, 6,  7, 10,  5,  9, 15,  null,  4, 13, 12,  2,  1,  8, 14, 11],
  [ 9, 5, 12,  8,  6,  3,  4, 11, 15,  7, 14, 10,  null,  2,  1, 13],
  [ 2, 6, 11,  3,  null, 13,  9,  5,  4, 14, 15,  8, 12, 10,  7,  1],
  [ null, 8,  7,  2,  5, 12, 14,  1, 11, 10,  6, 13,  3,  9, 15,  4],
  [ 5, 6, 10,  1,  3,  null, 15,  8, 14,  2, 13, 11,  4,  9,  7, 12],
  [ 1, 5,  4,  8,  3,  7,  9,  2, 10, 13, 15,  null, 14, 12, 11,  6],
  [ 9, 3,  8,  2,  1,  6, 10, 11,  7,  5, 13,  4, 15, 12, 14,  null],
  [ 2, 8,  5,  1,  6, 14,  7,  3, 15, 10,  null,  9,  4, 13, 12, 11],
  [ 9, 1,  4,  7,  6, 14,  3,  null,  8, 10,  2,  5, 11, 13, 15, 12],
  [14, 6,  null, 12,  7, 13,  2,  3, 11, 15,  1,  8,  4,  5,  9, 10]
];

const legalMoves = [
  [1, 4], // box 0 ie the first one
  [0, 2, 5],
  [1, 3, 6],
  [2, 7],
  [0, 5, 8],
  [1, 4, 6, 9],
  [2, 5, 7, 10],
  [3, 6, 11],
  [4, 9, 12],
  [5, 8, 10, 13],
  [6, 9, 11, 14],
  [7, 10, 15],
  [8, 13],
  [9, 12, 14],
  [10, 13, 15],
  [11, 14]
];


$(p1.setup.bind(p1)); // function to sort any THIS issues


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

// const legalMoves1 = [2, 5];
// const legalMoves2 = [1, 3, 6];
// const legalMoves3 = [2, 4, 7];
// const legalMoves4 = [3, 8];
// const legalMoves5 = [1, 6, 9];
// const legalMoves6 = [2, 5, 7, 10];
// const legalMoves7 = [3, 6, 8, 11];
// const legalMoves8 = [4, 7, 12];
// const legalMoves9 = [5, 10, 13];
// const legalMoves10 = [6, 9, 11, 14];
// const legalMoves11 = [7, 10, 12, 15];
// const legalMoves12 = [8, 11, 16];
// const legalMoves13 = [9, 14];
// const legalMoves14 = [10, 13, 15];
// const legalMoves15 = [11, 14, 16];
// const legalMoves16 = [12, 15];
