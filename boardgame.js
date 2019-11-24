var board = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,"YOU WIN!"];

var player1 = board[0];
var player2 = board[0];

function dadu (){
  var n = Math.floor((Math.random() * 6) + 1);

return n;
}

var dice1 = document.getElementById("dice");
dice1.addEventListener("click",function(){
var d = dadu();
document.getElementById("ff").innerHTML = d;
player1 = player1+d;

if (player1 == 8){player1 = 15;}

else if (player1 == 15){player1 = 5;}

else if (player1 == 19){player1 = 24;}

else if (player1 == 23){player1 = 16;}

else if (player1 > 25){player1 = 26;}

document.getElementById("p1").innerHTML = board[player1];

});

var dice11 = document.getElementById("dice2");
dice11.addEventListener("click",function(){
var dd = dadu();
document.getElementById("fff").innerHTML = dd;
player2 = player2+dd;

if (player2 == 8){player2 = 15;}

else if (player2 == 15){ player2 = 5;}

else if (player2 == 19){player2 = 24;}

else if (player2 == 23){player2 = 16;}

else if (player2 > 25){player2 = 26}



document.getElementById("p2").innerHTML = board[player2];

});
