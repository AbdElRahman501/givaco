import React, { useState } from "react";
import Footer from "./components/footer";
import {Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/heading";
import CartScreen from "./screens/CartScreen";
import LikedScreen from "./screens/likedScreen";
import ShopeScreen from "./screens/shopScreen";
import ScrollToTop from "./components/scrollTotop";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);


return (
  <div className={isDarkMode ? "" : "lightmode"} >
  <Header  
    isDarkMode = {isDarkMode}
    setIsDarkMode = {setIsDarkMode}
  />
  <div className="body">
   <ScrollToTop>
    <Routes>
      <Route path="/cart/:_id" element={<CartScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="products/:_id" element={<ProductScreen />} />
      <Route path="/Favorite" element={<LikedScreen />} />
      <Route path="/shope/:keyword" element={<ShopeScreen />} />
  </Routes>
   </ScrollToTop>
  
  </div>
  <Footer />
  </div>
  );
}

export default App;
