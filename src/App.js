import React from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import {getMoviesByName} from './utils'

// function App() {
//   getMoviesByName('batman')
//   return (
//     <div>
//       <h1>Hello</h1>
//       {/* <MovieCard title="Batman vs Superman" type="movie" posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg" />
//       <MovieCard title="Hulk vs Superman" type="movie" posterUrl="https://nerdist.com/wp-content/uploads/2019/06/120914_SupermanHulk_FEAT.jpg" />
//       <MovieCard title="Batman begins" type="movie" posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg" /> */}
//       <MovieDetails
//         posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
//         title="Batman vs Superman"
//         runtime={183}
//       />
//     </div>
//   );
// }

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value === nextProps.value) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    console.log('component updated')
  }

  render() {
    return <li>{this.props.value}</li>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: 'batman',
      isLoading: false,
      error: null,
      count: 0,
      numbers: [1, 2, 3, 4]
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    setTimeout(async () => {
      try {
        const movies = await getMoviesByName(this.state.search);
        this.setState({
          movies,
          error: null,
          isLoading: false,
        });
      } catch(error) {
        this.setState({
          movies: [],
          error,
          isLoading: false,
        });
      }
    },
      5000
    )
  }


  async componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.isLoading ? <p>Loading...</p> : <p>Done loading</p> }
        {this.state.count && <p>Count: {this.state.count}</p>}
        {this.state.movies.map((movie) => <MovieCard key={movie.imdbID} title={movie.Title} type={movie.Type} posterUrl={movie.Poster} />)}
        {this.state.numbers.map((number, index) => <ListItem key={index} value={number} />)}
      </div>
    )
  }
}

export default App;
