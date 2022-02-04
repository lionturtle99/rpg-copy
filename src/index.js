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

const outputId = ".town-info";
const townInfo = `This bustling city was once part of an even greater kingdom under the rule of Count
Fahlslem; The Kingdom of Duhne. They were well known for their export of a rare mineral called
Chrisym-Stone. Due to unfortunate events the Count no longer lives and the kingdom has been reduced into this
small city. The town's folk are terrified of going into his fortress north of the city and tales of monsters
and ghosts permeate the streets`;

const dungeonFloor1Id = ".f1text";
const dungeonFloor1 = `You have entered the Grimsythe Fortress...
The repugnant smell of blood and mold fills the air. You feel a chill run down your spine
and get that feeling that... somewhere... is watching you...
You grip your weapon tightly. Sounds of howling wind creep through broken winds and dark
  corridors`;

const innKeeperId = "";
const innKeeper = ``;

// function for adding a typing effect to the DOM
async function typeWriter(sentence, outputId) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await letterDelay();
    $(outputId).append(letters[i]);
    i++
  }
  return;
}

// timer for the typeWriter function
function letterDelay() {
  return new Promise(resolve => setTimeout(resolve, 100));
}

function displayStats() {
  $(".character-display").html(game.player.character);
  $(".player-name").html(game.player.name);
  $(".player-hp").html(game.player.hp);
  $(".player-mp").html(game.player.mp);
  $("#player-str").html(game.player.str);
  $("#player-int").html(game.player.int);
  $("#player-agi").html(game.player.agi);
  $(".enemy-hp").html(game.enemy.hp);
}

function displayInventory() {
  $(".bank").html(game.player.currency);
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
  $("#use-item").hide();
  displayHero();
  displayStats();
  $(".attack").on("click", function() {
    $(".attack").hide();
    setTimeout(function(){
        $(".attack").show();
    }, 2000)
      $('#enemy1').fadeOut();
      $('#enemy1').fadeIn();
      $('#enemy1').fadeOut();
      $('#enemy1').fadeIn();
      battle();
      displayStats();
      setTimeout(function() {
        battle();
        displayStats();
      }, 1000)
      
      console.log(game.player.str)
      console.log(game.player.attackRoll())
      console.log(game.enemy.hp + "enemy hp");
      console.log(game.player.attackRoll() + "attack roll");
    });
});

function battleResult() {
  if (game.player.hp <= 0 || game.enemy.hp <= 0) {
    $("#battle-screen").fadeOut();
    $("#results-screen").fadeIn();
    if (game.player.hp <= 0) {
      $("#win-or-lose").html("You Lose ):");
    } else if (game.enemy.hp <= 0) {
      $("#win-or-lose").html("You Won!!");
    }
  }
}

$(".item-use").on("click", function(){
  $("#use-item").show();
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
    battleResult();
    game.enemy.hp -= pAttack;
    game.turn = !game.turn;
  } 
  else if (game.turn === false) {
    battleResult();
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

$(".stay").on("click", function(){
  $("#inn").fadeOut();
  console.log(game.player.hp)
  game.player.payInn();
  console.log(game.player.hp)
  $("#wake-up-message").fadeIn();
});
$("#exit-rest").on("click", function() {
  $("#wake-up-message").fadeOut();
  $("#inn").fadeIn();
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
  typeWriter(townInfo, outputId);
});
$("#choose-dungeon").on("click", function() {
  $("#map-hub").hide();
  $("#floor2").hide();
  $("#floor3").hide();
  $("#dungeon").show();
  $("#floor1").show();
  typeWriter(dungeonFloor1, dungeonFloor1Id);
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
  $("#items").show();
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
  displayInventory();
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
$(".back-to-home-cave").on("click", function () {
  $("#dungeon").hide();
  $("#map-hub").show();
});
//manages cave
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
$(".battle2-go").on("click", function () {
  $("#cave").hide();
  $("#battle-screen2").show();
});
// manages exiting battle screen
$(".back-to-home-cave").on("click", function () {
  $("#results-screen").hide();
  $("#battle-screen").hide();
  $("#map-hub").show();
  location.reload();
  console.log(game.enemy.hp)
  game.enemy.hp = 25;
  console.log(game.enemy.hp + "enemy")
  console.log(game.player.hp + "player")
  game.player.hp += 25;
  console.log(game.player.hp + "player")
});
