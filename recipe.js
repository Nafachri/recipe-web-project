let recipe = document.getElementById("recipe");
let img = document.getElementById("img");

let id = localStorage.getItem("idResep");
let getDataRecipe = async function(){
  try{
    let response = await fetch(`https://5fa790be9def160016adaf1c.mockapi.io/api/v1/recipes/${id}`);
    let data = await response.json();
    img.innerHTML = `<img class="rounded mx-auto d-block img-fluid" src="${data.imgUrl}" style="width: 500px;">`;
    for(let i = 0; i < data.ingredients.length; i++){
      document.getElementById("bahan").innerHTML += "<li>" + data.ingredients[i] + "</li>";
    };
    for(let j = 0; j <data.steps.length; j++){
      document.getElementById("step").innerHTML += "<li>" + data.steps[j] + "</li>";
    }
    recipe.innerHTML = data.recipeName;
    descripsi.innerHTML = data.desc;
  }
  catch(error){
    
  }

  
}
getDataRecipe()





