import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CustomerLogin from './pages/CustomerLogin'
import ShopkeeperSignup from './pages/ShopkeeperSignup'
import ShopkeeperLogin from './pages/ShopkeeperLogin'
import CustomerSignup from './pages/CustomerSignup'
import Adminlogin from './pages/Adminlogin'
import CustomerSignup2 from './pages/CustomerSignup2'
import CustomerSignup1 from './pages/CustomerSignup1'
import ShopkeeperOp from './pages/ShopkeeperOP'
import Shopekeeper3 from './pages/Shopekeeper3'
import CustomerDashboard from './Dashboard/CustomerDashboard'
import Location from './Dashboard/Location'
import Locaation_shopkeeper from'./Dashboard/locaation_shopkeeper'
import ShopkeeperDashboard from'./Dashboard/ShopkeeperDashboard'
import Nearby from "./Customer/Nearby";
import CustomerProductDetails from "./Customer/CustomerProductDetails";
import CustomerShopDetails from ".//Customer/CustomerShopDetails";
import CustomerReservation from ".//Customer/CustomerReservation";
import CustomerReservationConfirmation from ".//Customer/CustomerReservationConfirmation";
import CustomerOrders from ".//Customer/CustomerOrders";
import CustomerSaved from ".//Customer/CustomerSaved";
import CustomerProfile from ".//Customer/CustomerProfile";
const App = () => {
  return (
    <div >
       
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/CustomerLogin' element={<CustomerLogin />} />
        <Route path='/Shopkeeper3rd' element={<Shopekeeper3 />} />
        <Route path='/CustomerDashboard' element={<CustomerDashboard />} />
        <Route path='/ShopkeeperOTP' element={<ShopkeeperOp />} />
        <Route path='/Adminlogin' element={<Adminlogin />} />
        <Route path='/CustomerSignup' element={<CustomerSignup />} />
        <Route path='/ShopkeeperLogin' element={<ShopkeeperLogin />} />
        <Route path='/ShopkeeperSignup' element={<ShopkeeperSignup />} />
        <Route path='/Customerdashboard' element={<CustomerDashboard />} />
        <Route path='/CustomerSignup2' element={<CustomerSignup2 />} />
        <Route path='/CustomerSignup1' element={<CustomerSignup1 />} />
        <Route path='/Location' element={<Location />} />
        <Route path='/Location_shopkeeper' element={<Locaation_shopkeeper />} />
        <Route path='/shopkeeperdashboard' element={<ShopkeeperDashboard />} />
        <Route path="/Nearby" element={<Nearby />} />
<Route
  path="/CustomerProductDetails/:productId"
  element={<CustomerProductDetails />}
/>
<Route
  path="/CustomerShopDetails/:shopId"
  element={<CustomerShopDetails />}
/>
<Route path="/CustomerReservation" element={<CustomerReservation />} />
<Route
  path="/CustomerReservationConfirmation"
  element={<CustomerReservationConfirmation />}
/>
<Route path="/CustomerOrders" element={<CustomerOrders />} />
<Route path="/CustomerSaved" element={<CustomerSaved />} />
<Route path="/CustomerProfile" element={<CustomerProfile />} />
        </Routes>
    </div>
  )
}

export default App
