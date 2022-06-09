import {
  _setLoading,
  _setMovieFilteredList,
  _setSearchKeywordsAdd,
  _setSearchKeywordsDel,
} from '../services/store/actions/movieAction';
import { getStore } from '../services';
import * as movieApi from '../apis/movieApi';

export default function useMovieFunctions() {
  const setMovieFilteredList = (searchKeyword) => {
    getStore().dispatch(_setLoading(true));
    if (Array.isArray(searchKeyword)) {
      Promise.all(searchKeyword.map((keyword) => movieApi.getMovieList(keyword)))
        .then((res) => {
          const obj = {};
          res.forEach((itemArr) => {
            itemArr.data.forEach((item) => {
              obj[item.show.id] = item;
            });
          });
          getStore().dispatch(_setMovieFilteredList(Object.values(obj)));
        })
        .catch((e) => console.log(e.message));
      return;
    }
    movieApi
      .getMovieList(searchKeyword)
      .then((res) => {
        getStore().dispatch(_setMovieFilteredList(res.data));
      })
      .catch((e) => console.log(e.message));
  };

  const setSearchKeywordsAdd = (keyword) => {
    if (!keyword) return;
    getStore().dispatch(_setSearchKeywordsAdd(keyword));
  };

  const setSearchKeywordsDel = (keyword) => {
    if (!keyword) return;
    getStore().dispatch(_setSearchKeywordsDel(keyword));
  };

  const toReturn = {
    setMovieFilteredList,
    setSearchKeywordsAdd,
    setSearchKeywordsDel,
  };
  return toReturn;
}
