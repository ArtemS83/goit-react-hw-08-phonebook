import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import Section from 'components/Section';
import ContactsInputForm from 'components/ContactsInputForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import Notification from 'components/Notification';
import {
  getContacts,
  getIsLoadingSelector,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { createUseStyles } from 'react-jss';
import imageHomePage from 'images/phonebookPoster.png';
import Button from 'components/Button';
import style from './LoginPage.module.scss';
import authOperations from '../../redux/auth/auth-operations';

const LoginPage = () => {
  //{name:'Artem',email:'aqu@ukr.net', passworld : '1111111'}
  const [email, setEmail] = useState('aqu@ukr.net');
  const [password, setPassword] = useState('1111111');
  const dispatch = useDispatch();
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);
  // const handleChange = ({ target }) => {
  //   const { value, name } = target;
  //   name === 'email' ? setEmail(value) : setPassword(value);
  // };
  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
    }
    const user = {
      email,
      password,
    };
    // console.log('user', user);
    dispatch(authOperations.logIn(user));
    //TODO  if error-not reset
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Section title="">
        <h1 className={style.title}>Login</h1>
        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
          <label className={style.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              // onChange={handleChange}
              onChange={handleChangeEmail}
            />
          </label>

          <label className={style.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              minLength="7"
              // onChange={handleChange}
              onChange={handleChangePassword}
            />
          </label>
          <Button title="Login" type="submit" />
        </form>
      </Section>
    </>
  );
};

export default LoginPage;
