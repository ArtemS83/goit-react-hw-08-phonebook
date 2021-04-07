import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';
import style from './UserMenu.module.scss';
const UserMenu = () => {
  return (
    <div className={style.userMenu}>
      <p>Welcome, NAME</p>
      {/* <Button title="Delete" onDelete={hendelDeleteContact} /> */}
      <Button title="LogOut" type="button" />
    </div>
  );
};

export default UserMenu;
