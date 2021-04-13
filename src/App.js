import MovieCard from './MovieCard';
import {getMoviesByName} from './utils'

function App() {
  getMoviesByName('batman')
  return (
    <div>
      <h1>Hello</h1>
      <MovieCard title="Batman vs Superman" type="movie" posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg" />
      <MovieCard title="Hulk vs Superman" type="movie" posterUrl="https://nerdist.com/wp-content/uploads/2019/06/120914_SupermanHulk_FEAT.jpg" />
      <MovieCard title="Batman begins" type="movie" posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg" />
    </div>
  );
}

export default App;
