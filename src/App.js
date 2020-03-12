import React from 'react';
import { Route } from "react-router-dom";
import Cases from '../src/components/Cases';
import Agency from './components/Agencies';
import './App.css';

function App() {
  return (
      <div className="App">
      <Route exact path ='/' component={Cases}/>
      <Route exact path ='/Agency' component={Agency}/>
      </div>

  );
}

export default App;
