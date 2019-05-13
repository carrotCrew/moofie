const getGenre = (idsArr, genresArr) => {
  let genresNames = [];

  genresArr.forEach(genre => {
    idsArr.forEach(id => {
      if (genre.id === id) {
        genresNames.push(genre.name);
      }
    });
  });
  genresNames = genresNames.join(", ");
  return genresNames;
};

export default getGenre;
