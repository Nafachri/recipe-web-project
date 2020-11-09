import {
  addBookmark,
  getBookmark,
  removeBookmark,
} from "../services/local-storage-services.js";

const cardSection = document.getElementById("recipe-list");

addBookmark({
  id: "1",
  createdAt: "2020-11-07T23:51:16.908Z",
  recipeName: "Cireng Salju",
  desc: "Cireng Salju renyah, lembut dan gurih di mulut..",
  tools: [],
  ingredients: [
    "200gr tepung tapioka",
    "4 siung bawang putih",
    "2 batang daun bawang",
    "garam dan merica secukupnya",
    "1 sdt penyedap ayam",
    "180ml air panas",
  ],
  steps: [
    "1. Geprek bawang putih dan potong daun bawang. Campurkan ke dalam tepung tapioka dan garam",
    "2. Rebus air 180 ml, dan tambahkan 2 sdm tepung tapioka, aduk sampai seperti lem (disebutnya adonan biang)",
    "3. Terus biang itu dicampurin ke sisa tapioka, dicampur dan diuleni",
    "4. Uleni adonan pake sendok atau tangan sampe adonan bisa dibentuk",
    "5. Ambil adonan 10 gr, bulatkan kalo mau diberi isian beri sedikit Keju Mozza. atau beri isian lainnya sesuai selera",
    "6. Lalu Pipihkan adonan cireng seperti ini, jangan terlalu tipis ya.. apalagi kalo pake isian",
    "7. Hasil nya Lumayan banyak nih.. jadi 13-15 biji tergantung ukuran dan berat adonan",
    "8. Goreng cireng dalam minyak panas dan api sedang. kalo adonan sesuai step diatas, cireng bakal mengembang dan berwarna putih",
    "9. Cantik kan hasil nya.. aku sarankan segera dimakan deh pas anget anget gini, enak banget masih renyah renyah lembut gitu",
  ],
  imgUrl:
    "https://assets.pikiran-rakyat.com/crop/0x112:960x697/x/photo/2020/07/25/395810615.jpg",
  category: "Indonesia",
});

const showCard = (recipe) => {
  cardSection.innerHTML = "";
  for (let i = 0; i < recipe.length; i++) {
    let data = `
        <div class = "col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <img class="card-img-top" src="${recipe[i].imgUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 id="card-title" class="card-title">${recipe[i].recipeName}</h5>
                        <p class="card-text">${recipe[i].desc}</p>
                    </div>
                    <div class="card-footer">
                        <button id="buttonCook" class="btn text-white">Cook!</button>
                        <button id="remove-btn-${i}" type="button" class="btn btn-outline-danger">Remove</button>
                    </div>
            </div>
        </div>`;

    cardSection.innerHTML += data;
    const removeBtn = document.getElementById(`remove-btn-${i}`);

    removeBtn.addEventListener("click", () => {
      console.log(i);
      removeBookmark(i);
      loadBookmark();
    });
  }
};

function loadBookmark() {
  const bookmark = getBookmark();

  if (!bookmark) {
    cardSection.innerHTML = `<h5 style="margin: auto">Hmm... Lom ada resep yang di bookmark nih</h5>`;
  } else {
    showCard(bookmark);
  }
}

loadBookmark();

// removeBtn.addEventListener("click", () => {
//   console.log(i);
//   removeBookmark(i);
//   loadBookmark();
// });
