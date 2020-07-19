'use strict';
let numberOfFilms ;
function start() {
    numberOfFilms = +prompt("how many movies hav you watched", "10");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many movies hav you watched", "10");
    }
}
start();
let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const lastMovie = prompt("One of the las movie you had seen", "London field");
        const movieRate = prompt("Please, ate the movie", "10");
            if(lastMovie != null && movieRate != null && lastMovie != "" && movieRate != "" && lastMovie.length < 50) {
                persolanMovieDB.movies[lastMovie] = movieRate;
            } else {
                i--;
            }
        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(persolanMovieDB.count < 10) {
        alert("you have seen lack of movies")
    } else if(persolanMovieDB.count >= 10 && persolanMovieDB.count <= 30) {
        alert("you are tipical viewer");
    } else if(persolanMovieDB.count > 30) {
        alert("you are huge fan");
    } else {
    alert("some error"); 
    }
}
detectPersonalLevel();

function showMyDB() {
    if(persolanMovieDB.private == false) {
        console.log(persolanMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    let count = 1;
    for(let i = 0; i <= 2; i++) {
       let answer =  prompt(`Your favorite movie genres number ${count}`, ``);
        persolanMovieDB.genres[count-1] = answer;
        count++;
    }
}




console.log(persolanMovieDB);