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

export default function ParamsExample(){
    return(
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/netflix">NetFlix</Link>
            </li>
            <li>
              <Link to="/gmail">Gmail</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/amazon">Amazon</Link>
            </li>
          </ul>
  
          <switch>
            <Route path="/:id" children={<Child />}/>
          </switch>
        </div>
      </Router>
    );
  }

  
function Child(){
    let {id} = useParams();
  
    return(
      <div>
        <h3>ID : {id}</h3>
      </div>
    );
  }