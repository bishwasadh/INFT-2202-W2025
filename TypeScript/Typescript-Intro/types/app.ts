
//we want to display a list of movies to the user via DOM

let movies: string[] = [
    "Upload-Sci-Fi",
    "Interstellar-Sci-Fi",
    "Brooklyn 99",
    "The Recruit",
    "LouderMilk"
]

function createMoviePost(movie: string) {
    let container = document.querySelector('.container')
    let newMoviePost = document.createElement('P')
    newMoviePost.innerHTML = movie
    console.log(container)
    console.log(newMoviePost)
    container?.appendChild(newMoviePost)

}


document.addEventListener('DOMContentLoaded', () => {
    let message: string = "Hello guys from TypeScript!"
    movies.forEach(createMoviePost)
        // movies.forEach(movie => {            
        // createMoviesPost(movie)
    })
    console.log(message)

})