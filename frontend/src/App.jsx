import FiltersBar from './components/FiltersBar';
import Header from './components/Header';

import style from './App.module.css';
import BuildingGrid from './components/BuildingGrid';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <FiltersBar />
      <BuildingGrid />
    </div>
  );
};

export default App;
