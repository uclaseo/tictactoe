const prompt = require('prompt');


const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const viewBoard = () => {
  console.log('Current Board');
  console.log('-----');
  console.log(board[0][0] + ' ' + board[0][1] + ' ' + board[0][2]);
  console.log(board[1][0] + ' ' + board[1][1] + ' ' + board[1][2]);
  console.log(board[2][0] + ' ' + board[2][1] + ' ' + board[2][2]);
  console.log('-----');

}

viewBoard();

prompt.start();
