import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Header, ProductDetail, Search, Filter } from "./Import/Index";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/filter/:option/:value" element={<Filter />} />
      </Routes>
    </>
  );
};

export default App;
