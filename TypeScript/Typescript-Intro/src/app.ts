import { movie } from '.types/movie.interface'
import {movies} fromm './data/data'

class MovieLibrary {
    private movies: Movie[] = []
    private container.HTMLElement;


    constructor(movies : Movie[]) {
        //
        this.movies = movies

        const movieList  = document .getElementById('movie-list')
        if (!movieList) {
            throw new Error('Movie list con not found')
        }
        this.container = movieList
    }

    private createNewMovieCard(movie: Movie):
       let actorList = movies.actors.map(actor => 
       '<li>${actor.firstName} ${actor.lastName}</li>')


        card.innerHTML = `
            <h2>${movie.title}</h2>
            <div class-"movie-info">
                <p>Director: ${movie.director}</p>
                <p>Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
                <ul>${actorsList.}</ul>
            </div>
        `
        return card

    }

    public displayMovies(): void {
        this.movies.forEach(movie => {
            const movieCard = this.createNewMovieCard(movie)
            this.container.appendChild(movieCard)
        })
    }      



}


document.addEventListener('DOMContentLoaded', () => {
    let message: string = "Hello from typescript!"
    movies.forEach(createMoviePost)
    // movies.forEach(movie => {
    //     createMoviePost(movie)
    // })
    console.log(message)
})





