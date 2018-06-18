import React from 'react';
import Movie from '../Movie/Movie';
import movies from '../movies';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import './MoviesList.css';


class MoviesList extends React.Component {

    constructor() {
        super();
        
        this.state = {
            displayedMovies: movies,
            moviesList: [],
            isFormOpen: false
        }
    }

    onAddMovie = (el) => {
        movies.unshift(el)
        console.log(movies)
        this.setState({
            displayedMovies: movies //[el, ...this.state.displayedMovies]
            // moviesList: [el, ...this.state.displayedMovies]
        })

        console.log(this.state.moviesList)
    }

    onDeleteMovie = (id) => {
        for (var i = movies.length - 1; i >= 0; --i) {
            if (movies[i].id === id) {
                movies.splice(i, 1);
            }
        }
        this.setState({
            //displayedMovies: this.state.displayedMovies.filter(movie => movie.id !== id)
            //  moviesList: this.state.displayedMovies
            displayedMovies: movies
        })
    }

    handleSearchByName = (event) => {
        let filteredList = this.state.displayedMovies;

        let searchName = event.target.value.toLowerCase();
        filteredList = movies.filter(el => {
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchName) !== -1;
        })
        this.setState({
            displayedMovies: filteredList
        })

    }
    handleSearchByGenre = (event) => {
        let filteredList = this.state.displayedMovies;

        let searchGenre = event.target.value.toLowerCase();
        filteredList = movies.filter(el => {
            let searchValue = el.genre.toLocaleString().toLowerCase();
            return searchValue.indexOf(searchGenre) !== -1;
        })
        this.setState({
            displayedMovies: filteredList
        })
    }


    componentWillMount() {
        this.setState({ moviesList: this.state.displayedMovies })
    }

    toggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    render() {
        const movie = this.state.displayedMovies.map(movie => <Movie {...movie} key={movie.id} onDeleteClick={this.onDeleteMovie} />);
        return (
            <div>
                <input type="text" className="searchInput" placeholder="Search by title..." onChange={this.handleSearchByName} />
                <input type="text" className="searchInput" placeholder="Search by genre..." onChange={this.handleSearchByGenre} />
                <button className="openForm_btn" onClick={this.toggleForm}>{this.state.isFormOpen ? 'Hide form' : 'Add movie'}</button>
                <AddMovieForm onFormSubmit={this.onAddMovie} isOpen={this.state.isFormOpen} />
                <div className="MiviesList">
                    {movie}
                </div>
            </div>

        );
    }
}

export default MoviesList;