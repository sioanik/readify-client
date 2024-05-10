
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"
import { app } from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";



const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    // Register 
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Update profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }




    // Google
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // Signout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // console.log(currentUser);
                setUser(currentUser)
                setLoading(false)
            }
            else {
                //  console.log('logged out');
                setLoading(false)
                setUser(null)
            }
        });

        return () => {
            unmount()
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        loading,
        registerUser,
        updateUserProfile,
        loginUser,
        googleLogin,
        logOut,

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;