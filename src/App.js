import React from 'react';
import { Route } from "react-router-dom";
import CasesList from './components/Lists/CasesList';
import AgencyList from './components/Lists/AgenciesList';
import UsersList from './components/Lists/UsersList'
import './App.css';

function App() {
  return (
      <div>
        <h2>Case Overview</h2>
        <UsersList/>
        <div className="case-list">
      <Route exact path ='/' component={CasesList} />
      <Route exact path ='/Agency' component={AgencyList}/>
        </div>
      </div>

  );
}

export default App;
