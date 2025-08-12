import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    //Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = ()=>{
        setLoading(true);
        
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            axios.get(`${import.meta.env.VITE_API_URL}`,{
                headers:{
                    Authorization: `Bearer ${currentUser?.accessToken}`
                }
            })
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInWithGoogle,
        login,
        logout

    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;