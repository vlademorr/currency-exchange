const getFavorite = (currency) => {
  const favorites = localStorage.getItem("favorites") || "[]";

  try {
      return JSON.parse(favorites).indexOf(currency) !== -1
  } catch (e) {
      console.log(e);
  }
};

const setFavorite = (currency) => {
  const favorites = localStorage.getItem("favorites") || "[]";
  try {
      const favoritesArray = JSON.parse(favorites);
      if (favoritesArray.indexOf(currency) !== -1) {
          localStorage.setItem(
              "favorites",
              JSON.stringify(favoritesArray.filter((favoriteCurrency) => favoriteCurrency !== currency))
          );
      } else {
        favoritesArray.push(currency);
          localStorage.setItem("favorites", JSON.stringify(favoritesArray));
      }
  } catch (e) {
      console.log(e);
  }
};

export {getFavorite, setFavorite};