let recipe = document.getElementById("recipe");
let img = document.getElementById("img");
let nama = localStorage.getItem("Nama");
let gambar = localStorage.getItem("Gambar");
let deskripsi =localStorage.getItem("Deskrip")
let bahan = JSON.parse(localStorage["Bahan"]);
let step = JSON.parse(localStorage["Step"]);
let image = `<img class="rounded mx-auto d-block img-fluid" src="${gambar}" style="width: 500px;">`;

img.innerHTML = image;
bahan.forEach(myBahan);
recipe.innerHTML = nama;
descripsi.innerHTML = deskripsi
step.forEach(myStep);


function myBahan(item) {
  document.getElementById("bahan").innerHTML += "<li>" + item + "</li>";
}

function myStep(item) {
  document.getElementById("step").innerHTML += "<li>" + item + "</li>";
}





