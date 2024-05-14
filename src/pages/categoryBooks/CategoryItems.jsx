import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const CategoryItems = () => {

    const [catItems, setCatItems] = useState([])

    const { category } = useParams()
    // console.log(category);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/cat-items/${category}`)
            // console.log(data);
            setCatItems(data)


        }
        getData()
    }, [category])


    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/cat-items/${category}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCatItems(data)
    //             console.log(data);
    //         })
    // }, [])


    // console.log(catItems);
    return (
        <div className="w-[90%] mx-auto">
            <div className='w-[80%] mx-auto mt-10 py-5 mb-5'>
                <p className='text-center pb-4 text-2xl font-semibold'>Discover {category} Books</p>
                <p className='text-center'>Dive into our extensive selection of {category} books, featuring captivating stories, insightful narratives, and engaging content for every reader.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14" >
                {
                    catItems.map((item, idx) =>
                        <div className="" key={idx}>

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
                                        <Link to={`/book-details/${item._id}`}>
                                            <button className="btn btn-sm btn-neutral my-5 lg:my-0">Details</button>
                                        </Link>
                                    </div>
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
                                <div className="">
                                <Rating
                                 initialRating={item.rating}></Rating>
                                </div>
                                <Link to={`/book-details/${item._id}`}>
                                <button className="px-2 py-1 text-lg font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-accent rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Details</button>
                                </Link>
                            </div>
                        </div> */}

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryItems;