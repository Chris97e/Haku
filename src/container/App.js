import React from 'react';
import './App.css';
import Brother from '../component/Brother/Brother';
import Write from '../component/Write/Write';
import Hello from '../component/Hello/Hello';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hello />
            <Brother></Brother>
          </Route>
          <Route path="/add">
            <Write></Write>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}


export default App;
