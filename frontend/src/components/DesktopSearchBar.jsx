import SearchIcon from './icons/SearchIcon';
import style from './DesktopSearchBar.module.css';

const DesktopSearchBar = ({ ...props }) => {
  return (
    <div className={style.desktopSearchBar}>
      <div className={style.buttonsContainer}>
        <button
          className={`${style.searchBarButton} ${style.firstButton}`}
          {...props}
          data-option='place'
        >
          A cualquier lugar
        </button>
        <span className={style.buttonSeparator}></span>
        <button
          className={`${style.searchBarButton} ${style.seccondButton}`}
          {...props}
          data-option='where'
        >
          semana (en cualquier fecha)
        </button>
        <span className={style.buttonSeparator}></span>
        <button
          className={`${style.searchBarButton} ${style.thirdButton}`}
          {...props}
          data-option='howMuch'
        >
          ¿Cuántos?
        </button>
      </div>
      <button className={style.icon}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default DesktopSearchBar;
