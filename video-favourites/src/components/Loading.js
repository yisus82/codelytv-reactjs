import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';

const Loading = ({ message = 'Loading...', speed = 30 }) => (
  <div className='loader'>
    <Typed strings={[message]} typeSpeed={speed} loop />
  </div>
);

Loading.propTypes = {
  message: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

export default Loading;
