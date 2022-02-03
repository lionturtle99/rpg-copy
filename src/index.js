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
// eventResult = (userChoice, lvl) => {
//   if (userChoice === "0") {
//     $("#chest").show();
//     addToInventory(lvl);
//     // call a function to add item to their inventory
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

function displayStats() {
  $(".character-display").html(game.player.character);
  $(".player-name").html(game.player.name);
  $(".player-hp").html(game.player.hp);
  $(".player-mp").html(game.player.mp);
  $("#player-str").html(game.player.str);
  $("#player-int").html(game.player.int);
  $("#player-agi").html(game.player.agi);
}

function displayInventory() {
  $("#bank").html(game.player.currency);
  $("#inventory").html("");
  game.player.inventory.forEach(function(item){
    $("#inventory").append("<li>" + item + "</li>");
  });
}

function displayWeapon() {
  if (game.player.character === "Paladin" && game.player.weapon === "1") {
    $(".sword").append("<img id=sword-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490913066483773/sword1.png>");
  } else if (game.player.character === "Paladin" && game.player.weapon === "2") {
    $(".staff").append("<img id=staff-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490887221182504/staff1.png>");
  } else if (game.player.character === "Paladin" && game.player.weapon === "3") {
    $(".axe").append("<img id=axe-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490862726438942/axe1.png> ");
  } else if (game.player.character === "Mage" && game.player.weapon === "1") {
    $(".sword").append("<img id=sword-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490913066483773/sword1.png>");
  } else if (game.player.character === "Mage" && game.player.weapon === "2") {
    $(".staff").append("<img id=staff-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490887221182504/staff1.png>");
  } else if (game.player.character === "Mage" && game.player.weapon === "3") {
    $(".axe").append("<img id=axe-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490862726438942/axe1.png> ");
  } else if (game.player.character === "Brute" && game.player.weapon === "1") {
    $(".sword").append("<img id=sword-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490913066483773/sword1.png>");
  } else if (game.player.character === "Brute" && game.player.weapon === "2") {
    $(".staff").append("<img id=staff-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490887221182504/staff1.png>");
  } else if (game.player.character === "Brute" && game.player.weapon === "3") {
    $(".axe").append("<img id=axe-img src=https://" + "cdn.discordapp.com/attachments/938476345514655784/938490862726438942/axe1.png> ");
  }
}

function displayHero() {
  if (game.player.character === "Paladin") {
    $(".mag").hide();
    $(".bru").hide();
    game.player.hp = 50;
    game.player.mp = 25;
    game.player.str = 12;
    game.player.int = 10;
    game.player.agi = 10;
    displayStats();
  } else if (game.player.character === "Mage") {
    $(".pal").hide();
    $(".bru").hide();
    game.player.hp = 40;
    game.player.mp = 40;
    game.player.str = 6;
    game.player.int = 30;
    game.player.agi = 15;
    displayStats();
  } else if (game.player.character === "Brute") {
    $(".mag").hide();
    $(".pal").hide();
    game.player.hp = 60;
    game.player.mp = 25;
    game.player.str = 16;
    game.player.int = 0;
    game.player.agi = 8;
    displayStats();
  }
}




$("").html(game.player.name);
attachContactListeners();
$("#submit-character").submit(function(event){
  event.preventDefault();
  game.player.name = $("#user-name").val();
  game.player.weapon = $("#weapon").val();
  game.player.character = $("#character").val();
  displayStats();
  $("#page1").hide();
  $(".page2").show();
  displayWeapon();
  displayHero();
});


// battle dungeon page
$(".battle-dungeon").submit(function(event) {
  event.preventDefault();
  // game.player.name = name;
  // game.player.weapon = weapon;
  // game.player.character = character;
  $("#dungeon").hide();
  $("#battle-screen").show();
  $("#btns-battle").show();
  $("#battle-items").hide();
  displayHero();
  $("#attack").on("click", function() {
    battle();
    displayStats();
    setTimeout(battle(), 1000);
    displayStats();
    console.log(game.enemy1.hp);
    console.log(game.player.attackRoll());
  });
});
$("#item-use").on("click", function(){
  $("#btns-battle").hide();
  $("#battle-items").show();
  $("#return-attack").show();
});
$("#return-attack").on("click", function(){
  $("#btns-battle").show();
  $("#battle-items").hide();
  $("#return-attack").hide();
});
$("#battle-item").submit(function(event){
  event.preventDefault();
  let potion = $("#battle-items").val();
  console.log(potion)
  console.log(game.player.inventory)
  game.player.useItem(potion);
  displayStats();
}); 

function battle() {
  let pAttack = game.player.attackRoll();
  let eAttack = game.enemy.enemyAttack();
  if (game.turn === true) {
    game.enemy.hp -= pAttack;
    game.turn = !game.turn;
  } 
  else if (game.turn === false) {
    game.player.hp -= eAttack;
    game.turn = !game.turn;
  }
}

// functions for buying an item
$("#buy-items").submit(function(event){
  let items = $("#items").val();
  event.preventDefault();

  if (game.player.currency >= 2) {
    if (items === "Elixir") {
      game.player.inventory.push(items);
      game.player.currency -= 2;
      $("#buy-elixir").show();
      $("#buy-hp-potion").hide();
      $("#buy-mp-potion").hide();
      $("#items").val("");
    } else if (items === "Health Potion") {
      game.player.inventory.push(items);
      game.player.currency -= 2;
      $("#buy-hp-potion").show();
      $("#buy-elixir").hide();
      $("#buy-mp-potion").hide();
      $("#items").val("");
    } else if (items === "Mana Potion") {
      game.player.inventory.push(items);
      game.player.currency -= 2;
      $("#buy-mp-potion").show();
      $("#buy-hp-potion").hide();
      $("#buy-elixir").hide();
      $("#items").val("");
    } 
} else {
  $("#broke").show();
  $("#buy-hp-potion").hide();
  $("#buy-elixir").hide();
  $("#buy-mp-potion").hide();
}
  displayInventory();
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
  displayInventory();
  $("#item-shop").show();
  $(".yes").show();
  $(".no").show();
  $(".items").hide();
  $("#town").hide();
  $("#leave").hide();
});
$(".yes").on("click", function() {
  $(".items").show();
  $("#leave").show();
  $(".yes").hide();
  $(".no").hide();
});
$(".no").on("click", function () {
  $("#item-shop").hide();
  $("#town").show();
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
// $(".battle-dungeon").on("click", function () {
//   $("#dungeon").hide();
//   $("#battle-screen").show();
  
// // });
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