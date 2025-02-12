"use strict";
// We want to display a list of movies to the user via the DOM
let movies = [
    "Upload - Sci - Fi",
    "Interstellar",
    "Brooklyn 99",
    "The Recruit",
    "LouderMilk"
];
function createMoviePost(movie) {
    let container = document.querySelector(".container");
    let newMoviePost = document.createElement("P");
    newMoviePost.innerHTML = movie;
    console.log(container);
    console.log(newMoviePost);
    container === null || container === void 0 ? void 0 : container.appendChild(newMoviePost);
}
document.addEventListener('DOMContentLoaded', () => {
    let message = "Hello from typescript!";
    movies.forEach(createMoviePost);
    // movies.forEach(movie => {
    //     createMoviePost(movie)
    // })
    console.log(message);
});
//# sourceMappingURL=app.js.map