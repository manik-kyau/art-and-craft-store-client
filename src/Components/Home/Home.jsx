
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import CraftCard from '../CraftCard/CraftCard';
import Team from '../Team/Team';
import ArtGallery from '../ArtGallery/ArtGallery';
import { Fade } from 'react-awesome-reveal';
import SubCategory from '../SubCategory/SubCategory';
// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const Home = () => {
    const loadedCraft = useLoaderData();
    return (
        <>
            <Helmet>
                <title>ZeroArtGallery | Home</title>
            </Helmet>
            <div className='my-12'>
                <Banner></Banner>
                <Fade cascade damping={0.2}>
                    <div className='my-14'>
                        <Fade direction='left'>
                            <div className='text-center space-y-4'>
                                <h2 className='text-[40px] font-bold'>A Collection of Artisanal Creations</h2>
                                <p className='w-2/3 mx-auto text-base font-semibold'>Indulge in the timeless charm of our artisanal creations, meticulously crafted to perfection. Each piece in our collection embodies the essence of artisanal skill and creativity, showcasing the beauty of handcrafted artistry. From intricately designed jewelry to exquisitely woven textiles, every item tells a story of dedication, passion, and craftsmanship.</p>
                            </div>
                        </Fade>
                        <Fade direction='right'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-7'>
                                {
                                    loadedCraft.slice(0, 6).map((craft, idx) => <CraftCard key={idx} craft={craft}></CraftCard>)
                                }
                            </div>
                        </Fade>
                        {/* SubCategory */}
                        <div>
                            <div>
                                <Fade direction='right'>
                                    <div className='text-center space-y-4'>
                                        <h2 className='text-[40px] font-bold'>SubCategory</h2>
                                        <p className='w-2/3 mx-auto text-base font-semibold'>Indulge in the timeless charm of our artisanal creations, meticulously crafted to perfection. Each piece in our collection embodies the essence of artisanal skill and creativity, showcasing the beauty of handcrafted artistry. From intricately designed jewelry to exquisitely woven textiles, every item tells a story of dedication, passion, and craftsmanship.</p>
                                    </div>
                                </Fade>
                            </div>
                            <Fade direction='left'>
                                <div className="flex flex-col lg:flex-row  mb-8">
                                    <Swiper
                                        breakpoints={{
                                            340: {
                                                slidesPerView: 1,
                                                spaceBetween: 16
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20
                                            },
                                            1280: {
                                                slidesPerView: 3,
                                                spaceBetween: 30
                                            }
                                        }}
                                        freeMode={true}
                                        pagination={{
                                            clickable: true
                                        }}
                                        modules={[FreeMode, Pagination]}
                                        className='w-[100%]'
                                    >
                                        {
                                            loadedCraft.slice(0, 6).map((craft, idx) => <SwiperSlide key={idx} className="flex justify-center"><div className="flex flex-col gap-6 mb-12 group"><SubCategory craft={craft}></SubCategory></div></SwiperSlide>)
                                        }
                                    </Swiper>
                                </div>
                            </Fade>
                        </div>
                        {/* <SubCategory></SubCategory> */}
                    </div>
                    <ArtGallery></ArtGallery>
                    <Team></Team>
                </Fade>
            </div>
        </>
    );
};

export default Home;