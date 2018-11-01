// Business Logic for Consortium ---------
function Consortium () {
  this.players=[],
  this.currentId=0
}

Consortium.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

Consortium.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Consortium.prototype.findPlayer = function(id) {
  for (var i=0; i< this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false;
}

// Business Logic for Players ---------
var count = 1;
var total = 0;

function Player(name, score) {
  this.name = name,
  this.score= 0
}

Player.prototype.hold = function () {
  this.score += total;
  total=0;
  count+=1;
  window.count=count;
  return this.score;
}

Player.prototype.switch = function (){

}

Player.prototype.startOver = function () {
  this.name = "";
  this.score = 0;
}


var rollDice = function() {
  var localScore=0;
  var rolling=Math.ceil(Math.random()*6);
  window.rolling=rolling;
  return rolling;
  }

function turnTotal () {
  if (rolling === 1) {
      total = 0;
      window.total=total;
      count+=1;
      window.count=count;
      return total;
  }
  else {
      total+=rolling;
      window.total=total;
      return total;
      //switch player
 }
}



// User Interface Logic ---------

var consortium = new Consortium();

$(document).ready(function() {
  $("form#player1").submit(function(event) {
    event.preventDefault();
    var inputtedPlayer1 = $("input#new-player1").val();
    var newPlayer1 = new Player(inputtedPlayer1,0);
    $(".player1-name").text(inputtedPlayer1);
    consortium.addPlayer(newPlayer1);
    window.newPlayer1=newPlayer1;
  });

  $("form#player2").submit(function(event) {
    event.preventDefault();
    var inputtedPlayer2 = $("input#new-player2").val();
    var newPlayer2 = new Player(inputtedPlayer2,0);
    $(".player2-name").text(inputtedPlayer2);
    consortium.addPlayer(newPlayer2);
    });

  $("#roll").on("click", function() {
    $(".turn-roll").text(rollDice());
    $(".turn-total").html(turnTotal());

    // $(".player2-score").show();
  });

  $("#hold").on("click", function() {
    $(".turn-total").html(0);
    $(".player1-score").html(newPlayer1.hold());
  });

  // $("#reset").on("click", function() {
  //   player.startOver();
  // });
  // //event.preventDefault();
  // })

  });
