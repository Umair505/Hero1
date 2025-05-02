import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider(); // FIXED

    const handleLGoogleSignIn = () => {
        console.log("Clicked");
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.error(error); // IMPROVED
            });
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null); // FIXED
            console.log("Signout Completed");
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleLGoogleSignIn}>Sign in With Google</button>
            <button onClick={handleSignOut}>Sign Out</button>
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div> // FIXED closing tag
            }
        </div>
    );
};

export default Login;
