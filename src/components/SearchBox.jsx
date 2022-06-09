import { useState } from 'react';
import { ReactComponent as IconSearch } from '../assets/image/search.svg';
import useMovieFunctions from 'hooks/useMovieFunctions';

export const SearchBox = () => {
  const [searchKey, setSearchKey] = useState('');
  const movieFunctions = useMovieFunctions();

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleAddClick = () => {
    movieFunctions.setSearchKeywordsAdd(searchKey);
    setSearchKey('');
  };

  return (
    <div className="flex justify-center mt-2 mx-auto text-gray-600">
      <div className="w-full relative flex items-center">
        <div className="absolute inset-y-0 flex items-center px-4 pointer-events-none">
          <IconSearch style={{ fill: 'rgb(75, 85, 99)' }} />
        </div>
        <input
          className="w-full border-2 border-gray-300 bg-white h-10 pl-10 pr-5 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          value={searchKey}
          onChange={handleInputChange}
          placeholder="Search"
        />
      </div>
      <button
        type="button"
        className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 ml-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        onClick={handleAddClick}
      >
        Search
      </button>
    </div>
  );
};
