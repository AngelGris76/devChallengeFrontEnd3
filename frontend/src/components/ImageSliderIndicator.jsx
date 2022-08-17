import style from './ImageSliderIndicator.module.css';

const ImageSliderIndicator = ({ actualImage, total }) => {
  const imageIndicator = [];

  for (let index = 0; index < total; index++) {
    imageIndicator.push(
      <span
        className={`${style.indicator} ${
          index === actualImage * -1 ? style.activeIndicator : ''
        }`}
      ></span>
    );
  }

  return <div className={style.indicatorContainer}>{imageIndicator}</div>;
};

export default ImageSliderIndicator;
