import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ message = 'Loading...' }) => {
  return <div className='loader'>{message}</div>;
};

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loading;
