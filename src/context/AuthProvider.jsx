import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }
 const updateUserProfile = (name, photoUrl)=>{
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl})
      
 }

 const resetUserPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
    
 }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log("current User inside useEffect on auth state change" , currentUser);
            setUser(currentUser)
            // console.log(loading);
            toast.success("A reset password link sent your mail, Please check your mail!!");
            
            setLoading(false)
            
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo ={
        user,
        setUser,
        loading,
        createUser,
        updateUserProfile,
        singInUser,
        singOutUser,
        resetUserPassword
    }
    return (
        <AuthContext  value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;