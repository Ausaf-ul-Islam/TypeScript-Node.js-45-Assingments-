"use strict";
/* Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
let alien_color1 = "green";
//First Version
if (alien_color1 === "green") {
    console.log("(Version #1)the player earned 5 points for shooting the alien!");
}
else if (alien_color1 === "yellow") {
    console.log("the player  earned 10 points");
}
else if (alien_color1 === "red") {
    console.log("the player earned 15 points");
}
let alien_color2 = "yellow";
//Second Version
if (alien_color2 === "green") {
    console.log("the player earned 5 points for shooting the alien!");
}
else if (alien_color2 === "yellow") {
    console.log("(Version #2) the player  earned 10 points");
}
else if (alien_color2 === "red") {
    console.log("the player earned 15 points");
}
let alien_color3 = "red";
//Third Version
if (alien_color3 === "green") {
    console.log("the player earned 5 points for shooting the alien!");
}
else if (alien_color3 === "yellow") {
    console.log("the player  earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("(Version #3) the player earned 15 points");
}
