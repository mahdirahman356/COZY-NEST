import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase';


export let AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState(null)
    let createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    let loginUser =(email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
     let unsubscribe = onAuthStateChanged(auth,users =>{
          setUser(users)
          console.log("ON Auth State Changed",users)
     })
     return () => {
        unsubscribe()
     }
    },[])

    let authInfo = {user, createUser, loginUser}
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