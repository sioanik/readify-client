import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';

const Home = () => {
    const cats = useLoaderData()
    // console.log(cats);
    return (
        <div>
            <Banner></Banner>
            <div className='mx-10 mt-20 grid grid-cols-2 gap-6'>
            {
                cats.map((item,idx) => <Categories key={idx} cats = {item}></Categories>)
            }
            </div>
        </div>
    );
};

export default Home;