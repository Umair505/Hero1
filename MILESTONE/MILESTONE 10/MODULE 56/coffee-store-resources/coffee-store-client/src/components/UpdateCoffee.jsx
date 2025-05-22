import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
   const {_id,name,quantity,price,supplier,photo,details,taste} = useLoaderData();
   const handleUpdateCoffee =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Coffee Updated Successfully",
                    icon: "success",
                    draggable: true,
                });
            }
        })
    }
    return (
        <div className='p-5'>
    <div>
      <div className="p-8 text-center space-y-4">
        <h1 className="text-6xl">Update Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form  onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
                defaultValue={name}
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
                defaultValue={quantity}
              type="text"
                name="quantity"
              className="input w-full"
              placeholder="Coffee Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
                defaultValue={supplier}
              name="supplier"
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
                defaultValue={taste}
              type="text"
                name="taste"
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
                defaultValue={price}
              type="text"
                name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
                defaultValue={details}
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
                defaultValue={photo}
              type="text"
                name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="Update Coffee"/>
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;