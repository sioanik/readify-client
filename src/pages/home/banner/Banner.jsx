import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'

import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation]}
                navigation={{ clickable: true }}

                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>

                    <div className="hero h-96" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Empower Your Mind</h1>
                                <p className="mb-5">Harness the power of literature to expand horizons and ignite inspiration.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="hero h-96" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Explore Boundless Worlds</h1>
                                <p className="mb-5">Discover an endless array of literary adventures at your fingertips.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    
                <div className="hero h-96" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Journey Through Pages</h1>
                                <p className="mb-5">Embark on captivating voyages through stories that transcend time and space.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    
                <div className="hero h-96" style={{ backgroundImage: `url(${banner4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Unlock Knowledge's Treasury</h1>
                                <p className="mb-5">Open the doors to a wealth of wisdom and imagination within books.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;