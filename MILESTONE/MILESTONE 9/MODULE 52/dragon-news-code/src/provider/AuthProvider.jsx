import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const  AuthContext = createContext();
const auth = getAuth(app); 

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    };
    
    const logout = () =>{
        return signOut(auth);
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logout,
        signIn,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;