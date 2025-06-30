import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';
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

            if(currentUser?.email){
                const userData ={email:currentUser.email};
                axios.post('http://localhost:3000/jwt', userData,{
                    withCredentials:true
                })
                .then(res =>{
                    console.log("JWT Token:", res.data);
                    
                })
                .catch(err=>{
                    console.error("Error fetching JWT token:", err);
                })
            }

            //LocalStorage way to store JWT token
            // if(currentUser?.email){
            //     const userData ={email:currentUser.email};
            //     axios.post('http://localhost:3000/jwt', userData)
            //     .then(res =>{
            //         console.log("JWT Token:", res.data.token);
            //         const token = res.data.token;
            //         localStorage.setItem('token',token);
            //         console.log(token);
            //     })
            //     .catch(err=>{
            //         console.error("Error fetching JWT token:", err);
            //     })
            // }
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