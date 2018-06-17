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
            isFormOpen: false
        }
    }
    onAddMovie = (el) => {
        console.log(this.state.displayedMovies)
        this.setState({
            displayedMovies: [el, ...this.state.displayedMovies]
        })
    }

    onDeleteMovie = (id) => {
        console.log(id)
        this.setState({
            displayedMovies: this.state.displayedMovies.filter(movie => movie.id !== id)
        })
    }
    
    handleSearchByName = (event) => {
        let searchName = event.target.value.toLowerCase();
        let displayedMovies = movies.filter(el => {
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchName) !== -1;
        })
        this.setState({
            displayedMovies: displayedMovies
        })
    }
    handleSearchByGenre = (event) => {
        let searchGenre = event.target.value.toLowerCase();
        let displayedMovies = movies.filter(el => {
            let searchValue = el.genre.toLocaleString().toLowerCase();
            return searchValue.indexOf(searchGenre) !== -1;
        })
        this.setState({
            displayedMovies: displayedMovies
        })
    }

  

    toggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    render() {
        const movie = this.state.displayedMovies.map(movie => <Movie {...movie} key={movie.id} onDeleteClick={this.onDeleteMovie}/>);
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