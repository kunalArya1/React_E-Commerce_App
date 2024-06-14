import React from "react";
import { data } from "../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-screen w-screen">
      <h1 className=" text-center font-bold text-2xl">Product Listing Page</h1>
      <div className=" p-5 w-screen grid grid-cols-3 ">
        {data.map((item) => (
          <Link to={`/product/${item.id}`}>
            <div key={item.id} className="m-2 p-5 bg-slate-300">
              <h1>{item.name}</h1>
              <h1>{item.description}</h1>
              <h1>{item.price}</h1>
              <h1>{item.quantity}</h1>
              <h1>{item.category}</h1>
              <h1>{item.brand}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
