import React from 'react';
import { Route } from "react-router-dom";
import Cases from './components/Cards/CasesCard';
import Agency from './components/Cards/AgenciesCard';
import User from './components/Cards/UsersCard'
import './App.css';

function App(props) {
  return (
      <div className="App">
        <h3>Case Overview</h3>
        <div>
        <p>Welcome</p>
        <User/>
        </div>
      <Route exact path ='/' component={Cases} />
      <Route exact path ='/Agency' component={Agency}/>
      </div>

  );
}

export default App;
