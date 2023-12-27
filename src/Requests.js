const API_KEY = 'cd0fba5dd9893d722d7ce10dfb56718f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,

    requestDrama: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=drama&include_adult=false`,
    requestGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    requestMovies: (year, genre, title) => {
        let request = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        // if (language !== "") request += `&language=${language}`
        request += `&sort_by=popularity.desc`
        if (year !== "") request += `&primary_release_year=${year}`
        if (genre !== "") request += `&with_genres=${genre}`
        if (title !== "") request += `&query=${title}`
        return request
        // return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}
        // &language=${language}
        // &sort_by=popularity.desc
        // &primary_release_year=${year}
        // &with_genres=${genre}`;
    },
    requestID: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    requestTitle: (title) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`,

};

export default requests;