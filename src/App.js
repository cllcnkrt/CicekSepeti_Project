/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
import './app.scss';

import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthenticationRoute from 'routes/AuthenticationRoute';
import ProtectedRoute from 'routes/ProtectedRoute';

import loadingGif from './assets/gif/loading.gif';
import NotFound from './pages/NotFound';

// Dynamic Imports
const Home = lazy(() => import('pages/Home'));
const Account = lazy(() => import('pages/Account'));
const ForgetPassword = lazy(() => import('pages/ForgetPassword'));
const ProductAdd = lazy(() => import('pages/ProductAdd/ProductAdd'));
const ProductDetail = lazy(() => import('pages/ProductDetail/ProductDetail'));
const SignIn = lazy(() => import('pages/SignIn'));
const SignUp = lazy(() => import('pages/SignUp'));

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
        <Suspense
          fallback={
            <div className="lazyLoading">
              <img src={loadingGif} alt="loading" />
            </div>
          }
        >
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
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
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
