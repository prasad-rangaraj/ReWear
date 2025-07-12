import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/login';
import Registration from './pages/registration';
import Landing from './pages/landing';
import Menu from './pages/menu';
import UserDashboard from './pages/userDashboard';
import ItemListing from './pages/itemLIsting';
import Admin from './pages/admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
        <Route path='/productDetails' element={<productDetails/>}/>
        <Route path='/itemListing' element={<ItemListing/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App