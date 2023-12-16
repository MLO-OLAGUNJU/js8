// conditionals: Tenary Operators

//Syntax
//condition ? ifTrue : ifFalse;

/* let soup = "Chicken noodle soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";

console.log(response); */

/* let soup = "Chicken noodle soup";
let isCustomerBanned = false;
let soupAcess = isCustomerBanned
  ? "Sorry no soup for you!"
  : soup
  ? `Yes we have ${soup} today.`
  : `Sorry no ${soup} for you today`;

console.log(soupAcess);
 */

/* let testScore = 79;
let myGrade =
  testScore > 89
    ? `A`
    : testScore > 79
    ? `B`
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : testScore > 49
    ? "E"
    : "F";
console.log(`My test grade is ${myGrade}.`); */

// Rock paper scissors
//tenary operators

let playerOne = `scissors`;
let computer = `rock`;

let gameResult =
  playerOne === computer
    ? `Tie game!`
    : playerOne === `rock` && computer === `scissors`
    ? `playerOne wins!`
    : playerOne === `scissors` && computer === `paper`
    ? `playerOne wins!`
    : playerOne === `rock` && computer === `paper`
    ? `computer wins!`
    : `playerOne wins!`;

console.log(gameResult);
