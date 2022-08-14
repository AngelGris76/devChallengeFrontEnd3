import FiltersIcon from './icons/FiltersIcon';
import SearchIcon from './icons/SearchIcon';
import style from './MobileSearchButton.module.css';

const MobileSearchButton = ({ ...props }) => {
  return (
    <div className={style.buttonsContainer}>
      <button className={style.mobileButton} {...props} data-option='where'>
        <span className={style.searchIcon}>
          <SearchIcon />
        </span>
        <span className={style.textContainer}>
          <span className={style.title}>¿A dónde vas?</span>
          <span className={style.detailContainer}>
            <span className={style.detailText}>A cualquier lugar</span>
            <span className={style.detailText}>
              semana (en cualquier fecha)
            </span>
            <span className={style.detailText}>¿Cuántos?</span>
          </span>
        </span>
      </button>
      <button className={style.filtersButton} {...props} data-option='filters'>
        {<FiltersIcon width='1.5rem' />}
      </button>
    </div>
  );
};

export default MobileSearchButton;
