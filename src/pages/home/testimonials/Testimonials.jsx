import axios from "axios";
import { useEffect, useState } from "react";


const Testimonials = () => {

    const [testi, setTesti] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/testimonials`)
            setTesti(data)
        }
        getData()
    }, [])

    // console.log(testi);

    return (
        <div className="w-[90%] mx-auto">
                <div className='w-[80%] mx-auto mt-20 py-5 mb-14'>
                    <p className='text-center pb-4 text-2xl font-semibold'>What Our Readers Say</p>
                    <p className='text-center'>Our readers share their love for immersive storytelling experiences.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-7">
                    {
                        testi.map((item, idx) =>
                            <div key={idx}><div className="">
                                <div className="p-8 border rounded-lg dark:border-gray-700">
                                    <p className="leading-loose text-gray-500 dark:text-gray-400">{item.review}</p>

                                    <div className="flex items-center mt-8 -mx-2">
                                        <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={item.image} alt="" />

                                        <div className="mx-2">
                                            <h1 className="font-semibold text-gray-800 dark:text-white">{item.name}</h1>
                                            <span className="text-sm text-gray-500">{item.professional}</span>
                                        </div>
                                    </div>
                                </div>


                                {/* Repeat similar structure for other testimonials */}
                            </div></div>
                        )
                    }
                </div>
        </div>
    );
};


export default Testimonials;