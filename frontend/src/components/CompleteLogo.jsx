import DesktopLogo from './icons/DesktopLogo';
import MobileLogo from './icons/MobileLogo';

import style from './CompleteLogo.module.css';

const CompleteLogo = () => {
  return (
    <span className={style.completeLogo}>
      <span className={style.mobileLogo}>
        <MobileLogo />
      </span>
      <span className={style.desktopLogo}>
        <DesktopLogo />
      </span>
    </span>
  );
};

export default CompleteLogo;
