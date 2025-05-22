import React from "react";
import { FiEdit, FiEye, FiX } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {

  const { _id, name, quantity, price, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // Filter out the deleted coffee from the state
              const remainingCoffees = coffees.filter(cof => cof._id !== id);

                setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="card border-2 card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-around w-full items-center">
        <div>
          <h2 className="">Name : {name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="join join-vertical space-y-3">
          <Link to={`/coffee/${_id}`}>
            <button className="btn join-item">
              <FiEye size={18} />
            </button>
          </Link>
          <Link to={`/update-coffee/${_id}`}>
            <button className="btn join-item">
              <FiEdit size={18} />
            </button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            <FiX size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
