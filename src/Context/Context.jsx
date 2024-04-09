import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'; 
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase';
import { signOut } from 'firebase/auth/cordova';


export let AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)

    let createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    let loginUser =(email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    let logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     let unsubscribe = onAuthStateChanged(auth,users =>{
        setLoading(false)
          setUser(users)
          console.log("ON Auth State Changed",users)
     })
     return () => {
        unsubscribe()
     }
    },[])

    let authInfo = {user, createUser, loginUser, logOutUser, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

Context.propTypes ={
    children:PropTypes.node.isRequired
}
export default Context;