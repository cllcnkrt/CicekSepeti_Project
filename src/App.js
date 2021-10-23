/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
import './app.scss';

import Account from 'pages/Account';
import ForgetPassword from 'pages/ForgetPassword';
import Home from 'pages/Home';
import ProductAdd from 'pages/ProductAdd/ProductAdd';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthenticationRoute from 'routes/AuthenticationRoute';
import ProtectedRoute from 'routes/ProtectedRoute';

const App = () => {
  const signUp = useSelector((state) => state.signUp);
  const signIn = useSelector((state) => state.signIn);

  const isAuthenticated =
    window.localStorage.getItem('access_token') !== null ||
    signIn.accessToken.length > 0 ||
    signUp.accessToken.length > 0;

  return (
    <>
      <Router>
        <Switch>
          <ProtectedRoute
            component={ProductAdd}
            path="/urun-ekleme"
            isAuthenticated={isAuthenticated}
            exact={false}
          />
          <ProtectedRoute
            component={Account}
            path="/hesabım"
            isAuthenticated={isAuthenticated}
            exact={false}
          />
          <AuthenticationRoute
            component={SignUp}
            path="/yeni-uyelik"
            isAuthenticated={isAuthenticated}
            exact={false}
          />
          <AuthenticationRoute
            component={SignIn}
            path="/giris"
            isAuthenticated={isAuthenticated}
            exact={false}
          />

          <Route path="/urun-detay/:id" component={ProductDetail} />
          <Route path="/sifre-yenile" component={ForgetPassword} />
          <Route exact path="/" component={Home} />
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
        className="customToast"
      />
    </>
  );
};
export default App;
