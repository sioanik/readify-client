
import { getAuth } from "firebase/auth"
import { app } from "../../firebase/firebase.config";
import { createContext, useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)



    const authInfo = {
        user,
        loading,

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