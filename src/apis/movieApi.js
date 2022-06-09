import axios from 'axios';
const baseUrl = 'https://api.tvmaze.com/search';

export const getMovieList = (searchKeyword) => {
  let query = searchKeyword;
  if (Array.isArray(searchKeyword)) {
    query = searchKeyword.join('&q=');
  }

  return axios.get(`${baseUrl}/shows?q=${query}`);
};
