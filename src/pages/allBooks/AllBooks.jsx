import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const AllBooks = () => {

    const allBooks = useLoaderData()

    const [books, setBooks] = useState([])
    const [available, setAvailable] = useState([])

    const availableBooks = books.filter(item => item.quantity > 0)

    useEffect(() => {
        setBooks(allBooks)
    }, [])

    // console.log(availableBooks);

    const handleAvailable = () => {
        setBooks(availableBooks)
    }

    return (
        <div>
            <div className="flex justify-center mb-20">
                <button onClick={handleAvailable} className="btn btn-neutral">Show Only Available</button>
            </div>
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

        </div>
    );
};

export default AllBooks;