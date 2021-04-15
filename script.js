/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

/* keycodes van toetsenbord */
const KEY_SHIFT = 16;
const KEY_SPACE = 32;
const KEY_ARROW_UP = 38;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;

var spelerX = 200; // x-positie van speler
var spelerY = 600; // y-positie van speler

var playerVelocityX = 0; // x-snelheid van speler
var playerVelocityY = 0; // y-snelheid van speler
var playerMaxSpeedX = 4; // maximale x-snelheid van speler
var playerMaxSpeedY = 6; // maximale y-snelheid van speler

var vijandX = 600;   // x-positie van vijand
var vijandY = 600;   // y-positie van vijand

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var score = 9999; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
    fill(69, 207, 245);
    rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Score berekening
 */
var tekenScore = function() {
    fill(0, 0, 0);
    textSize(40);
    text("Score: " + score, 30, 60);
    if (score > 0) {
        score = --score;
    };
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    fill("red");
    ellipse(x, y, 40, 40);
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(x, y, 40, 40);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {

};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */



/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

    /* aanpassen van de x-snelheid */
    spelerX = spelerX + playerVelocityX;
    
    /* speler naar rechts bewegen */
    if (keyIsDown(KEY_ARROW_RIGHT)) {
        playerVelocityX = playerMaxSpeedX;
    };
    
    /* speler naar links bewegen */
    if (keyIsDown(KEY_ARROW_LEFT)) {
        playerVelocityX = -1 * playerMaxSpeedX;
    };
    
    /* speler rustig laten stoppen */
    if (playerVelocityX > 0) {
        playerVelocityX = playerVelocityX - 0.4;
    };

    if (playerVelocityX < 0) {
        playerVelocityX = playerVelocityX + 0.4;
    };

    if (keyIsDown(KEY_ARROW_RIGHT) && keyIsDown(KEY_ARROW_LEFT)) {
        playerVelocityX = 0;
    };
    

    /* aanpassen van de y-snelheid */
    spelerY = spelerY + playerVelocityY;

    /* speler laten springen */
    if (keyIsDown(KEY_ARROW_UP)) {
        playerVelocityY = -1 * playerMaxSpeedY;
    };

    /* speler laten vallen */
    if (playerVelocityY < 0 || playerVelocityY > 0) {
        playerVelocityY = playerVelocityY + 0.3;
    };


    /* speler laten dashen */
    if (keyIsDown(KEY_SHIFT)) {
        playerVelocityX = 3 * playerMaxSpeedX;
    };

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

    if (vijandX + 80 < spelerX  ||  vijandX > spelerX + 80 || vijandY + 80 < spelerY || vijandY > spelerY + 80) {

    } else if (keyIsDown(KEY_SPACE)) {
        vijandY = 1000;
        score = score + 100;
    };

    if (vijandX + 40 < spelerX  ||  vijandX > spelerX + 40 || vijandY + 40 < spelerY || vijandY > spelerY + 40) {

    } else if (playerVelocityX > playerMaxSpeedX) {
        vijandY = 1000;
        score = score + 100;
    };

    return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
    if (vijandX + 40 < spelerX  ||  vijandX > spelerX + 40 || vijandY + 40 < spelerY || vijandY > spelerY + 40) {
    } else if (playerVelocityX <= playerMaxSpeedX) {
        /* Wat gebeurt er als de speler geraakt wordt */
    };
    
    return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('grey');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
        beweegVijand();
        beweegSpeler();
      
        checkVijandGeraakt();
        checkSpelerGeraakt();

        tekenVeld();
        tekenScore();
        tekenVijand(vijandX, vijandY);
        tekenKogel(kogelX, kogelY);
        tekenSpeler(spelerX, spelerY);

        if (checkGameOver()) {
            spelStatus = GAMEOVER;
        }
        break;
    }
}