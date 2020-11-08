//Ngambil Element Buat Input
//Ambil 

let inputUserRecipe = document.getElementById("input-user-recipe");
let findRecipe = document.getElementById("find-recipe")
let category = document.getElementById("category")
let buttonClick = document.getElementById("button-click");
let url = "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/recipes"

//Data Dari API Untuk Di Akses Semua Function
let data ;

// Ambil Data Dari API 
const getData = async () => {
    const response = await fetch(url);
    data = await response.json();
    showCard(data) // ini dipanggil lagi karena kita mau nampilin si card
    console.log(show);
}

// Menaruh Data Yang Di Dapat Dari API Kedalam Card
const showCard = (recipe) => { //ini recipe mengambil data dari API Di Atas
    findRecipe.innerHTML = "";
    for(let i = 0; i < recipe.length; i++){
      let data = `
        <div class = "col-lg-4">
            <div class="card">
                <img class="card-img-top" src="${recipe[i].imgUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 id="card-title" class="card-title">${recipe[i].recipeName}</h5>
                        <p class="card-text">${recipe[i].desc}</p>
                    </div>
                    <div class="card-footer">
                        <button id="buttonCook" class="btn text-white">Cook!</button>
                    </div>
            </div>
        </div>`

        findRecipe.innerHTML += data; // ini artinya nanti isi dari findrecipe adalah data
    }
};
getData()

//Filter Menu Yang Dimasukan User
const filterRecipe = () => {
    let filter = data.filter(recipe => recipe.recipeName.includes(inputUserRecipe.value)); // ini mengambil data recipe untuk di filter
    console.log(filter);
    showCard(filter)
    return false;
}
buttonClick.onclick = filterRecipe;
