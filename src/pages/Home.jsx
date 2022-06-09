import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useMovieFunctions from 'hooks/useMovieFunctions';
import { SearchBox, FilterItem, CardItem } from 'components';

export const HomePage = () => {
  const [maxShowCount, setMaxShowCount] = useState(3);
  const [randColors, setRandColors] = useState([]);

  const colorArr = [
    'text-red-600',
    'text-yellow-500',
    'text-green-600',
    'text-blue-600',
    'text-indigo-700',
    'text-purple-700',
    'text-pink-700',
  ];

  const movieFunctions = useMovieFunctions();
  const movieList = useSelector((state) => state.movies.filteredList);
  const isLoading = useSelector((state) => state.movies.loading);
  const filterKeywords = useSelector((state) => state.movies.filterKeywords);

  const fetchList = useCallback(() => {
    movieFunctions.setMovieFilteredList(filterKeywords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKeywords]);

  useEffect(() => {
    fetchList();
    setMaxShowCount(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKeywords.length]);

  useEffect(() => {
    const randColors = movieList.map((i) => colorArr[Math.floor(Math.random() * colorArr.length)]);
    setRandColors(randColors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList.length]);

  const handleClickShowMore = () => {
    const movieLength = movieList.length;
    setMaxShowCount(maxShowCount + 3 > movieLength ? movieLength : maxShowCount + 3);
  };

  return (
    <>
      <div className="container md:px-10 mx-auto m-20">
        <div className="px-5 mx-auto md:w-3/5">
          <SearchBox />
          <div className="flex mt-4">
            {filterKeywords &&
              filterKeywords.length > 0 &&
              filterKeywords.map((keyword) => {
                return <FilterItem key={keyword} keyword={keyword} />;
              })}
          </div>
        </div>

        {isLoading ? (
          <>Loading</>
        ) : (
          movieList &&
          movieList.length > 0 && (
            <div className="px-2 mt-8">
              <div className="w-full grid-cols-2 sm:grid lg:grid-cols-3 gap-x-8">
                {movieList.slice(0, maxShowCount).map((item, index) => {
                  return <CardItem key={item.show.id} data={item.show} titleColor={randColors[index]} />;
                })}
              </div>

              <div className="relative flex justify-center border-t-2 border-grey-300 mt-4 pt-6">
                <p className="absolute left-0 text-gray-400">{movieList.length} results</p>
                {maxShowCount < movieList.length && (
                  <button
                    type="button"
                    className="border border-gray-300 bg-gray-100 text-gray-500 rounded-md px-4 py-2 transition duration-500 ease select-none hover:underline hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    onClick={handleClickShowMore}
                  >
                    Show me more results
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
