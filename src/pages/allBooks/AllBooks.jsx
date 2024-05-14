import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import axios from "axios";
import { AuthContext } from "../user/AuthProvider";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";



const AllBooks = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);

    // const allBooks = useLoaderData()

    const [books, setBooks] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books?email=${user.email}`, { withCredentials: true })
            // console.log(data);
            setBooks(data)
        }
        getData()
    }, [user.email])




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
        <div className="w-[90%] mx-auto">
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
                <div className='w-[80%] mx-auto mt-10 py-5 mb-5'>
                    <p className='text-center pb-4 text-2xl font-semibold'>All Books</p>
                    <p className='text-center'>Discover our comprehensive library with a vast selection of books covering various genres, interests, and topics for every reader.</p>
                </div>

                <div className="flex justify-center mb-20">
                    <button onClick={handleAvailable} className="btn btn-neutral">Show Only Available</button>
                </div>
            </div>
            <div>
                {view == 'grid' ? (
                    <div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
                            {
                                books.map((item, idx) =>
                                    <div className="" key={idx}>
                                        <div className="border-4 overflow-hidden text-center rounded-lg shadow-lg">
                                            <div className="px-4 py-2">
                                                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
                                                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{item.category}</p>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"><span>Author- </span>{item.author}</p>
                                            </div>

                                            <img className="object-contain w-full h-48 my-3" src={item.image} alt="" />

                                            <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 py-2 bg-slate-300">
                                                {/* <h1 className="text-lg font-bold text-white"></h1> */}
                                                {/* <div className="">
                                                    <Rating
                                                        initialRating={item.rating}></Rating>
                                                </div> */}
                                                <div className="">
                                                    <Rating
                                                        emptySymbol={<FaRegStar />
                                                    }
                                                        fullSymbol={<FaStar />
                                                    }
                                                    initialRating={item.rating}
                                                    />
                                                </div>
                                                <Link to={`/update-book/${item._id}`}>
                                                    <button className="btn btn-sm btn-neutral my-5 lg:my-0">Update</button>
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
                                <table className="table md:table-xs">
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
                                                    <td className="">
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
                                                    <td className="min-w-20">
                                                    <Rating
                                                        emptySymbol={<FaRegStar />
                                                    }
                                                        fullSymbol={<FaStar />
                                                    }
                                                    initialRating={item.rating}
                                                    />
                                                    </td>
                                                    <th>
                                                        <Link to={`/update-book/${item._id}`}>
                                                            <button className="btn btn-neutral my-5 lg:my-0  ">Update</button>
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










