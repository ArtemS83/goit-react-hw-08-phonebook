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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { value, name } = target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email === '') {
      alert('Please enter email and password');
    }
    const user = {
      email,
      password,
    };
    console.log('user', user);
  };

  return (
    <>
      <h1 className={style.title}>Login</h1>;
      <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            // placeholder="Enter email"
            onChange={handleChange}
          />
        </label>

        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            // placeholder="Enter password min 7 "
            onChange={handleChange}
          />
        </label>
        <Button title="Login" type="submit" />
      </form>
    </>
  );
};

export default LoginPage;
