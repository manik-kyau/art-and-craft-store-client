
import { Helmet } from 'react-helmet-async';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const AllArtAndCrafts = () => {

    const craftData = useLoaderData();
    return (
        <>
            <div className='my-12'>
                <Helmet>
                    <title>All Art & Craft</title>
                </Helmet>
                <Fade direction='left'>
                    <div >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 mb-8 md:mb-12 bg-gray-100 rounded-md"
                        >All Art And Craft</h2>
                    </div>
                </Fade>
                <Fade direction='right'>
                    <div className="overflow-x-auto bg-[#F4F3F0] md:p-5 rounded-md w-full">
                        <table className=" table p-5  w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='text-lg md:text-xl font-bold'>Item Name</th>
                                    <th className='text-lg md:text-xl font-bold'>Subcategory Name</th>
                                    <th className='text-lg md:text-xl font-bold'>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    craftData.map((craft, idx) => <tr key={idx} className="hover">
                                        <th className='md:text-base md:font-semibold'>{idx + 1}</th>
                                        <th className='md:text-base md:font-semibold'>{craft.itemName}</th>
                                        <td className='md:text-base md:font-semibold'>{craft.subName}</td>
                                        <td className='flex items-center  md:text-base md:font-semibold mt-3'><BsCurrencyDollar></BsCurrencyDollar>{craft.price}</td>
                                        <td>
                                            <Link to={`/craftdetails/${craft._id}`}>
                                                <button className="btn w-full bg-[#23BE0A] hover:bg-[rgb(35,190,10)] text-xs md:text-base font-semibold text-white">View Details</button>
                                            </Link>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default AllArtAndCrafts;