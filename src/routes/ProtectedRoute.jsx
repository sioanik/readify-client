import { useContext } from "react";
import { AuthContext } from "../pages/user/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }


    if (user) {
        return children

    }
    return <Navigate to={'/login'} state={location}></Navigate>

};

export default ProtectedRoute;