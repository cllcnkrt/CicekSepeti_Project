import './style/custom.scss';
import 'react-toastify/dist/ReactToastify.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
