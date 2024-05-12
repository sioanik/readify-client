import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { FaUserPen } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

import Modal from 'react-modal';
import ModalBody from "./ModalBody";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root')





const BookDetails = () => {

    const [book, setBook] = useState([])

    const { id } = useParams()
    // console.log(id);
    useEffect(() => {

        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/book-details/${id}`)
            // console.log(data);
            setBook(data)
        }
        getData()
    }, [id])
    // console.log(book);



    // modal ----------------------
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="mx-20">
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={book.image} alt="avatar" />

                <div className="flex items-center px-6 py-3 bg-gray-300">


                    <h1 className="mx-3 text-lg font-semibold text-white">
                        <Rating
                            initialRating={book.rating}></Rating>
                    </h1>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{book.name}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400">{book.description}</p>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">

                        <MdCategory />


                        <h1 className="px-2 text-sm"><span>Category- </span>
                            {book.category}
                        </h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaUserPen />
                        <h1 className="px-2 text-sm"><span>Author- </span>{book.author}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">

                        <FaCopy />

                        <h1 className="px-2 text-sm">{book.quantity} Available</h1>
                    </div>




                    <div className="pt-10 ">
                        <Link>
                            <button onClick={openModal} className="btn btn-block bg-accent ">Borrow</button>
                        </Link>

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <ModalBody book= {book} id={id}></ModalBody>
                            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form> */}
                        </Modal>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default BookDetails;