const OMDB_API_BASE_URL = 'http://www.omdbapi.com/';
const OMDB_API_KEY = 'YOUR API KEY GOES HERE'

export const getMoviesByName = async (search) => {
  const url = `${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&s=${search}`;

  try {
    const res = await fetch(url);
    const { Search } = await res.json();
    return Search;
  } catch (error) {
    console.log(error)
  }

  return [];
}

export const getMovieDetailsById = async (movieId) => {
  const url = `${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${movieId}`;

  try {
    const res = await fetch(url);
    const movie = await res.json();
    return movie;
  } catch (error) {
    console.log(error)
  }

  return null;
}