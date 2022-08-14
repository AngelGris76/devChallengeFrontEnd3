import { useState } from 'react';
import PlaceButton from './PlaceButton/PlaceButton';
import PLACE_TYPE from '../constants/placeType';
import style from './PlaceFiltersButtons.module.css';
import usePlaceFiltersSlide from '../hooks/usePlaceFiltersSlide';

const PlaceFiltersButtons = () => {
  const [pressedButton, setPressedButton] = useState('');
  const {
    placeFiltersButtons,
    isInitial,
    isFinal,
    handleLeftScroll,
    handleRightScroll,
  } = usePlaceFiltersSlide();

  const renderedButton = Object.values(PLACE_TYPE).map(({ text, icon }) => (
    <PlaceButton
      key={text}
      text={text}
      icon={icon}
      pressed={pressedButton}
      onClick={(newValue) => {
        setPressedButton(newValue);
      }}
    />
  ));

  return (
    <div className={style.placeButtonsContainer}>
      <div className={style.placeFiltersButtons} ref={placeFiltersButtons}>
        {renderedButton}
      </div>
      {!isInitial && (
        <button className={style.leftButton} onClick={handleRightScroll}>
          {`<`}
        </button>
      )}
      {!isFinal && (
        <button className={style.rightButton} onClick={handleLeftScroll}>
          {`>`}
        </button>
      )}
    </div>
  );
};

export default PlaceFiltersButtons;
