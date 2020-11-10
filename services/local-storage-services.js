const getBookmark = () => {
  const recipes = localStorage.getItem("bookmark");

  return JSON.parse(recipes);
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

const removeBookmark = (index) => {
  let existingBookmark = JSON.parse(localStorage.getItem("bookmark"));
  existingBookmark.splice(index, 1);

  localStorage.setItem("bookmark", JSON.stringify(existingBookmark));
};

const clearBookmark = () => {
  return localStorage.clear();
};

// function untuk mengambil informasi user dari local storage
const getUserCredential = () => {
  const userCred = localStorage.getItem("user_credential");

  // mengembalikan object informasi user
  return JSON.parse(userCred);
};

// function untuk menyimpan informasi user kedalam local storage
// function ini menerima argument berupa object informasi user itu sendiri
const storeUserCredential = (userCred) => {
  // simpan credential user kedalam local storage dengan key "user_credential"
  localStorage.setItem("user_credential", userCred);

  // Check jika key "user_credential" memiliki value
  // Jika iya maka return true sebagai tanda proses berhasil
  if (getUserCredential()) return true;
  // Jika tidak maka return false sebagai tanda proses gagal
  return false;
};

export {
  getBookmark,
  addBookmark,
  removeBookmark,
  clearBookmark,
  getUserCredential,
  storeUserCredential,
};
