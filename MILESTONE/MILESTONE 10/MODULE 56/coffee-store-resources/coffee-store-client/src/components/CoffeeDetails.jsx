import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { _id, name, quantity, price, photo ,details} = useLoaderData();
  return (
    <div>
      <div className="p-24">
        <div className="p-8 text-center space-y-4 items-center flex flex-col justify-center">
          <h1 className="text-6xl">Coffee Details</h1>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={photo}
                alt="photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                {details}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{price}TK</div>
                <div className="badge badge-outline">{quantity}</div>
              </div>
            </div>
          </div>
        <Link to="/">
        <button className="btn btn-lg">Back To Home</button>
        </Link>
        </div>
      </div>
  
        
      
    </div>
  );
};

export default CoffeeDetails;
