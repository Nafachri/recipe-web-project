const cardSection = document.getElementById("recipe-list");

let url = "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/recipes";

//Data Dari API Untuk Di Akses Semua Function
let data;

const getBookmark = () => {
  const recipes = localStorage.getItem("bookmark");

  return JSON.parse(recipes);
};

// Ambil Data Dari API
const getData = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();

    const bookmark = getBookmark();
    let filterByBookmark = data.filter((recipe) => {
      return bookmark.includes(+recipe.id);
    });

    loadBookmark(filterByBookmark);
  } catch (err) {
    console.log(err);
  }
};

const removeBookmark = (recipeId) => {
  let existingBookmark = JSON.parse(localStorage.getItem("bookmark"));
  let index = existingBookmark.indexOf(recipeId);
  existingBookmark.splice(index, 1);

  localStorage.setItem("bookmark", JSON.stringify(existingBookmark));
};

function loadBookmark(bookmark) {
  if (bookmark === []) {
    cardSection.innerHTML = `<h5 style="margin: auto">Hmm... Lom ada resep yang di bookmark nih</h5>`;
  } else {
    showCard(bookmark);
  }
}

function remove(recipeId) {
  removeBookmark(recipeId);
  getData();
}

const detail = (id) => {
  // let baku = data[id].ingredients;
  // let step = data[id].steps;
  localStorage.setItem("idResep", id);
  // localStorage.setItem("Nama",data[id].recipeName);
  // localStorage.setItem("Gambar",data[id].imgUrl);
  // localStorage.setItem("Deskrip",data[id].desc);
  // localStorage["Bahan"] = JSON.stringify(baku);
  // localStorage["Step"] = JSON.stringify(step);
  window.location.href = "../recipe.html";
};

function showCard(recipe) {
  cardSection.innerHTML = "";

  for (let i = 0; i < recipe.length; i++) {
    // console.log(blabla);
    let data = `
        <div class = "col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <img class="card-img-top" src="${recipe[i].imgUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 id="card-title" class="card-title">${recipe[i].recipeName}</h5>
                        <p class="card-text">${recipe[i].desc}</p>
                    </div>
                    <div class="card-footer">
                        <a id="buttonCook" class="btn text-white" onClick="detail(${recipe[i].id})">Cook</a>
                        <button onclick="remove(${recipe[i].id})" class="remove-btn btn btn-outline-danger">Remove</button>
                    </div>
            </div>
        </div>`;

    cardSection.innerHTML += data;
  }
}

getData();
