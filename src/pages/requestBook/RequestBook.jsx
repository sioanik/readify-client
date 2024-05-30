import { useContext } from "react";
import { AuthContext } from "../user/AuthProvider";
import Swal from "sweetalert2";

const RequestBook = () => {

    const { user } = useContext(AuthContext)

    const handleRequestBook = (e) => {
        e.preventDefault()


        const form = e.target
        const name = form.book_name.value
        const author = form.author.value
        const username = form.username.value
        const email = form.useremail.value

        const category_Field = document.getElementById('category')
        const category = category_Field.value




        const reqBook = { name, category, author, username, email }

        // console.log(reqBook);


        fetch(`${import.meta.env.VITE_API_URL}/request-books`, {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBook),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book requested successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
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
        <div>
            <div>
                <div className='w-[90%] mx-auto'>
                    <div className='w-[80%] mx-auto mt-10 py-5 mb-5'>
                        <p className='text-center pb-4 text-2xl font-semibold'>Request Book</p>
                        <p className='text-center'>Expand your literary universe. Request to add your favorite book to our library's collection</p>
                    </div>
                </div>
                <div className="mt-10 px-10 mx-auto">
                    <form onSubmit={handleRequestBook}>
                        <div className="flex justify-center gap-6">
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Book Name</span>
                                    </div>
                                    <input type="text" name="book_name" placeholder="Enter Book Name" className="input input-bordered w-full max-w-xs" />

                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Category Name</span>
                                    </div>
                                    <select className="input input-bordered w-full max-w-xs" name="" id="category">
                                        <option value="">Select</option>

                                        <option value="Novel">Novel</option>

                                        <option value="Thriller">Thriller</option>

                                        <option value="Biography">Biography</option>

                                        <option value="History">History</option>

                                    </select>

                                </label>




                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Author</span>
                                    </div>
                                    <input type="text" name="author" placeholder="Enter Author" className="input input-bordered w-full max-w-xs" />

                                </label>



                            </div>
                            <div>


                            </div>
                        </div>
                        <div className="flex justify-center">

                        </div>
                        <div className="flex justify-center">

                        </div>

                        <div className="flex justify-center mt-4">
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">User Email</span>
                                    </div>
                                    <input type="email" name="useremail" placeholder="User Email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" disabled />

                                </label>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">User Name</span>
                                    </div>
                                    <input type="text" name="username" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" disabled />

                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <input className="btn  btn-neutral mt-8" type="submit" value="Add Book" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestBook;