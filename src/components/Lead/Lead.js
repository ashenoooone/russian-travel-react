import React from 'react';
import image from '../../images/lead__image.jpg';
import './Lead.css';

const Lead = () => {
  return (
    <section className='lead'>
      <h2 className='title'>
        Путешествия
        <br /> по России
      </h2>
      <p className='subtitle'>
        Настоящая страна не в выпусках <br /> новостей, а здесь.
      </p>
      <figure className='figcaption'>
        <img src={image} alt='карта' className='image' />
        <figcaption className='caption'>ваша полка — верхняя</figcaption>
      </figure>
    </section>
  );
};

export default Lead;
