import React from 'react'
import '@fontsource/sen'; // Defaults to weight 400

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import Landing from './pages/landing';
import Menu from './pages/menu';
import UserDashboard from './pages/userDashboard';
import ItemListing from './pages/itemLIsting';
import Admin from './pages/admin';
import Registration from './pages/register';
import ProductDetails from './pages/productDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
        <Route path='/productDetails' element={<ProductDetails/>}/>
        <Route path='/itemListing' element={<ItemListing/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App