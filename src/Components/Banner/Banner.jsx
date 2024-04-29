import { IoArrowForwardOutline } from "react-icons/io5";
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';
import Banner4 from '../../assets/images/banner4.webp';
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-3xl">
                <div id="slide1" className="carousel-item h-[600px] relative w-full">
                    <div className=' relative h-[600px] w-full'>
                        <img src={Banner4} className="w-full rounded-3xl h-[600px]" />

                        <div className='absolute top-0 h-full bg-black bg-opacity-50 py-8 md:py-[100px] px-8 md:px-[150px] lg:px-[250px] space-y-10 flex flex-col justify-center rounded-3xl'>
                            <Fade direction="down">
                                <h2 className='text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-bold text-white'>Your Destination for Artistry & Craftsmanship</h2>
                            </Fade>
                            <Fade direction="in">
                                <p className='text-white text-lg text-center md:text-start '>"Welcome to ZeroArtGallery: Where Boundaries Fade and Creativity Knows No Limits! Immerse Yourself in a World of Avant-Garde Artistry and Unconventional Expression. Explore, Engage, and Experience the Power of Art Beyond Conventional Boundaries. Join Us in Redefining the Artistic Landscape. Dare to Discover the ZeroArtGallery Experience Today!"</p>
                            </Fade>
                            <Fade direction="up">
                                <div className="text-center md:text-start">
                                    <button className='btn text-lg bg-[#23BE0A] hover:bg-[#23BE0A] border-none text-white font-semibold px-5 py-2'>Learn More <IoArrowForwardOutline></IoArrowForwardOutline></button>
                                </div>
                            </Fade>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item h-[600px] relative w-full">
                    <img src={Banner2} className="w-full rounded-3xl" />
                    <div className='absolute top-0 h-full bg-black bg-opacity-50 py-8 md:py-[100px] px-8 md:px-[150px] lg:px-[250px] space-y-10 flex flex-col justify-center rounded-3xl'>
                        <Fade direction="down">
                            <h2 className='text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-bold text-white'>Your Destination for Artistry & Craftsmanship</h2>
                        </Fade>
                        <Fade direction="in">
                            <p className='text-white text-lg text-center md:text-start '>"Welcome to ZeroArtGallery: Where Boundaries Fade and Creativity Knows No Limits! Immerse Yourself in a World of Avant-Garde Artistry and Unconventional Expression. Explore, Engage, and Experience the Power of Art Beyond Conventional Boundaries. Join Us in Redefining the Artistic Landscape. Dare to Discover the ZeroArtGallery Experience Today!"</p>
                        </Fade>
                        <Fade direction="up">
                            <div className="text-center md:text-start">
                                <button className='btn text-lg bg-[#23BE0A] hover:bg-[#23BE0A] border-none text-white font-semibold px-5 py-2'>Learn More <IoArrowForwardOutline></IoArrowForwardOutline></button>
                            </div>
                        </Fade>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item h-[600px] relative w-full">
                    <img src={Banner3} className="w-full rounded-3xl" />
                    <div className='absolute top-0 h-full bg-black bg-opacity-50 py-8 md:py-[100px] px-8 md:px-[150px] lg:px-[250px] space-y-10 flex flex-col justify-center rounded-3xl'>
                        <Fade direction="down">
                            <h2 className='text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-bold text-white'>Your Destination for Artistry & Craftsmanship</h2>
                        </Fade>
                        <Fade direction="in">
                            <p className='text-white text-lg text-center md:text-start '>"Welcome to ZeroArtGallery: Where Boundaries Fade and Creativity Knows No Limits! Immerse Yourself in a World of Avant-Garde Artistry and Unconventional Expression. Explore, Engage, and Experience the Power of Art Beyond Conventional Boundaries. Join Us in Redefining the Artistic Landscape. Dare to Discover the ZeroArtGallery Experience Today!"</p>
                        </Fade>
                        <Fade direction="up">
                            <div className="text-center md:text-start">
                                <button className='btn text-lg bg-[#23BE0A] hover:bg-[#23BE0A] border-none text-white font-semibold px-5 py-2'>Learn More <IoArrowForwardOutline></IoArrowForwardOutline></button>
                            </div>
                        </Fade>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item h-[600px] relative w-full">
                    <img src={Banner1} className="w-full rounded-3xl" />
                    <div className='absolute top-0 h-full bg-black bg-opacity-50 py-8 md:py-[100px] px-8 md:px-[150px] lg:px-[250px] space-y-10 flex flex-col justify-center rounded-3xl'>
                        <Fade direction="down">
                            <h2 className='text-4xl md:text-5xl text-center md:text-start lg:text-6xl font-bold text-white'>Your Destination for Artistry & Craftsmanship</h2>
                        </Fade>
                        <Fade direction="in">
                            <p className='text-white text-lg text-center md:text-start '>"Welcome to ZeroArtGallery: Where Boundaries Fade and Creativity Knows No Limits! Immerse Yourself in a World of Avant-Garde Artistry and Unconventional Expression. Explore, Engage, and Experience the Power of Art Beyond Conventional Boundaries. Join Us in Redefining the Artistic Landscape. Dare to Discover the ZeroArtGallery Experience Today!"</p>
                        </Fade>
                        <Fade direction="up">
                            <div className="text-center md:text-start">
                                <button className='btn text-lg bg-[#23BE0A] hover:bg-[#23BE0A] border-none text-white font-semibold px-5 py-2'>Learn More <IoArrowForwardOutline></IoArrowForwardOutline></button>
                            </div>
                        </Fade>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;