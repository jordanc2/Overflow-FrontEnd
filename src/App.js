import React from 'react';
import { Route } from "react-router-dom";
import InventoryList from './components/Lists/InventoryList';
import ProductsList from './components/Lists/ProductsList';
import AddProductCard from './components/Cards/AddProductCard';
import '../src/styles/app.css';
import '../src/styles/dashboard.css';
import LoginForm from './components/Authentication/Login';
import RegisterForm from './components/Authentication/Register';
import PrivateRoute from './components/Authentication/PrivateRoute';

function App() {
  return (
      <div className="App">
        <div className="users">
        </div>
          <Route exact path ='/' component={LoginForm}/>
          <Route exact path ='/register' component={RegisterForm}/>
          <PrivateRoute component={InventoryList} exact path = '/InventoryList'/>
          <PrivateRoute component={ProductsList} exact path = '/ProductsList'/>
          <PrivateRoute component={AddProductCard} exact path = '/AddProductCard' />
        </div>
  );
}


export default App;
