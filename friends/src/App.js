import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import loginForm from './components/loginForm';
import friendsPage from './components/friendsPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'><div className='nav-button'>Login</div></Link>
        <Link to='/friends'><div className='nav-button'>Friends</div></Link>
      <Switch>
        <PrivateRoute exact path='/friends' component={friendsPage} />
        <Route path='/login' component={loginForm} />
        <Route path='/login' component={loginForm} />
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
