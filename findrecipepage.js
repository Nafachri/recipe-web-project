//Ngambil Element Buat Input
//Ambil

let inputUserRecipe = document.getElementById("input-user-recipe");
let findRecipe = document.getElementById("find-recipe");
let category = document.getElementById("category-recipe");
let buttonClick = document.getElementById("button-click");
let form = document.getElementById("formInput");
let url = "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/recipes";

//Data Dari API Untuk Di Akses Semua Function
let data;

// Ambil Data Dari API
const getData = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();
    showCard(data); // ini dipanggil lagi karena kita mau nampilin si card
  } catch (err) {
    console.log(err);
  }
};

const detail = (id) => {
  // let baku = data[id].ingredients;
  // let step = data[id].steps;
  localStorage.setItem("idResep", id);
  // localStorage.setItem("Nama",data[id].recipeName);
  // localStorage.setItem("Gambar",data[id].imgUrl);
  // localStorage.setItem("Deskrip",data[id].desc);
  // localStorage["Bahan"] = JSON.stringify(baku);
  // localStorage["Step"] = JSON.stringify(step);
  window.location.href = "recipe.html";
};

// function untuk mengambil informasi user dari local storage
const getUserCredential = () => {
  const userCred = localStorage.getItem("user_credential");

  // mengembalikan object informasi user
  return JSON.parse(userCred);
};

const addBookmark = (recipe) => {
  let existingBookmark = JSON.parse(localStorage.getItem("bookmark"));

  if (existingBookmark) {
    let newBookmark = [...existingBookmark, recipe];
    localStorage.setItem("bookmark", JSON.stringify(newBookmark));
  } else {
    localStorage.setItem("bookmark", JSON.stringify([recipe]));
  }
};

function bookmark(recipe) {
  let user = getUserCredential();
  if (user) {
    addBookmark(recipe);
    alert("Resep berhasil di bookmark.");
  } else {
    alert("Anda harus login terlebih dahulu.");
  }
}

// Menaruh Data Yang Di Dapat Dari API Kedalam Card
function showCard(recipe) {
  //ini recipe mengambil data dari API Di Atas
  // console.log(recipe);
  findRecipe.innerHTML = "";
  for (let i = 0; i < recipe.length; i++) {
    let item = recipe[i];
    let data = `
        <div class = "col-lg-4 d-flex pb-3">
            <div class="card">
                <img id="card-image" class="card-img-top" src="${item.imgUrl}" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 id="card-title" class="card-title text-danger">${item.recipeName}</h5>
                        <p class="card-text text-danger">${item.desc}</p>
                    </div>
                    <div class="card-footer">
                      <a id="buttonCook" class="btn text-white" onClick="detail(${item.id})">Cook</a>
                      <button onclick="bookmark(${item.id})" type="button" class="btn btn-outline-danger">Bookmark</button>
                    </div>
            </div>
        </div>`;

    findRecipe.innerHTML += data; // ini artinya nanti isi dari findrecipe adalah data
  }
}
getData();

//Filter Menu Yang Dimasukan User
const filterRecipe = () => {
  let filter = data.filter((recipe) => {
    let myRegex = new RegExp(inputUserRecipe.value, "i"); //ini untuk user bisa meng input dengan huruf kecil
    return (
      // recipe.recipeName.includes(inputUserRecipe.value)

      myRegex.test(recipe.recipeName) &&
      (recipe.category == category.value || category.value == "All")
    );
  }); // ini mengambil data recipe untuk di filter
  showCard(filter);
  return false;
};
buttonClick.onclick = filterRecipe;
