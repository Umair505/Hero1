import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebase.init";
import { deleteUser } from "firebase/auth";

const Users = () => {
  const initialUsers = useLoaderData();
 const [users,setUsers] = useState(initialUsers);

 const handleDelete = (id) =>{
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
            fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                   
                   Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success",
                  });
                  const remainingUsers = users.filter(user => user._id !== id);
                  setUsers(remainingUsers);
                    // Delete user from firebase auth
                    const userToDelete = users.find(user => user._id === id);
                    if (userToDelete && userToDelete.email) {
                        deleteUser(auth.currentUser)
                        .then(() => {
                            console.log("User deleted from Firebase Auth");
                        })
                        .catch((error) => {
                            console.error("Error deleting user from Firebase Auth:", error);
                        });
                    }

                  //TODO Delete user from firebase auth

                }
            })
        
                  
    
        
          }
        });
 }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
           <th>User No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

        {
            users.map((user,index) =><tr key={user._id}>
            <th>{index + 1}</th>
            
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={user.photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm opacity-50">{user.address}</div>
                </div>
              </div>
            </td>
            <td>
             {user.phone}
            </td>
            <td>{user.email}</td>
            <td className="flex gap-2">
              <button className="btn btn-xs">V</button>
              <button className="btn btn-xs">E</button>
              <button onClick={()=>handleDelete(user._id)} className="btn btn-xs">D</button>
            </td>
            
          </tr>)
        }          
          
        </tbody>
      </table>
    </div>
  );
};

export default Users;
