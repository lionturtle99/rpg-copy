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

// function for fighting an enemy
// battle = () => {
//   let pAttack = game.player.attackRoll();
//   let eAttack = game.enemy.enemyAttack();
//   if (game.turn === true) {
//     game.enemy.hp -= pAttack;
//     game.turn = !game.turn;
//   } 
//   else if (game.turn === false) {
//     game.player.hp -= eAttack;
//     game.turn = !game.turn;
//   }
// };



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
// eventResult = (userChoice, lvl) => {
//   if (userChoice === "0") {
//     $("#chest").show();
//     addToInventory(lvl);
//     // call a function to add item to their invventory
//   } else if (userChoice === "1") {
//     $("#arena").show();
//     fight();
//     // call function to fight an enemy
//   } else {
//     $("#prompt").hide();
//     // hide prompt and move on
//   }
// };

// function for adding items from the DOM to the players inventory
// addToInventory = (lvl) => {
//   if (lvl === "0") {
//     game.player.inventory += "0";
//   } 
//   else if (lvl === "1") {
//     game.player.inventory += "1";
//   } 
//   else if (lvl === "2") {
//     game.player.inventory += "2";
//   }
// };







$(document).ready(function() {
  let items = $("#items").val();
  $("").html(game.player.name);
  attachContactListeners();
  $("#submit-character").submit(function(event){
    event.preventDefault();
    game.player.name = $("#user-name").val();
    game.player.weapon = $("#weapon").val();
    game.player.character = $("#character").val();
    $("#character-display").html(game.player.character);
    $("#player-hp").html(game.player.hp);
    $("#player-mp").html(game.player.mp);
    $("#player-str").html(game.player.str);
    $("#player-int").html(game.player.int);
    $("#player-agi").html(game.player.agi);
  });

  $(".buy").on("click", function(){
    if (items === "0") {
      game.player.inventory.push("0");
      game.player.currency - 10;
      $("#buy-mp-potion").show();
    } else if (items === "1") {
      game.player.inventory.push("1");
      game.player.currency - 5;
      $("#buy-hp-potion").show();
    } else if (items === "2") {
      game.player.inventory.push("2");
      game.player.currency - 25;
      $("#buy-elixer").show();
    }
  });
});

//leave home creation page
$("#create").on("click", function() {
  $("#page1").hide();
  $(".page2").show();
  if (game.player.character === "Paladin") {
    $("div#pal").show();
    game.player.hp = 50;
    game.player.mp = 25;
    game.player.str = 12;
    game.player.int = 10;
    game.player.agi = 10;
  } else if (game.player.character === "Mage") {
    $("div#mag").show();
    game.player.hp = 40;
    game.player.mp = 40;
    game.player.str = 6;
    game.player.int = 30;
    game.player.agi = 15;
  } else if (game.player.character === "Brute") {
    $("div#bru").show();
    game.player.hp = 60;
    game.player.mp = 25;
    game.player.str = 16;
    game.player.int = 0;
    game.player.agi = 8;
  }
});
//leave character viewing page
$("#endviewingcharacter").on("click", function() {
  $(".page2").hide();
  $("#map-hub").show();
});
//goes to destination of choice
$("#choose-town").on("click", function() {
  $("#map-hub").hide();
  $("#town").show();
});
$("#choose-dungeon").on("click", function() {
  $("#map-hub").hide();
  $("#floor2").hide();
  $("#floor3").hide();
  $("#dungeon").show();
  $("#floor1").show();
});
$("#choose-cave").on("click", function() {
  $("#map-hub").hide();
  $("#level2").hide();
  $("#level3").hide();
  $("#cave").show();
  $("#level1").show();
});
//manages town
$("#enter-shop").on("click", function() {
  $("#item-shop").show();
  $("#town").hide();
});
$(".exit").on("click", function() {
  $("#item-shop").hide();
  $("#town").show();
});
$("#enter-inn").on("click", function() {
  $("#inn").show();
  $("#town").hide();
});
$(".exit-inn").on("click", function() {
  $("#inn").hide();
  $("#town").show();
});
$("#back-to-menu").on("click", function() {
  $("#town").hide();
  $("#map-hub").show();
});
//manages fortress
$(".move-ahead").on("click", function() {
  $("#floor1").hide();
  $("#floor2").show();
});
$(".exit-fort").on("click", function () {
  $("#dungeon").hide();
  $("#map-hub").show();
});
$(".go-back").on("click", function () {
  $("#floor2").hide();
  $("#floor1").show();
});
$(".move-ahead").on("click", function () {
  $("#floor1").hide();
  $("#floor2").show();
});
$(".move-ahead2").on("click", function () {
  $("#floor2").hide();
  $("#floor3").show();
});
$(".go-back1").on("click", function () {
  $("#floor3").hide();
  $("#floor2").show();
});
$(".back-to-home").on("click", function () {
  $("#dungeon").hide();
  $("#map-hub").show();
});
//manages cave
$(".exit-cave").on("click", function () {
  $("#cave").hide();
  $("#map-hub").show();
});
$(".move-ahead-cave").on("click", function () {
  $("#level1").hide();
  $("#level2").show();
});
$(".go-back-cave").on("click", function () {
  $("#level2").hide();
  $("#level1").show();
});
$(".move-ahead-cave2").on("click", function () {
  $("#level2").hide();
  $("#level3").show();
});
$(".go-back-cave1").on("click", function () {
  $("#level3").hide();
  $("#level2").show();
});
$(".back-to-home-cave").on("click", function () {
  $("#cave").hide();
  $("#map-hub").show();
});