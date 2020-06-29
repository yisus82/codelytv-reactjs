import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Header from './Header';
import Item from './Item';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setVideos([
        {
          id: 0,
          title:
            '¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo',
          url: 'https://www.youtube.com/watch?v=rpMQd2DazTc',
          thumbnail: 'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
        },
        {
          id: 1,
          title:
            'Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘',
          url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
          thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
        },
      ]);
    }, 2000);
  }, []);

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
