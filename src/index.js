import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { AuthContextProvider } from './components/LoginUsers/store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);

