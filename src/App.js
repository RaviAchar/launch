import logo from './logo.svg';
import React from 'react';
import './App.css';
import MainBar from './MainBar';
import Inventory from './components/Inventory/Inventory';
import { Grid } from '@mui/material';
import AccountsMain from './components/Account/AccountsMain';
import { Route, Routes } from 'react-router-dom';
import Brands from './components/Brands';
import Events from './components/Events';
import Home from './components/Home/Home';
import Tracking from './components/Account/Tracking';
import PurchaseHistory from './components/Account/PurchaseHistory';
import Orders from './components/Account/Orders';
import CustomerService from './components/Account/CustomerService';
import Profile from './components/Account/Profile';
import Checkout from './components/basket/Checkout';
import Accounts from './components/Account/Accounts';
import Privacy from './Privacy';
import TermsOfUse from './TermsOfUse';
import Tab from './Tab';
import TabConfig from './TabConfig';
import TeamsScheduler from './teamspages/TeamsScheduler';
import TeamsEvent from './teamspages/TeamsEvent';
import TeamsTabMain from './teamspages/TeamsTabMain';



function App() {
  console.log(window.location.pathname.startsWith("/teamstab"))
  return (

    <div className="App">
      {window.location.pathname.startsWith("/teamstab") !== true && <MainBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teamstab/privacy" element={<Privacy />} />
        <Route path="/teamstab/termsofuse" element={<TermsOfUse />} />
        <Route path="/teamstab/tab" element={<Tab />} />
        <Route path="/teamstab/config" element={<TabConfig />} />
        <Route path="/teamstab/teamsevent" element={<TeamsTabMain compName="EVENT" />} />
        <Route path="/teamstab/schedule" element={<TeamsTabMain compName="SCHEDULE" heduler />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Inventory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/settings" element={<AccountsMain />}>
          <Route path="profile" element={<Profile />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="history" element={<PurchaseHistory />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
