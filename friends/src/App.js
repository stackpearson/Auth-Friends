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
        <nav>
          <div><Link to='/login' className='nav-button'>Login</Link></div>
          <div><Link to='/friends' className='nav-button'>Friends</Link></div>
          <div><Link to='/login' className='nav-button' onClick={() => window.localStorage.clear()}>Log Out</Link></div>  
        </nav>
      <Switch>
        <PrivateRoute exact path='/friends' component={friendsPage} />
        <Route path='/login' component={loginForm} />
        <Route component={loginForm} />
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
