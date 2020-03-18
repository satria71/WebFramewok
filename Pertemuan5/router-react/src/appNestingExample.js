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

export default function NestingExample(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr/>
  
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
          </Switch>
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
  
  function Topics(){
    //'path' untuk membuat jalur <Route> yang terhadap rute induk,
    //sedangkan url untuk membuat link
    let {path, url} = useRouteMatch();
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
          </li>
          <li>
            <Link to={`${url}/Wisata Alama, Semeru`}>Traveling</Link>
          </li>
          <li>
            <Link to={`${url}/Savana, JW Marriot`}>Review Hotel</Link>
          </li>
        </ul>
  
        <switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic/>
          </Route>
        </switch>
      </div>
    );
  }
  
  function Topic(){
    let {topicId} = useParams();
    return(
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }
  