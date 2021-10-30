
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState, useEffect } from "react";
// import {useHistory, useLocation} from "react-router-dom"

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     // password validation
    //     if (password.length < 8) {
    //         setError('Password must be 8-20 charecters long.');
    //         return;
    //     };
    //     createNewUser(email, password);
    // };

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUserInfo = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const history = useHistory();
    // const location = useLocation();
    // const url = location.state?.from || "/home";

    // Google sign in
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    // observe if user state is changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribe;
    }, [auth]);


    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => setError(error.message));
    }

    return {
        signInWithGoogle,
        user,
        setUser,
        logOut,
        error,
        createNewUser,
        updateUserInfo,
        loginWithEmailAndPassword,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;