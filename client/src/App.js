import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Header, ProductDetail } from "./Import/Index";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
