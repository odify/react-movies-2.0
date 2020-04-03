import React, { Component } from 'react';
import MovieItem from 'MovieItem'
import movies from 'MovieData';
import 'movies.css';

class Movies extends Component {
    constructor(props)
    super(props);
    this.state = { movies: movies }

handleAscending = () => {
    let ascendingMovies = this.state.movies.sort((a, b) => a.year - b.year)
    this.setState({ movies: ascendingMovies })
}
handleDescending = () => {
    let descendingMovies = this.state.movies.sort((a, b) => a.year - b.year)
    this.setState({ movies: descendingMovies })
}
handleRate = () => {
    let rateMovies = this.state.movies.sort((a, b) => a.year - b.year)
    this.setState({ movies: rateMovies })
}
handleAtoZ = () => {
    let AtoZMovies = this.state.movies.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
        return 0
    })
    this.setState({ movies: AtoZMovies })
}

handleZtoA = () => {
    let AtoZMovies = this.state.movies.sort((a, b) => {
        if (b.title < a.title)
            return -1;
        if (b.title > a.title)
            return 1;
        return 0
    })
    this.setState({ movies: ZtoAMovies })
}
render(){
    const Moviees = this.state.movies.map(movie =>
        <MovieItem />)
    return (
        <div>
            <button onClick={this.handleAscending}>Sort ascending</button>
            <button onClick={this.handleDescending}>Sort descending</button>
            <button onClick={this.handleRate}>Sort by rate</button>
            <button onClick={this.handleAtoZ}>Alphabetisch</button>
            <button onClick={this.handleZtoA}>reverse Alphabetisch</button>
        </div>
        <section>{Movies}</section>
    })
}

export default Movies;
