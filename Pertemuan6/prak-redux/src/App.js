import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Containers/Tables";
import CreateTodo from "./Containers/createTodo";

function App() {
  return (
    <Fragment>
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12 mt-4">
        <CreateTodo />
        <Table />
      </div>
    </Fragment>
  );
}

export default App;