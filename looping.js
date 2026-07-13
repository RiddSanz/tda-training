// 1. Mencetak nama sebanyak 20 baris
for (let i = 0; i < 20; i++) {
  console.log("Hai, aku parid");
}

// 2. Menampilkan urutan angka dari 1 sampai 20 (dicetak satu baris memanjang)
let sequenceNumbers = "";
for (let i = 1; i <= 20; i++) {
  sequenceNumbers += i + " ";
}
console.log(sequenceNumbers.trim());

// 3. Menampilkan kelipatan 5 dari 5 sampai 100
let sequenceMultiples = "";
for (let i = 5; i <= 100; i += 5) {
  sequenceMultiples += i + " ";
}
console.log(sequenceMultiples.trim());
