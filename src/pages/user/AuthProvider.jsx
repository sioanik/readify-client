
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"
import { app } from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";



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


    // // Monitor user changes (Code provided in support)
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         // get and set token
    //         setUser(currentUser)
    //         const loggedUser = { email: currentUser?.email }
    //         if (currentUser) {
    //             axios.post(`http://localhost:5000/jwt`, loggedUser, {
    //                 withCredentials: true,
    //             })
    //         } else {
    //             axios
    //                 .post('http://localhost:5000/logout', loggedUser, {
    //                     withCredentials: true,
    //                 })
    //                 .then((res) => {
    //                     if (res.data) {
    //                         // you can console.log to see res.data
    //                     }
    //                 })
    //             setUser(null)
    //         }

    //         setLoading(false)
    //     })

    //     return () => {
    //         return unsubscribe()
    //     }
    // }, [])






    useEffect(() => {
        const unmount = onAuthStateChanged(auth, (currentUser) => {
            
            const loggedUser = { email: currentUser?.email }
            if (currentUser) {
                // console.log(currentUser);

                // if user exists then issue a token 
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        setUser(currentUser)
                        setLoading(false)
                        // console.log('token response', res.data);
                    })

            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, { withCredentials: true })
                    .then(res => {
                        setUser(null)
                        setLoading(false)


                        // console.log(res.data);
                    })

                // setUser(null)
            }
            // setLoading(false)
            // console.log(currentUser);

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