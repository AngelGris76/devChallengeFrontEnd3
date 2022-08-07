import PlaceFiltersButtons from './PlaceFiltersButtons';
import style from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <div className={style.filtersContainer}>
      <PlaceFiltersButtons />
    </div>
  );
};

export default FiltersBar;
