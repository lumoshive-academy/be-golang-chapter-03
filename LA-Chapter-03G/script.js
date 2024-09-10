// Menambahkan elemen baru ke dalam daftar
document.getElementById("addButton").addEventListener("click", function () {
  var list = document.getElementById("list");
  var newItem = document.createElement("li");
  newItem.innerHTML = "Item baru";
  list.appendChild(newItem);
});

// Menghapus elemen dari daftar
document.getElementById("removeButton").addEventListener("click", function () {
  var list = document.getElementById("list");
  if (list.children.length > 0) {
    list.removeChild(list.children[0]);
  }
});
