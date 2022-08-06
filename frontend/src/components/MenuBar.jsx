import HamburgerIcon from './icons/HamburgerIcon';
import PersonCircleIcon from './icons/PersonCircleIcon';
import WorldIcon from './icons/WorldIcon';
import style from './MenuBar.module.css';

const MenuBar = () => {
  return (
    <nav className={style.menuBar}>
      <a href='/host/homes' className={style.link}>
        Sé anfitrión
      </a>
      <button className={style.worldButton}>
        <WorldIcon width='1rem' />
      </button>
      <button className={style.userButton}>
        <HamburgerIcon width='1rem' />
        <PersonCircleIcon width='2rem' />
      </button>
    </nav>
  );
};

export default MenuBar;
