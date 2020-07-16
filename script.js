let numberOfFilms = prompt("how many movies hav you watched", "10");
let persolanMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function questions () {
    count = 1;
    while(count != 3) {
        let lastMovie = prompt("One of the las movie you had seen", "London field");
        let movieRate = prompt("Please, ate the movie", "10");
        count++;
    }
}
questions();
