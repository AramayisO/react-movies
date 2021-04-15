import React from 'react';
import Modal from './Modal';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import {getMovieDetailsById, getMoviesByName} from './utils'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: 'batman',
      isLoading: false,
      error: null,
      showModal: false,
      selectedMovieId: null,
      selectedMovie: null,
    };

    this.updateShowModalState = this.updateShowModalState.bind(this);
    this.onMovieClicked = this.onMovieClicked.bind(this);
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
    if (prevState.selectedMovieId !== this.state.selectedMovieId) {
      try {
        const newMovie = await getMovieDetailsById(this.state.selectedMovieId);
        this.setState({
          selectedMovie: newMovie,
          showModal: true
        });
      } catch(error) {
        this.setState({
          error: error,
          showModal: false,
        });
      }
    }
  }

  updateShowModalState(shouldShow) {
    this.setState({
      showModal: shouldShow
    });
  }

  onMovieClicked(id) {
    this.setState({
      selectedMovieId: id,
    });
  }

  render() {
    const { selectedMovie } = this.state;

    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}
        <MovieList movies={this.state.movies} onMovieCardClicked={this.onMovieClicked} />
        {this.state.showModal &&
          <Modal show={this.state.showModal} onClose={() => this.updateShowModalState(false)}>
            <MovieDetails 
               posterUrl={selectedMovie.Poster}
               title={selectedMovie.Title}
               rating={selectedMovie.Ratings[0].Value}
               rated={selectedMovie.Rated}
               runtime={selectedMovie.Runtime}
               genre={selectedMovie.Genre}
               plot={selectedMovie.Plot}
               actors={selectedMovie.Actors}
            />
          </Modal>
        }
      </div>
    )
  }
}

export default App;
