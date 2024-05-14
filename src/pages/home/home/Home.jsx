import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import Testimonials from '../testimonials/Testimonials.jsx';
import Authors from '../authors/Authors.jsx';

const Home = () => {
    const cats = useLoaderData()
    // console.log(cats);
    return (
        <div>
            <Banner></Banner>

            <div className=''>
                <div className='w-[90%] mx-auto'>
                <div className='w-[80%] mx-auto mt-20 py-5 mb-14'>
                    <p className='text-center pb-4 text-2xl font-semibold'>Explore Book Categories</p>
                    <p className='text-center'>Explore our diverse collection of book categories, ranging from fiction to non-fiction, mysteries to romance, and more.</p>
                </div>
                </div>
                <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        cats.map((item, idx) => <Categories key={idx} cats={item}></Categories>)
                    }
                </div>
            </div>
            <Testimonials></Testimonials>
            <Authors></Authors>
        </div>
    );
};

export default Home;