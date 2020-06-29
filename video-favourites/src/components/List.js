import React, { useState, useEffect } from 'react';
import { getVideos } from '../api';
import Loading from './Loading';
import Header from './Header';
import Item from './Item';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const videos = await getVideos();
      setVideos(videos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (error) {
    return <p className='error'>{error.message}</p>;
  }

  if (isLoading) {
    return <Loading message='Loading...' />;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='grid-container'>
          {videos.length === 0 && <span>No videos found</span>}
          {videos.map(video => (
            <Item key={`${video.id}`} data={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
