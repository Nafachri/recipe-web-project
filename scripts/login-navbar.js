import { getUserCredential } from "../services/local-storage-services.js";

const navbar = document.getElementsByClassName("navbar-nav")[0];

const signInNav = navbar.children[2];
const signUpNav = navbar.children[3];

const signOut = () => {
  localStorage.removeItem("user_credential");
  window.location.href ="../index.html"
}

const onInit = () => {
  const userCred = getUserCredential();

  if (userCred) {
    const signOutNav = document.createElement("li");
    signOutNav.className = "nav-item";
    signOutNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Sign Out</a>`;
    signOutNav.addEventListener("click", signOut)

    const profileNav = document.createElement("li");
    profileNav.className = "nav-item";
    profileNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Hi, ${userCred.username}</a>`;

    const bookmarkNav = document.createElement("li");
    bookmarkNav.className = "nav-item";
    bookmarkNav.innerHTML = `<a class="nav-link" style="color: whitesmoke; font-family: 'Heebo'; font-size: 18px" href="#">Bookmark</a>`;

    navbar.replaceChild(profileNav, signInNav);
    navbar.replaceChild(signOutNav, signUpNav);
    navbar.insertBefore(bookmarkNav, profileNav);
  }
};
onInit();

