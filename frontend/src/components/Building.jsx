import ImageSlider from './ImageSlider';
import style from './Building.module.css';
import { useState } from 'react';

const Building = ({ location, price, images, stars, disponibility: free }) => {
  const [hover, setHover] = useState(false);
  return (
    <article
      className={style.article}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        <h2>{location}</h2>
        <span>{stars}</span>
      </div>
      <p>{`${free.startTime} / ${free.endTime}`}</p>
      <p>${price} / noche</p>
      <ImageSlider images={images} isHover={hover} />
    </article>
  );
};

export default Building;
