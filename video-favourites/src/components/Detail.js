import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetail } from '../api';
import Loading from './Loading';
import Video from './Video';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const { id: idVideo } = useParams();

  const fetchData = async idVideo => {
    try {
      const video = await getVideoDetail(idVideo);
      setVideo(video);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(idVideo);
  }, [idVideo]);

  if (error) {
    return <p className='error'>{error.message}</p>;
  }

  if (isLoading) {
    return <Loading message={`Loading video ${idVideo}...`} />;
  }

  return (
    <div className='detail-container'>
      <Video title={video.title} embed={video.embed} />
      <div className='detail-summary'>
        <h2 className='detail-title'>{video.title}</h2>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default Detail;
