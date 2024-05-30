import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../user/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const RequestedBooks = () => {


    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/my-requested-books/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data)
                // console.log(data);
            })
    }, [])


    const handleDeleteBook = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete request!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`${import.meta.env.VITE_API_URL}/delete-request/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myItem.filter(item => item._id !== id)
                                setMyItem(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your book request has been deleted.",
                                    icon: "success"
                                });

                            }

                        })
                }
            })
    }




    return (
        <div className="w-[90%] mx-auto">
            <div className="flex justify-end mr-20">
                <Link to={'/request-book'}><button className="btn btn-neutral">Request a Book</button></Link>
            </div>
        <div className='w-[80%] mx-auto mt-10 py-5 mb-5'>
            <p className='text-center pb-4 text-2xl font-semibold'>Requested Books</p>
            <p className='text-center'>Browse through the books you have requested for.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
            {
                myItem.map((item, idx) =>
                    <div className="" key={idx}>

                        <div className="border-4 overflow-hidden text-center rounded-lg shadow-lg">
                            <div className="px-4 py-2">
                                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
                                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">Category- {item.category}</p>
                                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">Author- {item.author}</p>
                                {/* <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{item._id}</p> */}

                            </div>

                            <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 py-2">

                                <button onClick={() => handleDeleteBook(item._id)} className="btn btn-neutral my-5 lg:my-0">Cancel Request</button>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    </div>
    );
};

export default RequestedBooks;