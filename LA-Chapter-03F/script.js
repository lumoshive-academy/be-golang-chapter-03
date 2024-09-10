// Mengakses elemen dengan ID "title"
var title = document.getElementById("title");
console.log(title.innerHTML); // Output: Hello, World!

// Mengubah konten elemen
title.innerHTML = "Hello, JavaScript!";

// Mengakses elemen dengan kelas "text"
var paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0].innerHTML); // Output: Paragraf pertama.
console.log(paragraphs[1].innerHTML); // Output: Paragraf kedua.

// Mengubah konten elemen pertama dengan kelas "text"
paragraphs[0].innerHTML = "Paragraf pertama diubah!";

// Mengakses elemen dengan tag name "li"
var items = document.getElementsByTagName("li");
console.log(items[0].innerHTML); // Output: Item 1
console.log(items[1].innerHTML); // Output: Item 2

// Mengubah konten elemen kedua dengan tag name "li"
items[1].innerHTML = "Item 2 diubah!";

// Mengubah gaya elemen
var para = document.getElementById("styledParagraph");
para.style.color = "red";
para.style.fontSize = "25px";
