// Data playtime
let playtime = [2, 2, 3, 3, 1, 4, 5]; 
let limit = 2;

let totalTime = 0;
let exceedCount = 0;

for (let i = 0; i < playtime.length; i++) {
  totalTime += playtime[i]; 
  
  // cek apakah hariini sudah > 2 jam
  if (playtime[i] > limit) {
    exceedCount++; 
  }
}

console.log("Total time Steve spent playing: " + totalTime + " hours");
console.log("Number of times he exceeded the game time limit: " + exceedCount);
