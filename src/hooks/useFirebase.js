
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => setError(error.message))
    };


    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => setError(error.message));
    }

    return {
        signInUsingGoogle,
        user,
        logOut,
        error
    }
};

export default useFirebase;