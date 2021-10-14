/* eslint-disable no-unused-vars */
import './app.scss';

import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import SignUp from 'pages/SignUp';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const isUser = window.localStorage.getItem('access_token');
console.log(isUser);
const App = () => (
  <Router>
    <Switch>
      {isUser ? (
        <Redirect from="/signup" exact to="/" />
      ) : (
        <Route path="/signup">
          <SignUp />
        </Route>
      )}
      <Route path="/detail">
        <ProductDetail />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
