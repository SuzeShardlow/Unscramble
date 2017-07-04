var p1 = p1 || {};

let gridNumber = Math.floor((Math.random() * 10));
var chosenGrid;
var boardList;
var userSequence = [];
var gameSequence = [];
var emptyBox;
var clickedBox;
var newText;

$(() => {
  console.log('The DOM is loaded.');

  p1.getGrid = function() {

    chosenGrid = grids[gridNumber];
    boardList = $('ul.gameboard');
    console.log('This is the grid we will use: ', 'number ' + gridNumber, chosenGrid);
  }; // end of getGrid
  p1.getGrid();

  p1.populateBoard = function populateBoard() {
    $.each(chosenGrid, function(i) {

      const li = $('<li/>')
      .addClass('gridbox')
      .addClass('font-effect-emboss')
      .attr('id', [i])
      .appendTo(boardList)
      .text(chosenGrid[i]);
    }); // end of .each
  }; // end of populateBoard
  p1.populateBoard();


  p1.getLis = function getLis() {
    var lis = $('.gridbox');

    $.each(lis, function(index, element) {
      const id = parseInt($(element).attr('id'));
      userSequence.push(id);
    });
    console.log('userSequenceArray', userSequence);
  }; // end of getLis
  p1.getLis();


  p1.getNumbers = function getNumbers() {
    console.log('goodbye');
    var lis = $('.gridbox');

    $.each(lis, function(index, element) {
      var number = $(element).text;
      gameSequence.push(number);
      console.log('gameSequenceArray', gameSequence);

    });
    p1.getNumbers();

    // [1,7].join('') === [1,7].join('')

  };


  p1.getClick = function getClick() {
    emptyBox = chosenGrid.indexOf(null);
    var blankTile = emptyBox + 1;
    console.log('The blank tile is ' + emptyBox + '.');
    console.log('The legal moves for this tile are ' + legalMoves[emptyBox] + '.');

    let boxes = $('.gridbox');
//    console.log(boxes);

    boxes.on('click', (e) => {

      clickedBox = parseInt(($(e.currentTarget).attr('id')));
      console.log('This is the box that has been clicked:', clickedBox);

      for (var j = 0; j < legalMoves[emptyBox].length; j++) {
        if (
          legalMoves[emptyBox].indexOf(clickedBox) !== -1
        ) {
          $('ul li:nth-child(' + blankTile + ')').text(clickedBox);
          $(e.currentTarget).text(null);
          // $('gridbox:empty').removeClass(':empty');
          // $('gridbox:empty').addClass('gridbox');
          // $('gridbox:empty').addClass('font-effect-emboss');
          // $(e.currentTarget).removeClass('font-effect-emboss');
          // $(e.currentTarget).removeClass('gridbox');
          // $('gridbox:empty').text('$clickedbox');
          // $(e.currentTarget).addClass('gridbox:empty');
        }
        console.log(legalMoves[emptyBox].indexOf(clickedBox));
      }
    }); // end of click event
  }; // end of getClick

}); // the last brace and bracket of the DOM loading function


p1.checkMatch = function checkMatch() {
  console.log('Checking for matches.');

  $.each(chosenGrid, function(b) {

    const li = $('<li/>')
    .addClass('gridbox')
    .addClass('font-effect-emboss')
    .attr('id', [i])
    .appendTo(boardList)
    .text(chosenGrid[i]);
    console.log(li);
  }); // end of .each
}; // end of populateBoard
p1.checkMatch();





p1.setup = function setup() {
  console.log('The function SETUP is running.');
  p1.getClick(); // invoking getClick
}; // end of p1.setup

const solved = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

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
