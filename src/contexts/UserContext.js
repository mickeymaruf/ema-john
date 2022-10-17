import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={{ user, loginWithEmail, createUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;