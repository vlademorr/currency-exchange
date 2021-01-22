const getFavorite = (currency: string): boolean => {
  const favorites = localStorage.getItem('favorites') || '[]';

  try {
    return JSON.parse(favorites).indexOf(currency) !== -1;
  } catch (e) {
    console.log(e);
    return false;
  };
};

const setFavorite = (currency: string): void => {
  const favorites = localStorage.getItem('favorites') || '[]';
  
  try {
    const favoritesArray = JSON.parse(favorites);
    if (favoritesArray.indexOf(currency) !== -1) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(
          favoritesArray
            .filter((favoriteCurrency: string): boolean => favoriteCurrency !== currency)
        )
      );
    } else {
    favoritesArray.push(currency);
      localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    };
  } catch (e) {
    console.log(e);
  };
};

export {getFavorite, setFavorite};
