import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Player from './js/player.js';
import Game from './js/game.js';
// import Enemy from './js/enemy.js';

let game = new Game();

function attachContactListeners() {
  $("").on("click", function() {
    let attack = game.player.attackRoll();
    $("").html(attack);
    game.player.attackRoll();
    $("").html("Enemy HP:" + game.enemy.hp);
    $("").html("Damage Dealt:" + game.player.attack);


  });
}

// // function for adding a typing effect to the DOM
// async function typeWriter(sentence, outputId) {
//   const letters = sentence.split("");
//   let i = 0;
//   while(i < letters.length) {
//     await letterTimer();
//     $(outputId).append(letters[i]);
//     i++
//   }
//   return;
// }

// // timer for the typeWriter function
// function letterTimer() {
//   return new Promise(resolve => setTimeout(resolve, 100));
// }

// function for selecting an action when user encounters a event
eventResult = (userChoice, lvl) => {
  if (userChoice === "0") {
    $("#chest").show();
    addToInventory(lvl);
     // call a function to add item to their invventory
  } else if (userChoice === "1") {
    $("#arena").show();
    fight();
    // call function to fight an enemy
  } else {
    $("#prompt").hide();
     // hide prompt and move on
  }
};

// function for adding items from the DOM to the players inventory
addToInventory = (lvl) => {
  if (lvl === "0") {
    game.player.inventory += "0";
  } 
  else if (lvl === "1") {
    game.player.inventory += "1";
  } 
  else if (lvl === "2") {
    game.player.inventory += "2";
  }
};

// function for fighting an enemy
fight = (enemyId) => {
  if (game.turn === true) {
    game.player.hp - game.enemy.enemyAttack();
    game.turn = !game.turn
  } 
  else if (game.turn === false)
    game.enemy[enemyId].hp - game.player.attackRoll();
    game.turn = !game.turn
};

$(document).ready(function() {
  $("").html(game.player.name);
  attachContactListeners();
  $("#submit-character").submit(function(event){
    event.preventDefault();
    game.player.name = $("#user-name").val();
    game.player.weapon = $("#weapon").val();
    game.player.character = $("#character").val();
  });
  $(".buy").on("click", function(){
    items = $("#items").val();
    if (items === "0") {
      game.player.currency - 10;
      $("#buy-mp-potion").show();
    } else if (items === "1") {
      game.player.currency - 5;
      $("#buy-hp-potion").show();
    } else if (items === "2") {
      game.player.currency - 25;
      $("#buy-elixer").show();
    };
  });
});
