import { MOVIE_LOADING, MOVIE_LIST_SET, MOVIE_SEARCH_KEYWORD_ADD, MOVIE_SEARCH_KEYWORD_DEL } from '../types';

export const _setMovieFilteredList = (data) => {
  return {
    type: MOVIE_LIST_SET,
    payload: data,
  };
};

export const _setLoading = (data) => {
  return {
    type: MOVIE_LOADING,
    payload: data,
  };
};

export const _setSearchKeywordsAdd = (data) => {
  return {
    type: MOVIE_SEARCH_KEYWORD_ADD,
    payload: data,
  };
};

export const _setSearchKeywordsDel = (data) => {
  return {
    type: MOVIE_SEARCH_KEYWORD_DEL,
    payload: data,
  };
};
