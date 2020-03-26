import React from 'react';
import { Route } from "react-router-dom";
import CasesList from './components/Lists/CasesList';
import AgencyList from './components/Lists/AgenciesList';
import UsersList from './components/Lists/UsersList';
import AddCaseCard from './components/Cards/AddCaseCard';
import '../src/styles/app.css';
import '../src/styles/dashboard.css'

function App() {
  return (
      <div className="App">
        <div>
          <UsersList/>
        </div>
        <div>    
          <Route exact path ='/' component={CasesList} />
        </div>
        <div>
          <Route exact path ='/Agency' component={AgencyList}/>
        </div>
        <div>
          <Route exact path ='/AddCaseCard' component={AddCaseCard} />
        </div>
      </div>

  );
}

export default App;
