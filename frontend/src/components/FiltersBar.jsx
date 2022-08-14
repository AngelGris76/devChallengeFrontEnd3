import PlaceFiltersButtons from './PlaceFiltersButtons';
import style from './FiltersBar.module.css';
import FiltersIcon from './icons/FiltersIcon';

const FiltersBar = () => {
  return (
    <div className={style.filtersContainer}>
      <PlaceFiltersButtons />
      <button className={style.filtersButton}>
        <FiltersIcon width='1rem' />
        <span>Filtros</span>
      </button>
    </div>
  );
};

export default FiltersBar;
