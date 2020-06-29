const FAKE_DELAY = 2000;
const FAKE_DATA = [
  {
    id: 0,
    title:
      '¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo',
    url: 'https://www.youtube.com/watch?v=rpMQd2DazTc',
    embed: 'https://www.youtube.com/embed/rpMQd2DazTc',
    thumbnail: 'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
  },
  {
    id: 1,
    title: 'Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘',
    url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
    embed: 'https://www.youtube.com/embed/v2IjMrpZog4',
    thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Comunicación entre microservicios: 🕋 Event-Driven Architecture',
    url: 'https://www.youtube.com/watch?v=V4mjxJ5czog',
    embed: 'https://www.youtube.com/embed/V4mjxJ5czog',
    thumbnail: 'https://img.youtube.com/vi/V4mjxJ5czog/maxresdefault.jpg',
  },
  {
    id: 3,
    title: '🤔 Cuándo usar #interfaces… y cuándo EVITARLAS',
    url: 'https://www.youtube.com/watch?v=uP1CoHtjALg',
    embed: 'https://www.youtube.com/embed/uP1CoHtjALg',
    thumbnail: 'https://img.youtube.com/vi/uP1CoHtjALg/maxresdefault.jpg',
  },
  {
    id: 4,
    title:
      'Qué es la "Composición sobre herencia" 👨‍👩‍👧‍👦🚔 (#CompositionOverInheritance)',
    url: 'https://www.youtube.com/watch?v=OyTPDFyGWRc',
    embed: 'https://www.youtube.com/embed/OyTPDFyGWRc',
    thumbnail: 'https://img.youtube.com/vi/OyTPDFyGWRc/maxresdefault.jpg',
  },
  {
    id: 5,
    title:
      'ReactJS vs VueJS vs Angular 6 ⚡️| 1/5 Qué aporta un framework y qué es un componente',
    url: 'https://www.youtube.com/watch?v=lttZCIin4HM',
    embed: 'https://www.youtube.com/embed/lttZCIin4HM',
    thumbnail: 'https://img.youtube.com/vi/lttZCIin4HM/maxresdefault.jpg',
  },
];

export const addVideo = newVideo =>
  new Promise(resolve => {
    newVideo.id = FAKE_DATA.length;
    FAKE_DATA.push(newVideo);
    setTimeout(() => resolve({ ok: true }), FAKE_DELAY);
  });

export const getVideos = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(FAKE_DATA), FAKE_DELAY);
  });

const getDescription = async () => {
  try {
    const response = await fetch(
      'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1'
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getVideoDetail = ({ idVideo }) =>
  new Promise((resolve, reject) => {
    const video = FAKE_DATA.find(video => +video.id === +idVideo);
    setTimeout(
      () =>
        !video
          ? reject({ message: `Video with id ${idVideo} not found.` })
          : video.description
          ? resolve(video)
          : getDescription().then(description => {
              video.description = description.join();
              return resolve(video);
            }),
      FAKE_DELAY
    );
  });
