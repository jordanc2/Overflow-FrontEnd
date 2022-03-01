import React from 'react';
import { Route } from "react-router-dom";
import ClientInventory from './components/Lists/ClientInventoryList';
import ProductsList from './components/Lists/ProductsList';
import CreateProduct from './components/Cards/CreateProduct';
import '../src/styles/app.css';
import '../src/styles/dashboard.css';
import LoginForm from './components/Pages/LoginPage';
import RegisterForm from './components/Pages/RegisterPage';
// import PrivateRoute from './components/Authentication/PrivateRoute';
import UpdateProduct from './components/Cards/UpdateProduct';
import HomePage from './components/Pages/HomePage';


function App() {
  
  return (
    
      <div >
         <Route exact path ='/' component={HomePage}/>
          <Route exact path ='/login' component={LoginForm}/>
          <Route exact path ='/register' component={RegisterForm}/>
          <Route component={ClientInventory} exact path = '/ClientInventory'/>
          <Route component={ProductsList} exact path = '/ProductsList'/>
          <Route component={CreateProduct} exact path = '/CreateProduct' />
          <Route component={UpdateProduct} exact path = '/UpdateProduct'/>
        </div>
    
  );

}
 


export default App;
