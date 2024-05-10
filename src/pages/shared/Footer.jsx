import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <a href="#">
                            <p className="text-2xl font-extrabold">Readify!</p>
                        </a>

                        <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Unlock the world of knowledge with our vast collection. Explore, discover, and delve into the realm of books with ease.</p>

                        
                    </div>

                    <hr className="my-10 border-gray-200 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500">© Copyright 2024. All Rights Reserved.</p>

                        <div className="flex mt-3 -mx-2 sm:mt-0">
                            <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> <FaFacebook /> </a>

                            <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> <FaTwitter /> </a>

                            <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> <AiFillInstagram /> </a>
                        </div>
                    </div>
                </div>
            </footer>




        </div>
    );
};

export default Footer;