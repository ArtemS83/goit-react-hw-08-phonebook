import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';
import style from './UserMenu.module.scss';
import authSelectors from '../../redux/auth/auth-selectors';
import authActions from '../../redux/auth/auth-actions';
import authOperations from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  // const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const hendelLogOut = () => {
    // console.log('hendelLogOut', token);
    dispatch(authOperations.logOut());
  };
  return (
    <div className={style.userMenu}>
      <p>Welcome, {name}</p>
      <Button title="Logout" type="button" onClick={hendelLogOut} />
    </div>
  );
};

export default UserMenu;
