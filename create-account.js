const button = document.getElementById("button-signup");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// let myForm = document.getElementById("myForm");
// button.addEventListener("click", async function () {
//   try {
//     let inputUsername = username.value;
//     let inputEmail = email.value;
//     let inputPassword = password.value;

//     let dataForm = {
//       name: `${inputUsername}`,
//       email: `${inputEmail}`,
//       password: `${inputPassword}`,
//     };
//     console.log(dataForm);
//     let response = await fetch(
//       `https://5fa790be9def160016adaf1c.mockapi.io/api/v1/users`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataForm),
//       }
//     );
//     let data = await response.json();
//     if (response.status !== 200) throw Error(data.message);
//     return data;
//   } catch (error) {
//     return error;
//     console.log(error);
//   }
// });

button.addEventListener("click", postData);

function postData(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  let dataUser = {
    name,
    email,
    password,
  };

  fetch("https://5fa790be9def160016adaf1c.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "./login.html";
    })
    .catch((err) => console.log(err));
}
