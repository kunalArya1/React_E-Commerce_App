import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./Pages/MainContainer";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className=" h-screen w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
