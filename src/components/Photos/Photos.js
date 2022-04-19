import React, { useEffect, useState } from 'react';
import { api } from 'utils/Api';
import './Photos.css';

const Photos = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getPhotos().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <section className='photos'>
      {cards.map((item) => {
        return (
          <img
            key={item.id}
            src={item.url}
            alt={item.title}
            className='image'
          />
        );
      })}
    </section>
  );
};

export default Photos;
