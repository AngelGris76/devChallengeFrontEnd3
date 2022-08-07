import FiltersBar from './components/FiltersBar';
import Header from './components/Header';

import style from './App.module.css';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <FiltersBar />
    </div>
  );
};

export default App;
