import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import style from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
