import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        });
        return () => {
            return unsubscribe();
        }

    },[])
    
    const authInfo = {
        user,
        userSignUp,
        userLogin,
        googleSignIn,
        userLogOut
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;