import React from 'react';
import './App.css';
import PrimarySearchAppBar from './TopBar';
import MainBody from './MainBody';
import Signup from './SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './LogIn';

// function App() {
//   return (
//     <div className="App">
//       <PrimarySearchAppBar />
//       <MainBody />
//     </div>
//   );
// }

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <div className="App">
              <Signup />
            </div>
          </Route> 
          <Route path="/home">
            <div className="App">
              <PrimarySearchAppBar />
              <MainBody />
            </div>
          </Route> 
          <Route path="/login">
            <div className="App">
              <LogIn />
            </div>
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// export default App;
