import { useState } from 'react';
import './Places.css';
import { motion } from 'framer-motion';

const data = [
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R_F9EuhUWJB081qHXNwMHQHaE8%26pid%3DApi&f=1',
    title: 'Куршская коса',
    link: 'park-kosa.ru',
    text1:
      'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
    text2:
      'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Floveopium.ru%2Fcontent%2F2013%2F10%2Fosen%2F10big.jpg&f=1&nofb=1',
    title: 'Кольский',
    link: 'National Geographic',
    text1:
      'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
    text2:
      'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uX2CTHWlU9TrFtJuZcE5wAHaE7%26pid%3DApi&f=1',
    title: 'Алтай',
    link: 'Facebook',
    text1:
      'Алтай — одно из красивейших мест в России.В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.',
    text2:
      'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hotels.ru%2Fcontent%2Fimages%2Farticles%2Fbaikal_7.jpg&f=1&nofb=1',
    title: 'Зимний Байкал',
    link: 'https://vk.com/baikalmile',
    text1:
      'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.',
    text2:
      'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.',
  },
  {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flp-cms-production.imgix.net%2F2019-06%2F554383637_full.jpg%3Ffit%3Dcrop%26q%3D40%26sharp%3D10%26vib%3D20%26auto%3Dformat%26ixlib%3Dreact-8.6.4&f=1&nofb=1',
    title: 'Карелия',
    link: 'http://vodlozero.ru/',
    text1: '',
    text2:
      'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
  },
];

const Places = () => {
  return (
    <section className='places'>
      {data.map((item, index) => {
        return (
          <Item
            id={index}
            key={index}
            title={item.title}
            url={item.link}
            image={item.url}
            text1={item.text1}
            text2={item.text2}
          />
        );
      })}
    </section>
  );
};

export default Places;

const left = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const right = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Item = ({ title, url, image, text1, text2 = null }) => {
  return (
    <div className='card'>
      <motion.h2
        className='title'
        variants={left}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
      >
        {title}
      </motion.h2>
      <motion.img
        initial='hidden'
        whileInView='visible'
        variants={left}
        viewport={{ amount: 0.4, once: true }}
        src={image}
        alt={title}
        className='image'
      />
      <motion.div
        className='url-container'
        variants={right}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
      >
        <p className='url-text'>URL</p>
        <a href='#' className='url'>
          {url}
        </a>
      </motion.div>
      {text2 ? (
        <motion.div
          className='text-container'
          variants={right}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.4, once: true }}
        >
          <p className='text'>{text1}</p> <p className='text'>{text2}</p>
        </motion.div>
      ) : (
        <motion.div
          className='text-container'
          variants={right}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.4, once: true }}
        >
          <p className='text'>{text1}</p>
        </motion.div>
      )}
    </div>
  );
};
