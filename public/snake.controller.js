var app = angular.module("snake");

app.controller('snakeController', snake);

app.$inject = ['$http','$swipe','$interval'];

var BOARDSIZE = 25;

function snake($http, $interval){
  vm=this;
  vm.snake = [[1,1],[2,1]];
  vm.apple = [-1,-1];
  vm.nextMove = [1,0];
  vm.lost = false;
  vm.score = 0;
  vm.topTen=[];
  var highScores = $http.get("/top");
  highScores.then(function(highScores){
    vm.topTen = highScores.data;
  })
  vm.addSnake = function(boardArray){
    for (var i = 0; i < vm.snake.length; i++)
    {
      var x = vm.snake[i][0];
      var y = vm.snake[i][1];
      boardArray[x][y] = 2;
    }
    return boardArray;
  }

  vm.addApple = function(boardArray){
    var where;
    if(vm.apple[0] >= 0){
      where = vm.apple;
    }
    else{
      where = whereApple(vm.snake);
      vm.apple = [where[0],where[1]];
    }
    boardArray[where[0]][where[1]] = 3;
    return boardArray;
  }

  vm.move = function(){
    var currentPosition = vm.snake[vm.snake.length-1];
    if(vm.nextMove[0]==1){
      vm.snake.push([currentPosition[0]+1,currentPosition[1]]);
    }
    if(vm.nextMove[0]==-1){
      vm.snake.push([currentPosition[0]-1,currentPosition[1]]);
    }
    if(vm.nextMove[1]==1){
      vm.snake.push([currentPosition[0], currentPosition[1]+1]);
    }
    if(vm.nextMove[1]==-1){
      vm.snake.push([currentPosition[0],currentPosition[1]-1]);
    }
    var newY = vm.snake[vm.snake.length-1][0];
    var newX = vm.snake[vm.snake.length-1][1];
    if(vm.board[newY][newX] == 0 || vm.board[newY][newX] == 2){
      vm.lost = true;
      $interval.cancel(vm.timer);
    }
    else if(vm.board[newY][newX] == 3 ){
      vm.apple = [-1,-1];
      vm.score++;
      vm.board=vm.addApple(vm.addSnake(createBoardArray()));
    }
    else{
      vm.snake.splice(0,1);
      vm.board=vm.addApple(vm.addSnake(createBoardArray()));
    }
  }


  vm.color = function(color){
    if(color == 0){
      return "black";
    }
    if(color == 1){
      return "green";
    }
    if(color == 2){
      return "brown";
    }
    if(color == 3){
      return "red";
    }
  }

  window.addEventListener("keydown", function(e){
    if(e.keyCode == 37){
      vm.nextMove = [0,-1];
    }
    if(e.keyCode == 39){
      vm.nextMove = [0,1];
    }
    if(e.keyCode == 38){
      vm.nextMove =[-1,0];
    }
    if(e.keyCode == 40){
      vm.nextMove =[1,0];
    }
  })

  vm.board = vm.addApple(vm.addSnake(createBoardArray()));
  vm.timer = $interval(vm.move, 100);
}

function whereApple(snake){
  var x =Math.floor(Math.random() * (24 - 1) + 1);
  var y = Math.floor(Math.random() * (24 - 1) + 1);
  for(var i = 0; i < snake.length; i++){
    if(x == snake[i][1] && y == snake[i][0]){
      whereApple(snake);
    }
  }
  return [x,y];
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
