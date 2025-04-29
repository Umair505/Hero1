import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider
    const handleLGoogleSignIn = () =>{
        console.log("Clicked")
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleLGoogleSignIn}>Sign in With Google</button>
        </div>
    );
};

export default Login;