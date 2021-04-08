import { useState, useEffect } from 'react';
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux';
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
import style from './RegisterPage.module.scss';
import authOperations from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const [nameUser, setNameUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'nameUser':
        setNameUser(value);
        return;
      case 'email':
        setEmail(value);
        return;
      default:
        setPassword(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !nameUser || !password) {
      alert('Please enter all data');
      return;
    }
    const newUser = {
      name: nameUser,
      email,
      password,
    };
    // console.log('newUser', newUser);
    // dispatch(authOperations.register(nameUser, email, password));
    dispatch(authOperations.register(newUser));
    setNameUser('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Section title="">
        <h1 className={style.title}>Sing up</h1>
        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
          <label className={style.label}>
            Name
            <input
              type="text"
              name="nameUser"
              value={nameUser}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </label>
          <label className={style.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
          <Button title="Sing up" type="submit" />
        </form>
      </Section>
    </>
  );
};

export default RegisterPage;
