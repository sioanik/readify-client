import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import axios from "axios";
import { AuthContext } from "../user/AuthProvider";



// Programming-Hero Instructors
// 11:19 PM
// localhost:5000/books?email=example@gmail.com
// Programming-Hero Instructors
// 11:20 PM
// const email = req.query.email


const AllBooks = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email);

    // const allBooks = useLoaderData()

    const [books, setBooks] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/books/?email=${user.email}`, { withCredentials: true })
            console.log(data);
            setBooks(data)
        }
        getData()
    }, [])
    // 

    const [available, setAvailable] = useState([])

    const availableBooks = books.filter(item => item.quantity > 0)

    // useEffect(() => {
    //     setBooks(allBooks)
    // }, [])

    // console.log(availableBooks);

    const handleAvailable = () => {
        setBooks(availableBooks)
    }


    // grid/list view 

    const [view, setView] = useState('grid')

    const handleToggleView = (e) => {
        if (e.target.checked) {
            setView('list')
        }
        else {
            setView('grid')
        }
    }
    // console.log(view);



    return (
        <div>
            <div className="">

                <div className="flex justify-end mr-20 ">
                    <label className="flex cursor-pointer gap-2">
                        <div className="flex items-center">
                            <BsFillGridFill />
                        </div>
                        <input onChange={handleToggleView} type="checkbox" value="view" className="toggle theme-controller" />
                        <div className="flex items-center">
                            <FaListAlt />
                        </div>
                    </label>
                </div>

                <div className="flex justify-center mb-20">
                    <button onClick={handleAvailable} className="btn btn-neutral">Show Only Available</button>
                </div>
            </div>
            <div>
                {view == 'grid' ? (
                    <div>


                        <div className="grid grid-cols-2 gap-20 mx-20">
                            {
                                books.map((item, idx) =>
                                    <div className="" key={idx}>
                                        <div className="border-4 overflow-hidden  rounded-lg shadow-lg">
                                            <div className="px-4 py-2">
                                                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
                                                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{item.category}</p>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"><span>Author- </span>{item.author}</p>
                                            </div>

                                            <img className="object-contain w-full h-48 mt-2" src={item.image} alt="" />

                                            <div className="flex items-center justify-between px-4 py-2 bg-slate-300">
                                                {/* <h1 className="text-lg font-bold text-white"></h1> */}
                                                <div className="">
                                                    <Rating
                                                        initialRating={item.rating}></Rating>
                                                </div>
                                                <Link to={`/update-book/${item._id}`}>
                                                    <button className="px-2 py-1 text-lg font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-accent rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Update</button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </div>

                    </div>)
                    :
                    (<div>
                        <div className="">
                            {/* table upper part  */}

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Author</th>
                                            <th>Category</th>
                                            <th>Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    {
                                        books.map((item, idx) =>
                                            //    table body 

                                            <tbody key={idx}>
                                                {/* row 1 */}
                                                <tr>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={item.image} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{item.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.author}
                                                    </td>
                                                    <td>{item.category}</td>
                                                    <td>
                                                        <Rating
                                                            initialRating={item.rating}></Rating>
                                                    </td>
                                                    <th>
                                                        <Link to={`/update-book/${item._id}`}>
                                                            <button className="px-2 py-1 text-lg font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-accent rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Update</button>
                                                        </Link>
                                                    </th>
                                                </tr>
                                            </tbody>


                                        )
                                    }
                                    {/* table lower part  */}

                                </table>
                            </div>

                        </div>

                    </div>)}
                {/* List complete  */}
            </div>
        </div>

    );
};

export default AllBooks;










