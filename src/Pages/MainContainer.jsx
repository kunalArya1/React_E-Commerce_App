import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <div>
        <div className=" flex justify-between px-5 h-[50px] bg-gray-500 py-5 mb-10  ">
          <h1>My Main Container</h1>

          <div className=" flex list-none gap-10 font-bold ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/cart">
              <li>My Cart</li>
            </Link>
            <Link to="/wishlist">
              <li>My Wishlist</li>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainContainer;
