import { useState } from 'react';
import PlaceButton from './PlaceButton/PlaceButton';
import PLACE_TYPE from '../constants/placeType';
import style from './PlaceFiltersButtons.module.css';

const PlaceFiltersButtons = () => {
  const [pressedButton, setPressedButton] = useState('');

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

  return <div className={style.filtersButtons}>{renderedButton}</div>;
};

export default PlaceFiltersButtons;
