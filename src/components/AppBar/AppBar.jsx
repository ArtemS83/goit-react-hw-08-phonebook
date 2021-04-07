import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import style from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
      {false ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
    </header>
  );
};

export default AppBar;
