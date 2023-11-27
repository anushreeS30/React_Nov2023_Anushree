
import './App.css';
import React from 'react';
import InventoryHomePage from './Component/InventoryHomePage';
import SignUp from './Component/SignUp';
import Registration from './Component/Registration';
// import AboutUs from './Component/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Location from './Component/Location';
import Brand from './Component/Brand';
import Loan from './Component/Loan';
import Categories from './Component/Categories';
import Report from './Component/Report';
import AboutUs from './Component/AboutUs';
import  Products from './Component/Products';
import  Staff from './Component/Staff';
import  Review from './Component/Review';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<InventoryHomePage />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/brand" element={<Brand />} />
          <Route exact path="/Report" element={<Report />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Staff" element={<Staff />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/loan" element={<Loan />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/InventoryHomePage" element={<InventoryHomePage />} />
  
          {/* <Route exact path="/AboutUs" element={<AboutUs />} /> */}
          
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;