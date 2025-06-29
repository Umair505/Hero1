import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        // Sign in with email and password
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            console.log("Current user:", currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        user,
        loading,
        setLoading,
        signIn,
        signOutUser,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;