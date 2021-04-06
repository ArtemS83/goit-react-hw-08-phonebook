import { useEffect } from 'react';
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

// const useStyles = createUseStyles({
//   Image: { width: '100%' },
// });

const LoginPage = () => {
  // const classes = useStyles();
  return <h1>LoginPage</h1>;
};

export default LoginPage;
