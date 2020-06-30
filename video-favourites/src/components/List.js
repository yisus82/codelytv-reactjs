import React, { useState, useEffect, useCallback } from 'react';
import { getVideos } from '../api';
import Loading from './Loading';
import Header from './Header';
import Item from './Item';
import Add from './Add';

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

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
    fetchData();
  }, []);

  const handleAdd = useCallback(event => {
    event.preventDefault();
    setShowAdd(true);
  }, []);

  const handleCloseAdd = useCallback(
    reload => () => {
      setShowAdd(false);
      if (reload) {
        setIsLoading(true);
        getVideos()
          .then(data => setVideos(data))
          .catch(error => setError(error))
          .finally(setIsLoading(false));
      }
    },
    []
  );

  if (error) {
    return <p className='error'>{error.message}</p>;
  }

  if (isLoading) {
    return <Loading message='Loading videos...' />;
  }

  return (
    <>
      <Header onClickAdd={handleAdd} />
      <div className='container'>
        <div className='grid-container'>
          {videos.length === 0 && <span>No videos found</span>}
          {videos.map(video => (
            <Item key={`${video.id}`} data={video} />
          ))}
        </div>
      </div>
      {showAdd && <Add onClose={handleCloseAdd} />}
    </>
  );
};

export default List;
