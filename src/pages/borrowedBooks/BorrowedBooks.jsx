import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../user/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";


const BorrowedBooks = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/my-borrowed-books/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data)
                // console.log(data);
            })
    }, [])



    const handleDeleteCraft = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myItem.filter(item => item.refid !== id)
                                setMyItem(remaining)
                                Swal.fire({
                                    title: "Returned!",
                                    text: "Your book has been returned.",
                                    icon: "success"
                                });

                            }

                        })
                }
            })





    }

    return (
        <div className="w-[90%] mx-auto">
            <div className='w-[80%] mx-auto mt-10 py-5 mb-5'>
                <p className='text-center pb-4 text-2xl font-semibold'>Borrowed Books</p>
                <p className='text-center'>Browse through the books you have borrowed and manage your reading list conveniently.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
                {
                    myItem.map((item, idx) =>
                        <div className="" key={idx}>

                            <div className="border-4 overflow-hidden text-center rounded-lg shadow-lg">
                                <div className="px-4 py-2">
                                    <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
                                    <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{item.category}</p>
                                </div>

                                <img className="object-contain w-full h-48 my-3" src={item.image} alt="" />

                                <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 py-2">

                                        <button onClick={() => handleDeleteCraft(item.refid)} className="btn btn-neutral btn-block my-5 lg:my-0">Return</button>
                                </div>
                            </div>


                            {/* <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="px-4 py-2">
                                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
                                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{item.category}</p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"><span>Author- </span>{item.author}</p>
                            </div>

                            <img className="object-contain w-full h-48 mt-2" src={item.image} alt="" />

                            <div className="flex items-center justify-between px-4 py-2 bg-slate-300">

                                <button onClick={() => handleDeleteCraft(item.refid)} className="px-2 py-1 text-lg font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-accent rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Return</button>
                            </div>
                        </div> */}

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;