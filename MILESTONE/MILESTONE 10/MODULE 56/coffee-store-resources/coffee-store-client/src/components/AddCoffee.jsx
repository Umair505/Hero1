import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    fetch("http://localhost:3000/coffees",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(coffeeData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: "Coffee Added Successfully",
          icon: "success",
          draggable: true,
        });
        // form.reset()
      }
    })
  }
  return (
    <div className="p-24">
      <div className="p-8 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form  onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
                name="quantity"
              className="input w-full"
              placeholder="Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              name="supplier"
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
                name="taste"
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              type="text"
                name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              type="text"
                name="details"
              className="input w-full"
              placeholder="Details"
            />
          </fieldset>
        </div>
          <fieldset className="fieldset bg-base-200 my-6 border-base-300 rounded-box  border p-4">
            <label className="label">PhotoURL</label>
            <input
              type="text"
                name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="Add Coffee"/>
      </form>
    </div>
  );
};

export default AddCoffee;
