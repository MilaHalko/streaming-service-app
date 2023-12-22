const API_KEY = 'cd0fba5dd9893d722d7ce10dfb56718f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    requestDrama: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=drama&include_adult=false`,
};

export default requests;