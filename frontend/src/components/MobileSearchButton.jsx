import SearchIcon from './icons/SearchIcon';
import style from './MobileSearchButton.module.css';

const MobileSearchButton = ({ ...props }) => {
  return (
    <button className={style.mobileButton} {...props} data-option='where'>
      <span className={style.searchIcon}>
        <SearchIcon />
      </span>
      <span className={style.textContainer}>
        <span className={style.title}>¿A dónde vas?</span>
        <span className={style.detailContainer}>
          <span>A cualquier lugar</span>
          <span>semana (en cualquier fecha)</span>
          <span>¿Cuántos?</span>
        </span>
      </span>
      <span></span>
    </button>
  );
};

export default MobileSearchButton;
