import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import loginForm from './components/loginForm';
import friendsPage from './components/friendsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-button'>Login</div>
        <div className='nav-button'>Friends</div>
      <Switch>
        {/* <PrivateRoute exact path='/friends' component={friendsPage} /> */}
        <Route path='/login' component={loginForm} />
        <Route component={loginForm} />
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
