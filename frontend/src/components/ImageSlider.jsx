import useImageSlide from '../hooks/useImageSlide';
import style from './ImageSlider.module.css';

const ImageSlider = ({ images, isHover }) => {
  const {
    actualImage,
    imagesContainer,
    isFirstImage,
    isLastImage,
    incImage,
    decImage,
    handleTouchStart,
    handleTouchEnd,
  } = useImageSlide(images);

  const imagesToShow = images.map((image, index) => (
    <img key={index} src={image} alt='' className={style.image} />
  ));

  const pointsToShow = images.map((image, index) => (
    <span
      key={index}
      className={`${style.point} ${
        index === actualImage * -1 ? style.pointActive : ''
      }`}
    ></span>
  ));

  return (
    <div className={style.container}>
      <div
        className={style.imageList}
        ref={imagesContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imagesToShow}
      </div>
      {isHover && !isFirstImage && (
        <button className={style.slideButtonLeft} onClick={incImage}>
          {'<'}
        </button>
      )}
      {isHover && !isLastImage && (
        <button className={style.slideButtonRight} onClick={decImage}>
          {'>'}
        </button>
      )}
      <div className={style.pointsContainer}>{pointsToShow}</div>
    </div>
  );
};

export default ImageSlider;
