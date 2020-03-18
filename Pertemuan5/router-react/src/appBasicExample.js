import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './App.css';

export default function BasicExample(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr/>
  
          <switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route exact path = "/about">
              <About/>
            </Route>
            <Route exact path = "/dashboard">
              <Dashboard/>
            </Route>
          </switch>
        </div>
      </Router>
    );
  }

  function Home(){
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About(){
    return(
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard(){
    return(
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }