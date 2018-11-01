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

function Player(name, score) {
  this.name = name,
  this.score= 0
}

Player.prototype.hold = function () {
  this.score += total;
  total=0;
  return total;
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

  var total=0;

function turnTotal () {
  if (rolling === 1) {
      total = 0;
      window.total=total;
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
// var addressBook = new Consortium();

// function showContact(contactId) {
//   var contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".player1-name").html(player.name);
//   $(".player1-score").html(player.score);
//   $(".player2-score").html(player.score);
//

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
    $(".turn-total").html(newPlayer1.hold());
  });


  // $("#reset").on("click", function() {
  //   player.startOver();
  // });
  // //event.preventDefault();
  // })


  // $("#buttons").on("click", ".deleteButton", function() {
  //   addressBook.deleteContact(this.id);
  //   $("#show-contact").hide();
  //   displayContactDetails(addressBook);
  //   });
  });

    // var newAddress = new Address(inputtedHomeAddress, inputtedWorkAddress);
    // var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, newAddress);
