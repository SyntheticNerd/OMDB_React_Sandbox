const url = new URL("https://www.omdbapi.com");

////-------------------------------------------Using promises and .then

// let getMoviesBySearchTerm = (myKey, title) => {
//   let url = `https://www.omdbapi.com/?apikey=${myKey}&t=${title}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       app.innerHTML = data.Title;
//     })
//     .catch((er) => console.log(er, url));
// };

//-----------------------------------------------Using Async and Await

const fetchJSON = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};

export const getMoviesBySearchTerm = (myKey, title) => {
  let url = `https://www.omdbapi.com/?apikey=${myKey}&s=${title}`;
  return fetchJSON(url);
};

export const getMovieDetailsById = (myKey, id) => {
  let url = `https://www.omdbapi.com/?apikey=${myKey}&i=${id}`;
  return fetchJSON(url);
};
