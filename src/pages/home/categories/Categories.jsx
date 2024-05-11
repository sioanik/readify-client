import { Link } from "react-router-dom";


const Categories = ({ cats }) => {
   const {image, about, category} = cats
    // console.log(cats);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{category}</h2>
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                        <Link to={`categories/${category}`}>
                        <button className="btn btn-warning">Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;