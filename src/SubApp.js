import React from "react";
import { Outlet } from "react-router-dom";

export default function SubApp() {
    return (
        <>
              <MainBar />
              <Outlet/>
              <Routes>

          <Route path="/home" element={<Home />} />

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
</>
    )
}