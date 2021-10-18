/* eslint-disable no-unused-vars */
import './app.scss';

import Account from 'pages/Account';
import ForgetPassword from 'pages/ForgetPassword';
import Home from 'pages/Home';
import ProductAdd from 'pages/ProductAdd/ProductAdd';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const isUser = window.localStorage.getItem('access_token');

const App = () => (
  <>
    <Router>
      <Switch>
        {isUser ? (
          <Redirect from="/yeni-uyelik" exact to="/" />
        ) : (
          <Route path="/yeni-uyelik">
            <SignUp />
          </Route>
        )}
        {isUser ? (
          <Redirect from="/giris" exact to="/" />
        ) : (
          <Route path="/giris">
            <SignIn />
          </Route>
        )}
        <Route path="/urun-detay/:id">
          <ProductDetail />
        </Route>
        <Route path="/hesabım">
          <Account />
        </Route>
        <Route path="/urun-ekleme">
          <ProductAdd />
        </Route>
        <Route path="/sifre-yenile">
          <ForgetPassword />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  </>
);

export default App;
