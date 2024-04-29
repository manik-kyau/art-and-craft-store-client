
import { useLoaderData, useParams } from 'react-router-dom';
import { BsCurrencyDollar } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdAccessTime } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const CraftDetails = () => {
    const totalCraft = useLoaderData();
    const { id } = useParams();
    const singleCraft = totalCraft.find(data => data._id == id);
    const { itemName, subName, customization, description, photo, price, rating, stockstatus, time, userEmail, userName } = singleCraft;

    // console.log(singleCraft);
    return (
        <div className='my-12'>
            <Helmet>
                <title>Art&Craft Details</title>
            </Helmet>
            <Fade direction='left'>
                <div >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 mb-8 md:mb-12 bg-gray-100 rounded-md"
                    >Art And Craft Details</h2>
                </div>
            </Fade>
            <Fade direction='right'>
                <div className=" bg-base-200 px-6 md:px-10 py-7 md:py-14 rounded-md ">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
                        <div className='w-full lg:w-[800px]'>
                            <img src={photo} className="h-full w-full rounded-lg " />
                        </div>
                        <div className='w-full'>
                            <h1 className="text-4xl lg:text-5xl font-bold">{itemName}</h1>
                            <h2 className='text-3xl font-semibold mt-4'>{subName}</h2>
                            <p className="py-6 text-base font-medium">{description}</p>
                            <div className="space-y-4">
                                {/*  */}
                                <div className="space-y-4">
                                    <h2 className=""><span className="text-lg font-bold">Stock Status:</span> <span className='text-base font-medium ml-2'>{stockstatus}</span></h2>
                                    <h2><span className="text-lg font-bold">Sustomization:</span> <span className='text-base font-medium ml-2'>{customization}</span></h2>
                                </div>
                                {/*  */}
                                <div className='flex items-center gap-10 pb-3'>
                                    <h2 className='flex items-center gap-1'><span className="text-lg font-bold">Price: </span  ><BsCurrencyDollar className='text-xl'></BsCurrencyDollar><span className='text-base font-medium'>{price}</span></h2>
                                    <h2 className='flex items-center gap-1'><IoStarHalfSharp className='text-xl'></IoStarHalfSharp><span className='text-base font-medium'>{rating}</span></h2>
                                    <h2 className="flex gap-2 items-center">
                                        <MdAccessTime className='text-xl'></MdAccessTime>
                                        <span className='text-base font-medium'>{time}</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold mt-3'>Painter:</h2>
                                <h2 className='text-lg font-semibold  mt-2'>Name: {userName}</h2>
                                <h2 className='text-lg font-semibold'>Email: {userEmail}</h2>
                            </div>
                            <div className="pt-4">
                                <button className=" px-8 rounded-3xl py-2 bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Reserve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CraftDetails;