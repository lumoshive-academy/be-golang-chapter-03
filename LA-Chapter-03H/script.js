// Menambahkan event listener ke elemen HTML
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// Fungsi yang dipanggil oleh event inline
function showAlert() {
  alert("Button clicked!");
}

// Mengakses elemen dengan query selector
var para = document.querySelector(".text");
console.log(para.innerHTML); // Output: Paragraf pertama.

// Mengakses semua elemen dengan query selector
var allParas = document.querySelectorAll(".text");
allParas.forEach(function (para, index) {
  console.log("Paragraf " + (index + 1) + ": " + para.innerHTML);
});
