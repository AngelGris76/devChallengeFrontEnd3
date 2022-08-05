import DesktopSearchBar from './DesktopSearchBar';
import MobileSearchButton from './MobileSearchButton';

const SearchBar = ({ onClick }) => {
  return (
    <>
      <MobileSearchButton onClick={onClick} />
      <DesktopSearchBar onClick={onClick} />
    </>
  );
};

export default SearchBar;
