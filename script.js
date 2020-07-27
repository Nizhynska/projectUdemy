'use strict';

let persolanMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        numberOfFilms = +prompt("how many movies hav you watched", "10");
        while (persolanMovieDB.count == "" || persolanMovieDB.count == null || isNaN(persolanMovieDB.count)) {
            persolanMovieDB.count = +prompt("how many movies hav you watched", "10");
        }
    },
    rememberMyFilms: function () {
        for(let i = 0; i < 2; i++) {
            const lastMovie = prompt("One of the las movie you had seen", "London field");
            const movieRate = prompt("Please, ate the movie", "10");
                if(lastMovie != null && movieRate != null && lastMovie != "" && movieRate != "" && lastMovie.length < 50) {
                    persolanMovieDB.movies[lastMovie] = movieRate;
                } else {
                    i--;
                }
            
        }
    },
    detectPersonalLevel: function () {
        if(persolanMovieDB.count < 10) {
            alert("you have seen lack of movies")
        } else if(persolanMovieDB.count >= 10 && persolanMovieDB.count <= 30) {
            alert("you are tipical viewer");
        } else if(persolanMovieDB.count > 30) {
            alert("you are huge fan");
        } else {
        alert("some error"); 
        }
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(persolanMovieDB);
        }
    },
    writeYourGenres: function () {
        let count = 1;
        for(let i = 0; i <= 2; i++) {
           let answer =  prompt(`Your favorite movie genres number ${count}`, ``);
           if(answer == null || "") {
               console.log("you enter not correct data");
               i--;
           } else {
            persolanMovieDB.genres[count-1] = answer;
            count++;
           }
           persolanMovieDB.genres.forEach((item, i) => {
               console.log(`Your favorite movie genres number ${i+1} this - ${item}`);
           });
        }
    },
    toggleVisibleMyDB: function() {
        if(persolanMovieDB.private) {
            persolanMovieDB.private = true;
        } else persolanMovieDB.private = false;
    }
};







console.log(persolanMovieDB);