var p1 = p1 || {};

var boardList;
var chosenGrid;
var clickCount = 0;
var clickedBox;
let gridNumber = Math.floor((Math.random() * 10));
var newText;
var userSequence = [];

const solved = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];


$(() => {

  p1.getGrid = function() {
    chosenGrid = grids[gridNumber];
    boardList = $('ul.gameboard');
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
      if ((i + 1) === chosenGrid[i]) {
        li.addClass('correct');
      }
    }); // end of .each
  }; // end of populateBoard
  p1.populateBoard();

  p1.timer = function timer() {
    $button.on('click', (e) => {

      t = 60;
      $button.value = t;
      t--;
      if (t < 0) {
        alert('Time\'s up!');
      }
      else {
        setTimeout(onTimer, 1000);
      };



      p1.getClick = function getClick() {
        let boxes = $('.gridbox');

        boxes.on('click', (e) => {

          clickedBox = parseInt(($(e.currentTarget).attr('id')));

          let blankBoxId = $('.gridbox:empty').attr('id');

          if (legalMoves[blankBoxId].includes(clickedBox)) {
            clickCount++;
            // ($.clicks).value('Number of moves is: ', clickCount);

            p1.moveTile = function moveTile() {

              console.log('Number of moves is: ',clickCount);
              $('.gridbox:empty').addClass('font-effect-emboss');
              $('.gridbox:empty').text(e.currentTarget.innerText);
              $(e.currentTarget).removeClass('font-effect-emboss');
              $(e.currentTarget).text(null);

            };
            p1.moveTile();

            let gameSequence = [];
            for (let n of $('.gridbox')) {
              gameSequence.push(n.innerText);
            }
            let userWon = true;
            let modal = $('.modal');
            let span = $('.close');
            for (let b = 0; b < solved.length; b++) {
              let currentTile = $('#' + b);
              if (solved[b] !== gameSequence[b]) {
                userWon = false;
                currentTile.removeClass('correct');
              } else {
                if (currentTile.text() !== '') {

                  if (! currentTile.hasClass('correct')) {
                    currentTile.addClass('correct');
                  }
                }
              }
            }
            if (userWon) {
              alert('You won!');
            }
          } else {
            console.log('Game almost complete!');
          }
        }); // end of click event
      }; // end of getClick
    }); // the last brace and bracket of the DOM loading function

    p1.setup = function setup() {
      p1.getClick(); // invoking getClick
      // p1.timer();
    }; // end of p1.setup

    const grids = [
      [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, '', 15],
      [ 3, 6,  7, 10,  5,  9, 15,  '',  4, 13, 12,  2,  1,  8, 14, 11],
      [ 9, 5, 12,  8,  6,  3,  4, 11, 15,  7, 14, 10,  '',  2,  1, 13],
      [ 2, 6, 11,  3,  '', 13,  9,  5,  4, 14, 15,  8, 12, 10,  7,  1],
      [ '', 8,  7,  2,  5, 12, 14,  1, 11, 10,  6, 13,  3,  9, 15,  4],
      [ 5, 6, 10,  1,  3,  '', 15,  8, 14,  2, 13, 11,  4,  9,  7, 12],
      [ 1, 5,  4,  8,  3,  7,  9,  2, 10, 13, 15,  '', 14, 12, 11,  6],
      [ 9, 3,  8,  2,  1,  6, 10, 11,  7,  5, 13,  4, 15, 12, 14,  ''],
      [ 2, 8,  5,  1,  6, 14,  7,  3, 15, 10,  '',  9,  4, 13, 12, 11],
      [ 9, 1,  4,  7,  6, 14,  3,  '',  8, 10,  2,  5, 11, 13, 15, 12],
      [14, 6,  '', 12,  7, 13,  2,  3, 11, 15,  1,  8,  4,  5,  9, 10]
    ];

    const legalMoves = [
      [1, 4],
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
