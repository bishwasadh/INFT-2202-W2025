import {Rating } from '../enums/rating.enum';

interface Actor {
    id: number;
    firstName: string;
    lastName: string;
}



export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: string;
    actors?: Actor[];  

}

