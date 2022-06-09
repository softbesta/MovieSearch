import PropTypes from 'prop-types';
import useMovieFunctions from 'hooks/useMovieFunctions';
import './styles.scss';

export const FilterItem = ({ keyword }) => {
  const movieFunctions = useMovieFunctions();
  const handleDelClick = () => {
    movieFunctions.setSearchKeywordsDel(keyword);
  };

  return (
    <>
      <div className="container-item">
        <p className="mr-2 drop-shadow-summary text-black">{keyword}</p>
        <button onClick={handleDelClick}>X</button>
      </div>
    </>
  );
};

FilterItem.propTypes = {
  keyword: PropTypes.string,
};
