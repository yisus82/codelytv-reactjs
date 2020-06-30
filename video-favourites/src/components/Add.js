import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import { addVideo } from '../api';

const Add = ({ onClose }) => {
  const [state, setState] = useState({
    hasError: false,
    showSending: false,
    title: '',
    url: '',
    description: '',
  });

  const parseYoutubeUrl = url => {
    const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
    return match && match[2];
  };

  const handleChange = field => event => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const isFormValid = () =>
    state.title.length > 0 &&
    state.url.length > 0 &&
    state.description.length > 2 &&
    parseYoutubeUrl(state.url);

  const handleSubmit = event => {
    event.preventDefault();
    if (isFormValid()) {
      const token = parseYoutubeUrl(state.url);
      setState({ ...state, showSending: true, hasError: false });
      addVideo({
        title: state.title,
        description: state.description,
        url: state.url,
        thumbnail: `https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
        embed: `https://www.youtube.com/embed/${token}`,
      }).then(onClose(true));
    } else {
      setState({
        ...state,
        hasError: true,
      });
    }
  };

  const { showSending, title, url, description, hasError } = state;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span
          className='close'
          onClick={onClose(false)}
          role='img'
          aria-label='Close'
        >
          ❌
        </span>
        <h2>Add a video</h2>
        {showSending && (
          <span className='success'>
            <Typed strings={['Sending video info...']} typeSpeed={30} loop />
          </span>
        )}
        {hasError && (
          <div className='error'>
            Some fields are empty or contain wrong values.
          </div>
        )}
        <form>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={handleChange('title')}
            minLength='3'
            maxLength='200'
            required
          />
          <label>Url</label>
          <input
            type='text'
            value={url}
            onChange={handleChange('url')}
            minLength='3'
            maxLength='200'
            required
          />
          <label>Description</label>
          <textarea
            value={description}
            onChange={handleChange('description')}
            required
          />
          <button type='submit' onClick={handleSubmit} disabled={showSending}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Add.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Add;
