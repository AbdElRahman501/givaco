import React from "react";
import Footer from "./components/footer";
import {Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/heading";
import CartScreen from "./screens/CartScreen";
import LikedScreen from "./screens/likedScreen";


function App() {

return (
  <div>
  <Header />
  <Routes>
      <Route path="/cart/:_id" element={<CartScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="products/:_id" element={<ProductScreen />} />
      <Route path="/Favorite" element={<LikedScreen />} />
  </Routes>
  <Footer />
  </div>
  );
}

export default App;
