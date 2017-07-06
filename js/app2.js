var p1 = p1 || {};
let activeArrayIndex;
let boardList;
let choice;
let chosenGrid;
let clickCount = 0;
let clickedBox;
let clock;
let gridNumber = Math.floor((Math.random() * 10));
let gridSet;
let newText;
let time;
let userSequence = [];

const numberGrids = [
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

const letterGrids = [
  ['C', 'B', 'A', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '', 'O']
];

const letterNumbers = {
  0: ['A', '1'],
  1: ['B', '2'],
  2: ['C', '3'],
  3: ['D', '4'],
  4: ['E', '5'],
  5: ['F', '6'],
  6: ['G', '7'],
  7: ['H', '8'],
  8: ['I', '9'],
  9: ['J', '10'],
  10: ['K', '11'],
  11: ['L', '12'],
  12: ['M', '13'],
  13: ['N', '14'],
  14: ['O', '15'],
  15: ['', '']
};

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

$(() => {
  p1.gameChoice = function gameChoice() {
    choice = $('.mode');
    choice.on('click', (e) => {
      clickCount = 0;
      $('#clicks').text('Number of moves played: ' + clickCount);
      choice.removeClass('active');
      $(e.currentTarget).addClass('active');
      gridSet = ($(e.currentTarget).attr('id'));
      gridSet === 'number' ? activeArrayIndex = 1 : activeArrayIndex = 0;
      p1.getGrid();
    });
  };

  p1.getGrid = function getGrid() {
    gridSet === 'number' ? chosenGrid = numberGrids[gridNumber]:chosenGrid = letterGrids[gridNumber];
    boardList = $('ul.gameboard');
    p1.populateBoard();
  }; // end of getGrid


  p1.populateBoard = function populateBoard() {
    boardList.empty();
    $.each(chosenGrid, function(i) {
      console.log('reached');
      const li = $('<li/>')
      .addClass('gridbox')
      .addClass('font-effect-emboss')
      .appendTo(boardList)
      .attr('id', i)
      .text(chosenGrid[i]);

      // winner winner (numbers)

      if (activeArrayIndex === 1) {
        if ((i + 1) === chosenGrid[i]){
          console.log(li.id);
          console.log(chosenGrid[i]);
          li.addClass('correct');
        }
      } else {
        if(letterNumbers[i][activeArrayIndex] === chosenGrid[i]) {
          li.addClass('correct');
        }
      }
    }); // end of .each
    p1.getClick();
  }; // end of populateBoard


  p1.timer = function() {
    time = 120;
    onTimer();
    function onTimer() {
      $('.timer').text('Seconds remaining: ' + time);
      // $('.timer').text('Seconds remaining: ' + time + '\nMoves played: ' + clickCount);
      time--;
      if (time < 0) {
        $('#modalmask').show();
        $('#modaltext').html('Time\'s up!  Want to play again?');
        $('#modaldialogue').show();
      } else {
        setTimeout(onTimer, 1000);
      }
    }
  };


  p1.getClick = function getClick() {
    let boxes = $('.gridbox');
    boxes.on('click', (e) => {
      clickedBox = parseInt(($(e.currentTarget).attr('id')));
      let blankBoxId = $('.gridbox:empty').attr('id');
      if (legalMoves[blankBoxId].includes(clickedBox)) {
        clickCount++;
        $('#clicks').text('Number of moves played: ' + clickCount);

        if (clickCount === 1) {
          p1.timer();
        }
        p1.moveTile = function moveTile() {
          $('.gridbox:empty').addClass('font-effect-emboss');
          $('.gridbox:empty').text(e.currentTarget.innerText);
          $(e.currentTarget).removeClass('font-effect-emboss');
          $(e.currentTarget).text(null);
        };
        p1.moveTile();
        const gameSequence = [];
        for (let n of $('.gridbox')) {
          gameSequence.push(n.innerText);
        }
        let userWon = true;
        for (let b = 0; b < 16; b++) {
          const currentTile = $('#' + b);
          if (letterNumbers[b][activeArrayIndex] !== gameSequence[b]) {
            userWon = false;
            currentTile.removeClass('correct');
          } else {
            if (currentTile.text() !== '') {
              if (!currentTile.hasClass('correct')) {
                currentTile.addClass('correct');
              }
            }
          }
        }

        if (userWon) {
          $('#modalmask').show();
          $('#modaltext').text('You won in ' + clickCount + ' moves and ' + time + ' seconds!  Want to play again?');
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
  p1.gameChoice();
  p1.getClick();
  // $('#timerbutton').on('click', p1.timer);
  $('#modalyes').on('click', function() {
    location.reload();
  });
  $('#modalno').on('click', function() {
    $('#modaldialogue').hide();
    $('#modalmask').hide();
  });
}; // end of p1.setup


$(p1.setup.bind(p1)); // function to sort any THIS issues
