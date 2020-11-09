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

export { getBookmark, addBookmark, removeBookmark, clearBookmark };
