const API_KEY = "aea59c1ad01a7ca2914786bfe6ea260e";
export default {

    fetchTrending  : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}