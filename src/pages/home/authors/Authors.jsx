import axios from "axios";
import { useEffect, useState } from "react";


const Authors = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/authors`)
            setAuthors(data)
        }
        getData()
    }, [])
    console.log(authors);

    return (
        <div className="w-[90%] mx-auto">
            <div className=''>
                <div className='w-[80%] mx-auto mt-20 py-5 mb-14'>
                    <p className='text-center pb-4 text-2xl font-semibold'>Authors Spotlight</p>
                    <p className='text-center'>Discover the brilliant minds behind your favorite stories</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-7">
                    {
                        authors.map((item, idx) =>
                            <div key={idx}>
                                <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <img className="object-cover w-full h-56" src={item.image} alt="avatar" />

                                    <div className="py-5 text-center">
                                        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{item.name}</a>
                                        <p className=" text-gray-700 dark:text-gray-200">{item.country}</p>
                                        <p className=" text-gray-700 dark:text-gray-200">Language- {item.language}</p>
                                        <p className=" text-gray-700 dark:text-gray-200">{item.books_count} Books Written</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Authors;