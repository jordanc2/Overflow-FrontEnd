import React from 'react';
import { Route } from "react-router-dom";
import InventoryList from './components/Lists/InventoryList';
import ProductsList from './components/Lists/ProductsList';
import Client from './components/Lists/Client';
import AddProductCard from './components/Cards/AddProductCard';
import '../src/styles/app.css';
import '../src/styles/dashboard.css';

function App() {
  return (
      <div className="App">
        <div className="users">
          <Client/>
        </div>
        <div>    
          <Route exact path ='/InventoryList' component={InventoryList} />
        </div>
        <div>
          <Route exact path ='/ProductsList' component={ProductsList}/>
        </div>
        <div >
          <Route exact path ='/AddProductCard' component={AddProductCard} />
        </div>
      </div>

  );
}

export default App;
