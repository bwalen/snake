var app = angular.module("snake",["ngTouch"]);

/*
function displayBoard(){
  var body = document.getElementById("body");
  for(var i = 0; i < board.length; i++){
    body.appendChild(displayRow(board[i]));
  }
}

function displayRow(rowArray){
  var rowElement = document.createElement("div");
  rowElement.setAttribute("class", "row");
  for(var i = 0; i < rowArray.length; i++){
    rowElement.appendChild(createSquare(rowArray[i]));
  }
  return rowElement;
}

function createSquare(color){
  var square = document.createElement("p");
  if (color == 0){
    square.setAttribute("class","black square");
  }
  if (color == 1){
    square.setAttribute("class","green square");
  }
  if (color == 3){
    square.setAttribute("class","red square");
  }
  if (color == 4){
    square.setAttribute("class","orange square");
  }
  return square;
}

function createBoardArray(){
  var boardArray = [];
  boardArray.push(createBorderRow());
  for(var i = 1; i < BOARDSIZE-1; i++){
    boardArray.push(createBoardRow());
  }
  boardArray.push(createBorderRow());
  return boardArray;
}

function createBorderRow(){
  var rowArray=[];
  for(var i = 0; i < BOARDSIZE; i++){
    rowArray.push(0);
  }
  return rowArray;
}

function createBoardRow(){
  var rowArray=[];
  rowArray.push(0);
  for(var i = 1; i < BOARDSIZE-1; i++){
    rowArray.push(1);
  }
  rowArray.push(0);
  return(rowArray);
}

var snakeArray = [[1,1],[2,1]];
var BOARDSIZE = 25;
var board = createBoardArray();
console.log(board);
displayBoard();
*/
