import React from 'react';

const User = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email };

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('User added:', data);
                alert('User added successfully!');
                form.reset();
            })
            .catch(err => {
                console.error('Error:', err);
                alert('Failed to add user. Check console for details.');
            });
    };

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <br />
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default User;
