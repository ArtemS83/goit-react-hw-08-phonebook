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
import { fetchContacts } from './redux/contacts/contacts-operations';
// import ContactsPage from 'pages/ContactsPage';
import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Loader1 from 'components/Loader1';
import authOperations from 'redux/auth/auth-operations';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []); // eslint-disable-line
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          // <div>Loading...</div>
          <Loader1 />
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
