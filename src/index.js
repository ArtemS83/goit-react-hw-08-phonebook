import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.render(
  <StrictMode>
    {/* <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
