var info = document.querySelector('.info');
var results = document.querySelector('.results');
var isDraw;
var playWithRobot;

var winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

var winCombosInfo = [
   [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];


var gameInfo = [
  null, null, null,
  null, null, null,
  null, null, null
]

var scoreX = 0;
var scoreO = 0;

document.querySelectorAll('.mode').forEach(function(item){
   item.addEventListener('click', function(){
     if(item.classList[0] == 'single-player'){
       playWithRobot = true;
       alert('Not available now');
       return false;
     }
     else{
       playWithRobot = false;
     }
       document.querySelector('.game_mode').style.display = 'none';
       document.querySelector('.game_menu').style.display = 'block';
  });
});

////////////create grid
for(var i = 1; i<=9; i++){ 
    var cell = document.createElement("div");
    cell.setAttribute('class', 'cell');
    cell.setAttribute('id', i);
    var grid = document.querySelector('.grid');
    grid.appendChild(cell);
}
//////////

///////////choose player
var player;
var isPlayerX;
var enemy;
var currentPlayer;

document.querySelectorAll('.player').forEach(function(item){
   item.addEventListener('click', function(){
     player = item.className[0];
     
     //get current player
     if(item.className[0] == 'x'){
       isPlayerX = true;
       currentPlayer = 'x';
       enemy = 'o';
     }
     else{
       isPlayerX = false;
       currentPlayer = 'o';
       enemy = 'x';
     }
     document.querySelector('.game_menu').style.display = "none";
  });
});
//////////////

///add event listener to restart button
document.querySelector('.restart').addEventListener('click', function(){
  restartGame();
});
///////////

///add event listener to all cells


var cells = document.querySelectorAll('.cell');
for(var i = 0; i<cells.length; i++){
  cells[i].addEventListener("click", getCell, false);
}
///////////

function getCell(){
  var cellIndex = parseInt(this.id);
  render(cellIndex);
}
///////update UI
function render(cellIndex){
   var div = document.createElement('div');
       div.setAttribute('class', 'letter letter_'+currentPlayer);
       div.innerHTML += currentPlayer;
  //check if cell is empty
 
    if(cells[cellIndex-1].hasChildNodes()){
      return false;
    }
    else{
      cells[cellIndex-1].appendChild(div);
    }
   
   gameInfo[cellIndex-1] = currentPlayer;
   for(var i = 0; i < winCombosInfo.length; i++){
     for(var j = 0; j < winCombosInfo[i].length; j++){
     if(winCombosInfo[i][j] == cellIndex){
       winCombosInfo[i][j] = currentPlayer;
     }
    }
   }
   
   compareResults();
}
////////////




/////compare results
function compareResults(){
  for(var i = 0; i < winCombos.length; i++){
    var index1 = winCombos[i][0];
    var index2 = winCombos[i][1];
    var index3 = winCombos[i][2];
    if(gameInfo[index1-1] == gameInfo[index2-1] && gameInfo[index2-1] == gameInfo[index3-1] && gameInfo[index3-1] !== null){
      endGame();
      return false;
    }
  }
  isDraw = gameInfo.every(function(i) { return i !== null; });
  changePlayer();
  if(isDraw){
    endGame();
  }
}
////////


function changePlayer(){
  if(isPlayerX){
    currentPlayer = 'o';
    isPlayerX = false;
  }
  else{
    currentPlayer = 'x';
    isPlayerX = true;
  }
  info.innerHTML = 'Player ' + currentPlayer + ' turn!';
  if(playWithRobot == true && currentPlayer == enemy){
    robotMove();
  }
}

function robotMove(){
var robotChoice;  
/*
var availablePositions = [];
var num;
var huPlayerPositions = [];
  winCombosInfo.forEach(function(arr) {
    var hasPlayer = arr.some(function(el){
      return el == player;
    }); 
    var hasEnemy = arr.every(function(el){
      return el !== enemy;
    });
    if(hasPlayer == true && hasEnemy == true){
      huPlayerPositions.push(arr);
    }
  });
huPlayerPositions.forEach(function(arr){
    num = arr.filter(function(item){
      return item !== player;
    })
    availablePositions.push(num);
    getRobotPosition();
});
function getRobotPosition(){
  availablePositions.forEach(function(arr){
    if(arr.length == 1){
      robotChoice = arr[0];
      console.log(arr);
    }
   else if (arr.length > 1){
     robotChoice = arr[0];
   }
  })
}
*/
  robotChoice = Math.floor(Math.random()*9)+1;
  
  setTimeout(function(){
    render(robotChoice);
  }, 1000);
  
}



function endGame(){
  
  document.querySelector('.results_info').style.display = 'block';
  if(!isDraw){
    if(currentPlayer == 'x'){
      scoreX++;
    }
    else{
      scoreO++;
    }
  }
  
  info.innerHTML = 'End game! Score: player X - ' + scoreX + ', Player O - ' + scoreO;
  if(isDraw == true){
    results.innerHTML = 'It was DRAW!';
  }
  else{
    results.innerHTML = 'Player ' + currentPlayer + ' win!';
  }
  
}

function restartGame(){
  winCombosInfo = winCombos;
  console.log(winCombosInfo);
  //clear field
  var cell = document.querySelectorAll('.cell');
  cell.forEach(function(item){
    item.innerHTML = '';
  });
  
  ///reset gameInfo
  for(var i = 0; i < gameInfo.length; i++){
    gameInfo[i] = null;
  }
  document.querySelector('.results_info').style.display = 'none';
  document.querySelector('.game_menu').style.display = "block";
}