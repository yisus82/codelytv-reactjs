import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ data }) => (
  <div className='grid-item'>
    <img className='preview-image' src={data.thumbnail} alt={data.title} />
    <div className='preview-title'>{data.title}</div>
  </div>
);

Item.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Item;
