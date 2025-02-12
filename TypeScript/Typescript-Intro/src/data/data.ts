import {Movie} from '../types/movie.interface';
import {Rating} from '../enums/rating.enum';

// We want to display a list of movies to the user via the DOM
export let movies: Movie[] = [
    {
        id: 1,
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi",
        rating: "PG-13",
        actors: [
            {
                id:2,
                firstName: "Matthew",
                lastName: "McConaughey"
            }
        ]

    },
    {
        id: 2;
        title: "Moana 2",
        director: "Dana Ledoux Miller",
        year: 2024,
        genre: " Adventure",
        rating: "Rating.PG",
        actors: [
            {
                id: 3,
                firstName: "Dwayne",
                lastName: "Johnson"


            }
        ]

             
    }
]
