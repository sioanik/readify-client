import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const Register = () => {

    const [showPass, setShowPass] = useState(false)

    const {registerUser, updateUserProfile, user, setUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.photo.value
        const password = e.target.password.value
        // console.log(name, email, image, password);


        if (password.length < 6) {
            toast("Password must be at least 6 characters");
            return
        }

        if (!/^(?=.*[A-Z])/.test(password)) {
            toast("Password must have an uppercase letter");
            return
        }

        if (!/^(?=.*[!@#$%^&*])/.test(password)) {
            toast("Password must have a special character");
            return
        }

        registerUser(email, password)
            .then(result => {

                toast("Successfully registered")

                updateUserProfile(name, image)
                    .then(() => {
                        navigate('/')
                    })
            })

    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Unlock a world of books with just a few clicks! Register now and start exploring!
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* change 1 */}
                        <form onSubmit={handleRegister} className="card-body">
                            {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required
                                // {...register("name", { required: true })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required
                                // {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo link" className="input input-bordered"
                                // {...register("photo")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="w-full relative">
                                    <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="w-full input input-bordered" required
                                    // {...register("password", { required: true })}
                                    />

                                    <span className="absolute top-1/3 right-5" onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* <div className="text-red-700">
                                {error && <p className="text-red-700">error!</p>}
                            </div> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>

                            {/* {
                                error && (
                                    <div className="toast toast-top toast-end">
                                        <div className="bg-red-400 alert alert-info">
                                            <span className="text-white">{error}</span>
                                        </div>
                                    </div>)
                            } */}

                            {/* {
                                error && <small className="text-red-500">{error}</small>
                            } */}

                            <p>
                                Already registered? Please <Link to={'/login'}>
                                    <button className="btn  btn-link">Login</button>
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;