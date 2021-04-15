import React from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import {getMoviesByName} from './utils'
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

  render() {
    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
