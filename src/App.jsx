import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CustomerLogin from './pages/CustomerLogin'
import ShopkeeperSignup from './pages/ShopkeeperSignup'
import ShopkeeperLogin from './pages/ShopkeeperLogin'
import CustomerSignup from './pages/CustomerSignup'
import Adminlogin from './pages/Adminlogin'
import CustomerDashboard from './Dashboard/CustomerDashboard'
import CustomerSignup2 from './pages/CustomerSignup2'
import CustomerSignup1 from './pages/CustomerSignup1'
import ShopkeeperOp from './pages/ShopkeeperOP'
import Shopekeeper3 from './Shopekeeper3'
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/CustomerLogin' element={<CustomerLogin />} />
        <Route path='/Shopkeeper3rd' element={<Shopekeeper3 />} />
        <Route path='/ShopkeeperOTP' element={<ShopkeeperOp />} />
        <Route path='/Adminlogin' element={<Adminlogin />} />
        <Route path='/CustomerSignup' element={<CustomerSignup />} />
        <Route path='/ShopkeeperLogin' element={<ShopkeeperLogin />} />
        <Route path='/ShopkeeperSignup' element={<ShopkeeperSignup />} />
        <Route path='/Customerdashboard' element={<CustomerDashboard />} />
        <Route path='/CustomerSignup2' element={<CustomerSignup2 />} />
        <Route path='/CustomerSignup1' element={<CustomerSignup1 />} />
      </Routes>
    </div>
  )
}

export default App
