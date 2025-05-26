import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); // Use the auth instance here
    }

    const userInfo = {
        createUser,
    };

    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;