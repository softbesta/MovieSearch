import { MOVIE_LOADING, MOVIE_LIST_SET, MOVIE_SEARCH_KEYWORD_ADD, MOVIE_SEARCH_KEYWORD_DEL } from '../types';

const initialState = {
  filteredList: [],
  filterKeywords: [],
  loading: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_LIST_SET:
      return {
        ...state,
        filteredList: action.payload,
        loading: false,
      };
    case MOVIE_SEARCH_KEYWORD_ADD:
      if (state.filterKeywords && state.filterKeywords.includes(action.payload)) return state;
      return {
        ...state,
        filterKeywords: [...state.filterKeywords, action.payload],
        loading: false,
      };
    case MOVIE_SEARCH_KEYWORD_DEL:
      return {
        ...state,
        filterKeywords: state.filterKeywords.filter((item) => item !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
}
