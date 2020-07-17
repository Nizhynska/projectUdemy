'use strict';
let numberOfFilms = +prompt("how many movies hav you watched", "10");
let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
for(let i = 0; i < 2; i++) {
    const lastMovie = prompt("One of the las movie you had seen", "London field");
    const movieRate = prompt("Please, ate the movie", "10");
        if(lastMovie != null && movieRate != null && lastMovie != "" && movieRate != "" && lastMovie.length < 50) {
            persolanMovieDB.movies[lastMovie] = movieRate;
        } else {
            i--;
        }
    
}
if(numberOfFilms < 10) {
    alert("you have seen lack of movies")
} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("you are tipical viewer");
} else if(numberOfFilms > 30) {
    alert("you are huge fan");
} else {
alert("some error"); 
}




console.log(persolanMovieDB);