// Operator aritmatika
let sum = 5 + 10;      // Penjumlahan
let diff = 15 - 5;     // Pengurangan
let prod = 2 * 3;      // Perkalian
let quot = 10 / 2;     // Pembagian
let mod = 10 % 3;      // Modulus
// Operator perbandingan
let equal = (5 == 5);        // Sama dengan (true)
let strictEqual = (5 === '5'); // Sama dengan tipe data (false)
let notEqual = (5 != 4);     // Tidak sama dengan (true)
let greater = (5 > 3);       // Lebih besar dari (true)
let less = (5 < 3);          // Lebih kecil dari (false)
// Operator logika
let and = (true && false);   // Dan (false)
let or = (true || false);    // Atau (true)
let not = (!true);           // Tidak (false)

console.log(sum);


// Kondisi if
if (x > 5) {
    console.log("x lebih besar dari 5");
} else {
    console.log("x tidak lebih besar dari 5");
}
 // Loop for
for (let i = 0; i < 5; i++) {
    console.log("i adalah " + i);
}
 // Loop while
let j = 0;
while (j < 5) {
    console.log("j adalah " + j);
    j++;
}