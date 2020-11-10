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

// Menaruh Data Yang Di Dapat Dari API Kedalam Card
const showCard = (recipe) => {
  //ini recipe mengambil data dari API Di Atas
  findRecipe.innerHTML = "";
  for (let i = 0; i < recipe.length; i++) {
    let data = `
        <div class = "col-lg-4 d-flex pb-3">
            <div class="card">
                <img id="card-image" class="card-img-top" src="${recipe[i].imgUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 id="card-title" class="card-title">${recipe[i].recipeName}</h5>
                        <p class="card-text">${recipe[i].desc}</p>
                    </div>
                    <div class="card-footer">
                      <a href="#" id="buttonCook" class="btn text-white" onClick="detail(${i})">Cook</a>
                    </div>
            </div>
        </div>`;

    findRecipe.innerHTML += data; // ini artinya nanti isi dari findrecipe adalah data
  }
};
getData();

const detail = (id) => {
  form.innerHTML = "";
  let ingredients = "";
  let steps = "";
  for (let j = 0; j < data[id].ingredients.length; j++) {
    ingredients += "<li>" + data[id].ingredients[j] + "</li>";
  }
  for (let k = 0; k < data[id].steps.length; k++) {
    steps += "<li>" + data[id].steps[k] + "</li>";
  }
  let detailData = `
      
      <div class="container" style="margin-top: 20px font-size:10vw;">
      <header>
        <h1>Detail</h1>
      </header>
        <img class="rounded mx-auto d-block img-fluid" src="${data[id].imgUrl}" style="width: 500px;">
        </div>
        <div class="container" style="margin-bottom: 40px;">
          <b><h1 style="text-align: center; margin-top: 20px;" >${data[id].recipeName}</h1></b>
          <b><h3 style="margin-top: 20px;">Deskripsi :</h3></b>
          <h3 style="margin-top: 5px; font-size: 24px;">${data[id].desc}</h3>
          <b><h3 style="margin-top: 20px;">Bahan-bahan yang diperlukan :</h3></b>
          <ul style="margin-top: 5px; font-size: 24px; list-style-type: square;">
          ${ingredients}
          </ul> 
          <b><h3 style="margin-top: 20px;">Step memasak :</h3></b>
          <ol style="margin-top: 5px; font-size: 24px; text-align: justify;">
          ${steps}
          </ol> 
          <a href="findrecipepage.html" class="btn text-white" style="margin-top: 20px; background-color: #b94242;">Kembali</a>
          
          </div>
  
        `;

  findRecipe.innerHTML = "";
  findRecipe.innerHTML = detailData;
};
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