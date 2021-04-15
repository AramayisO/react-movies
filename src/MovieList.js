import MovieCard from "./MovieCard"

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map(movie => <MovieCard key={movie.imdbID} title={movie.Title} type={movie.Type} posterUrl={movie.Poster} /> )
      }
    </div>
  );
}

MovieList.defaultProps = {
  movies: []
}

export default MovieList;