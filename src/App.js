import React from 'react';
import { Route } from "react-router-dom";
import Cases from '../src/components/Cases';
import Agency from './components/Agencies';
import User from './components/Users'
import './App.css';

function App(props) {
  return (
      <div className="App">
        <h3>Case Overview</h3>
        <div>
        <p>Welcome</p>
        <User/>
        </div>
      <Route exact path ='/' component={Cases}/>
      <Route exact path ='/Agency' component={Agency}/>
      </div>

  );
}

export default App;
