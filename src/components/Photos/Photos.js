import React, { useEffect, useState } from 'react';
import './Photos.css';

const data = [
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F372819.jpg&f=1&nofb=1',
    id: 1,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oY_y8fAnT9S3dBv9NaZE4wHaE7%26pid%3DApi&f=1',
    id: 2,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F372581.jpg&f=1&nofb=1',
    id: 3,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.rbth.com%2Frbthmedia%2Fimages%2F2020.10%2Farticle%2F5f9c121585600a79605e68d7.jpg&f=1&nofb=1',
    id: 4,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frussiatrek.org%2Fblog%2Fwp-content%2Fuploads%2F2016%2F01%2Ffestival-of-nature-undisturbed-russia-1.jpg&f=1&nofb=1',
    id: 5,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oUtp_bU_jhwAVpWuQmS5XwHaFj%26pid%3DApi&f=1',
    id: 6,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WzpvhRi7-Q1L3cwpTCe31QHaEK%26pid%3DApi&f=1',
    id: 7,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7BhXh2jH6ss%2Fmaxresdefault.jpg&f=1&nofb=1',
    id: 8,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DlmCIHYkj_N_gbLNAOWA8AHaE8%26pid%3DApi&f=1',
    id: 9,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F372596.jpg&f=1&nofb=1',
    id: 10,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8aYgNHd-FwSqaX099wsoLwHaEK%26pid%3DApi&f=1',
    id: 11,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F991732-russia-mountains-shrubs-clouds-kamchatka-nature.jpg&f=1&nofb=1',
    id: 12,
  },
  {
    link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F991796-russia-scenery-mountains-grass-kamchatka-nature.jpg&f=1&nofb=1',
    id: 13,
  },
];

const Photos = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <section className='photos'>
      {cards.map((item) => {
        return (
          <img alt='image' key={item.id} src={item.link} className='image' />
        );
      })}
    </section>
  );
};

export default Photos;
