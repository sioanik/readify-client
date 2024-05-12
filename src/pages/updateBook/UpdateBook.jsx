import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../user/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {

    const { user } = useContext(AuthContext)

    const { id } = useParams()
    // console.log(id);

    const [item, setItem] = useState({})


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/update-book/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                // console.log(data);
            })
    }, [id])
    // console.log(item);

    const handleUpdateBook  = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.book_name.value
        const author = form.author.value
        const image = form.image.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value
        const contents = form.contents.value
        const username = form.username.value
        const email = form.useremail.value

        const category_Field = document.getElementById('category')
        const category = category_Field.value




        const newBook = { name, category, author, image, rating, quantity, description, contents, username, email }

        console.log(newBook);

        fetch(`${import.meta.env.VITE_API_URL}/update-book/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book updated successfully',
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
                <div className="w-[80%] mx-auto my-14">
                    <p className="text-2xl text-center py-8">Update Book</p>
                    <p className="text-center md:px-20">Update your existing book here</p>
                </div>
                <div className="mt-10 px-10 mx-auto">
                    <form onSubmit={handleUpdateBook}>
                        <div className="flex justify-center gap-6">
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Book Name</span>
                                    </div>
                                    <input defaultValue={item.name} type="text" name="book_name" placeholder="Enter Book Name" className="input input-bordered w-full max-w-xs" />

                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Category Name</span>
                                    </div>
                                    <select className="input input-bordered w-full max-w-xs" name="" id="category">
                                        <option value="">{item.category}</option>

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
                                    <input defaultValue={item.author} type="text" name="author" placeholder="Enter Author" className="input input-bordered w-full max-w-xs" />

                                </label>



                            </div>
                            <div>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Image</span>
                                    </div>
                                    <input defaultValue={item.image} type="url" name="image" placeholder="Enter Image url" className="input input-bordered w-full max-w-xs" />

                                </label>



                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Rating</span>
                                    </div>
                                    <input defaultValue={item.rating} type="number" name="rating" placeholder="Enter Rating" className="input input-bordered w-full max-w-xs" min="0" max="5" step="any" />

                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Quantity</span>
                                    </div>
                                    <input defaultValue={item.quantity} type="number" name="quantity" placeholder="Enter Available Quantity" className="input input-bordered w-full max-w-xs" min={0} />

                                </label>


                            </div>
                        </div>
                        <div className="flex justify-center">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">Short Book Description</span>
                                </div>

                                <textarea defaultValue={item.description} type="text" name="description" placeholder="Enter Short Description" className="input input-bordered w-full max-w-md"></textarea>

                            </label>
                        </div>
                        <div className="flex justify-center">
                            <label className="form-control w-full max-w-md">
                                <div className="label">
                                    <span className="label-text">Book Contents</span>
                                </div>
                  

                                <textarea defaultValue={item.contents} type="text" name="contents" placeholder="Enter Book Contents" className="input input-bordered w-full max-w-md"></textarea>

                            </label>
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
                            <input className="btn  btn-primary mt-8" type="submit" value="Update Book" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;