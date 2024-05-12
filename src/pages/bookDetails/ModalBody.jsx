
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../user/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";



const ModalBody = ({ book, id }) => {

    const [startDate, setStartDate] = useState(new Date());

    const { user } = useContext(AuthContext)

    console.log(book);

    const quantityNumber = parseInt(book.quantity)
    console.log(quantityNumber);


    


    const handleBorrow = (e) => {
        e.preventDefault()

        const refid = book._id
        const name = book.name
        const image = book.image
        const category = book.category
        const borrowDate = startDate
        const borrowerEmail = user.email
        const borrowerName = user.displayName

        const borrowedBook = { refid, name, image, category, borrowDate, borrowerEmail, borrowerName }
        console.log(borrowedBook);


        fetch(`${import.meta.env.VITE_API_URL}/borrowed-books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(borrowedBook),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book added successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    window.location.reload()
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong!',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })


            

    }


    return (
        <div className="border flex items-start rounded-xl min-h-80">
            <div className="px-10">
                <form onSubmit={handleBorrow} className="flex gap-9 justify-center items-center">
                    <div className="flex justify-center gap-6">
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="text-lg label-text">Return Before</span>
                                </div>
                                {/* <input type="date" name="return_date" placeholder="" className="input input-bordered w-full max-w-xs" /> */}
                                <DatePicker className="py-2" selected={startDate} onChange={(date) => setStartDate(date)} />


                            </label>

                        </div>

                    </div>

                    <div className="flex justify-center">
                        <input className="btn  btn-accent mt-8" type="submit" value="Borrow" disabled={quantityNumber === 0} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalBody;