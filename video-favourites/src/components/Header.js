import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onClickAdd }) => (
  <div className='header-content'>
    <div className='header-title-text'>My favourite videos</div>
    <button type='button' onClick={onClickAdd} className='header-button-add'>
      Add Video
    </button>
  </div>
);

Header.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default React.memo(Header);
