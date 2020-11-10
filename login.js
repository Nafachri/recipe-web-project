import { storeUserCredential } from "./services/local-storage-services.js";

let errorMessage = "Invalid username or password.";
const button = document.getElementById("button-sign-in");
button.addEventListener("click", validate);

async function validate() {
  try {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const response = await fetch(
      "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/users"
    );
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (
        username.value === data[i].username &&
        password.value === data[i].password
      ) {
        let isStored = storeUserCredential(data[i]);
        console.log(isStored);
        if (isStored) {
          window.location.href = "./findrecipepage.html";
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

//   method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.parse(dataUser),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       window.location.href = "./login.html";
//     })
//     .catch((err) => console.log(err));
// }
