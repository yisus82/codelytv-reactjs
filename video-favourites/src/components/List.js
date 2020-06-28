import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setVideos([{ id: 1 }, { id: 2 }, { id: 3 }]);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading message='Loading...' />;
  }

  return (
    <>
      <div className='container'>
        <div className='grid-container'>
          {videos.length === 0 && <span>No videos found</span>}
          {videos.map(video => (
            <span key={`${video.id}`}>#{video.id}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
