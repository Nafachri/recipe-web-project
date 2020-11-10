import { getUserCredential } from "../services/local-storage-services.js";

const navbar = document.getElementById("list-nav");
const signInNav = navbar.children[2];
const signUpNav = navbar.children[3];

const onInit = () => {
  const userCred = getUserCredential();

  if (userCred) {
    const signOutNav = document.createElement("li");
    signOutNav.className = "nav-item";
    signOutNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Sign Out</a>`;

    const profileNav = document.createElement("li");
    profileNav.className = "nav-item";
    profileNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Hi, ${userCred.name}</a>`;

    const bookmarkNav = document.createElement("li");
    bookmarkNav.className = "nav-item";
    bookmarkNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Bookmark</a>`;

    navbar.replaceChild(profileNav, signInNav);
    navbar.replaceChild(signOutNav, signUpNav);
    navbar.insertBefore(bookmarkNav, profileNav);
  }
};

onInit();
