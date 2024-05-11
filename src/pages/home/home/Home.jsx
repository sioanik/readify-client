import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';

const Home = () => {
    const cats = useLoaderData()
    // console.log(cats);
    return (
        <div>
            <Banner></Banner>
            <Categories cats = {cats}></Categories>
        </div>
    );
};

export default Home;