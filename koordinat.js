// Sumbu x dan y is customizable
let x = 5; 
let y = -3; 

if (x > 0 && y > 0) {
  console.log("The player is on the top right");
} else if (x < 0 && y < 0) {
  console.log("The player is at the bottom left");
} else if (x > 0 && y < 0) {
  console.log("The player is at the bottom right");
} else if (x < 0 && y > 0) {
  console.log("The player is on the top left");
} else {
  console.log("The player is in the middle");
}
