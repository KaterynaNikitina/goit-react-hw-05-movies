import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a49cf95afbdef117186930dbe47ce370';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    }
});

export const getTrending = async () => {
    const response = await api.get('trending/movie/day');
    return response.data.results;
}

export const getMovieBySearch = async (searchMovie) => {
    const options = {
        params: { query: searchMovie }
    }
    const response = await api.get('search/movie?', options);
    return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await api.get(`movie/${movieId}`);
    return response.data;
}

export const getMovieReview = async (movieId) => {
    const response = await api.get(`movie/${movieId}/reviews`);
    return response.data.results;
}

export const getMovieCast = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}
