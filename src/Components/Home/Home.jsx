
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import CraftCard from '../CraftCard/CraftCard';
import Team from '../Team/Team';
import ArtGallery from '../ArtGallery/ArtGallery';
import { Fade } from 'react-awesome-reveal';
import SubCategory from '../SubCategory/SubCategory';

const Home = () => {
    const loadedCraft = useLoaderData();
    return (
        <>
            <Helmet>
                <title>ArtGallery | Home</title>
            </Helmet>
            <div className='my-12'>
                <Banner></Banner>
                <Fade cascade damping={0.2}>
                    <div className='my-14'>
                        <Fade direction='left'>
                            <div className='text-center space-y-4'>
                                <h2 className='text-[40px] font-bold'>A Collection of Artisanal Creations</h2>
                                <p className='w-full md:w-2/3 mx-auto text-base font-semibold'>Indulge in the timeless charm of our artisanal creations, meticulously crafted to perfection. Each piece in our collection embodies the essence of artisanal skill and creativity, showcasing the beauty of handcrafted artistry. From intricately designed jewelry to exquisitely woven textiles, every item tells a story of dedication, passion, and craftsmanship.</p>
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
                                        <p className='w-full md:w-2/3 mx-auto text-base font-semibold'>
                                            An Art & Craft Store is a sanctuary for creative souls, offering a diverse array of supplies and resources to fuel artistic endeavors. Stepping into one, you're enveloped in a vibrant atmosphere, where every corner teems with color, texture, and inspiration. These stores boast an extensive selection of high-quality materials and tools, catering to various artistic pursuits such as painting, drawing, sculpting, knitting, and jewelry making.</p>
                                    </div>
                                </Fade>
                            </div>
                            <Fade direction='left'>
                                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mb-8">
                                    {
                                        loadedCraft.slice(0, 6).map((craft, idx) => <SubCategory key={idx} craft={craft}></SubCategory>)
                                    }
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