import { useState } from 'react';
import imageCard from 'assets/image/noimage.jpg';
import PropTypes from 'prop-types';
import './styles.scss';

export const CardItem = (props) => {
  const { data, titleColor } = props;
  const [imgSrc, setImgSrc] = useState(data.image ? data.image.original : '');

  const limitSummaryLength = 300;
  return (
    <>
      <div className="container-card">
        <div className="container-image">
          <img
            className="w-full h-96 object-cover rounded-lg"
            src={imgSrc}
            onError={() => setImgSrc(imageCard)}
            alt=""
          />
        </div>
        <div className="relative pt-2 mt-2">
          <h2 className={['font-nova-flat text-2xl drop-shadow-title', titleColor].join(' ')}>{data.name}</h2>
        </div>
        {data.summary && (
          <div className="relative pt-1">
            <div
              className="text-summary text-md text-gray-600 drop-shadow-summary"
              dangerouslySetInnerHTML={{
                __html:
                  data.summary.length < limitSummaryLength ? data.summary : `${data.summary.substring(0, 300)}...`,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

CardItem.propTypes = {
  data: PropTypes.object,
  titleColor: PropTypes.string,
};
