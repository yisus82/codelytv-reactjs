import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ data }) => (
  <Link className='grid-item-link' to={`/videos/${data.id}`}>
    <div className='grid-item'>
      <img className='preview-image' src={data.thumbnail} alt={data.title} />
      <div className='preview-title'>{data.title}</div>
    </div>
  </Link>
);

Item.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default React.memo(Item);
