var p1 = p1 || {};
var boardList;
var chosenGrid;
var clickCount = 0;
var clickedBox;
let gridNumber = Math.floor((Math.random() * 10));
var newText;
var userSequence = [];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', ''];

// add another for letters game
// click button - selectedGame - pass into all the functions to reference that array when doing the comparison
// create LIs after selecting the game to be played
// hide menu when the game starts
// shake board if they don't select modal


$(() => {
  p1.getGrid = function() {
    chosenGrid = grids[gridNumber];
    console.log(gridNumber);
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


  p1.timer = function() {
    var time = 60;
    onTimer();
    function onTimer() {
      // $('#timerbutton').off('click');
      $('#timer').text(time + 's remaining');
      time--;
      if (time < 0) {
        $('#modalmask').show();
        $('#modaltext').text('Time\'s up!  Want to play again?');
        $('#modaldialogue').show();
      } else {
        setTimeout(onTimer, 1000);
      }
    }
  };


  // p1.timer = function timer() {
  //   var time = 120;
  //   // $('#timerbutton').off('click');
  //   $('#timer').text(time);
  //   time--;
  //   if (time < 0) {
  //     $('#modalmask').show();
  //     $('#modaltext').text('Time\'s up!  Want to play again?');
  //     $('#modaldialogue').show();
  //   } else {
  //     setTimeout(timer, 1000);
  //   }
  // };

  // on first click start the timer
  // moments.js
  // do a bit of maths


  p1.getClick = function getClick() {
    let boxes = $('.gridbox');
    boxes.on('click', (e) => {
      clickedBox = parseInt(($(e.currentTarget).attr('id')));
      let blankBoxId = $('.gridbox:empty').attr('id');
      if (legalMoves[blankBoxId].includes(clickedBox)) {
        clickCount++;
        if (clickCount === 1) {
          p1.timer();
        }
        $('#clicks').text('Number of moves played: ' + clickCount);
        p1.moveTile = function moveTile() {
          console.log('Number of moves played: ',clickCount);
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
        for (let b = 0; b < numbers.length; b++) {
          let currentTile = $('#' + b);
          if (numbers[b] !== gameSequence[b]) {
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
          $('#modalmask').show();
          $('#modaltext').text('You won in ' + clickCount + ' moves!  Want to play again?');
          $('#modaldialogue').show();
        }
      } else {
        $(e.currentTarget).addClass('animated shake');
        setTimeout(function () {
          $(e.currentTarget).removeClass('animated shake');
        }, 1000);
      }
    }); // end of click event
  }; // end of getClick
}); // the last brace and bracket of the DOM loading function

p1.setup = function setup() {
  p1.getClick();
  p1.timer();
  // $('#timerbutton').on('click', p1.timer);
  $('#modalyes').on('click', function() {
    location.reload();
  });
  $('#modalno').on('click', function() {
    $('#modaldialogue').hide();
    $('#modalmask').hide();
  });
}; // end of p1.setup

const grids = [
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, '', 15],
  [ 3, 6,  7, 10,  5,  9, 15,  '',  4, 13, 12,  2,  1,  8, 14, 11],
  [ 9, 5, 12,  8,  6,  3,  4, 11, 15,  7, 14, 10,  '',  2,  1, 13],
  [ 2, 6, 11,  3,  '', 13,  9,  5,  4, 14, 15,  8, 12, 10,  7,  1],
  [ '', 8,  7,  2,  5, 12, 14,  1, 11, 10,  6, 13,  3,  9, 15,  4],
  [ 5, 6, 10,  1,  3,  '', 15,  8, 14,  2, 13, 11,  4,  9,  7, 12],
  [ 1, 5,  4,  8,  3,  7,  9,  2, 10, 13, 15,  '', 14, 12, 11,  6],
  [ 9, 3,  8,  2,  1,  6, 10,  7, 11, 5, 13,  4, 15, 12, 14, ''],
  [ 2, 8,  5,  1,  6, 14,  7,  3, 15, 10,  '',  9,  4, 13, 12, 11],
  [ 9, 1,  4,  7,  6, 14,  3,  '',  8, 10,  2,  5, 11, 13, 15, 12],
  [14, 6,  '', 12,  7, 13,  2,  3, 11, 15,  1,  8,  4,  5,  9, 10]
];

const letterGrids = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'];


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
