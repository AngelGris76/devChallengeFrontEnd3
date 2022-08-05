import CompleteLogo from './CompleteLogo';
import style from './Header.module.css';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className={style.header}>
      <CompleteLogo />
      <SearchBar
        onClick={(ev) => {
          const element = ev.target.closest('button');
          if (element) {
            console.log(element.dataset);
          }
        }}
      />
      <MenuBar />
    </header>
  );
};

export default Header;
