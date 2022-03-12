import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/product/price/:filter/:value" element={<Filter />} />
      </Routes>
    </>
  );
};

export default App;
