const prompt = require('prompt');
const colors = require("colors/safe");

prompt.message = colors.rainbow("YOUR MOVE!");

let board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

const viewBoard = () => {
  console.log('Current Board');
  console.log('-----');
  console.log(board[0][0] + ' ' + board[0][1] + ' ' + board[0][2]);
  console.log(board[1][0] + ' ' + board[1][1] + ' ' + board[1][2]);
  console.log(board[2][0] + ' ' + board[2][1] + ' ' + board[2][2]);
  console.log('-----');

}


const placeMove = (number) => {
  if (number === '1') {
    board[0][0] = '0'
  } else if (number === '2') {
    board[0][1] = '0'
  } else if (number === '3') {
    board[0][2] = '0'
  } else if (number === '4') {
    board[1][0] = '0'
  } else if (number === '5') {
    board[1][1] = '0'
  } else if (number === '6') {
    board[1][2] = '0'
  } else if (number === '7') {
    board[2][0] = '0'
  } else if (number === '8') {
    board[2][1] = '0'
  } else if (number === '9') {
    board[2][2] = '0'
  }
};

const winCombinations = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];
let isOver = false;
viewBoard();

const play = () => {
  prompt.start();
  prompt.get(['Pick a Number'], function(error, result) {
    let number = result['Pick a Number'];
    placeMove(number);
    viewBoard();
    if (!isOver) {
      play();
    }
  });
};

play();