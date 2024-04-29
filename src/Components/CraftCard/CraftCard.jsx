import { BsCurrencyDollar } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import PropTypes from 'prop-types';
import { IoArrowForward } from "react-icons/io5";

const CraftCard = ({ craft }) => {
    // console.log(craft);
    const { _id, itemName, subName, customization,description, photo, price, rating, stockstatus, time } = craft;
    return (
        <div>
            <div className=" hover:shadow-xl">
                <img src={photo} className="h-[450px] w-full" alt="Shoes" />
                <div className=" px-6 py-7">
                    <div className="space-y-4">
                        <div className="text-center">
                            <h2 className="text-3xl text-center font-bold"> {itemName.slice(0,20)}</h2>
                            <h2 className="text-lg font-semibold mt-4"> {description.slice(0,100)}</h2>
                        </div>

                        {/*  */}
                        {/* <div className="space-y-4">
                            <h2 className=""><span className="text-base font-bold">Stock Status:</span> {stockstatus}</h2>
                            <h2><span className="text-base font-bold">Sustomization:</span> {customization}</h2>
                        </div> */}
                        {/*  */}
                        <div className='flex items-center justify-around pb-3'>
                            <h2 className='flex items-center gap-1'><span className="text-base font-bold">Price: </span><BsCurrencyDollar></BsCurrencyDollar>{price}</h2>
                            <h2 className='flex items-center gap-1'><IoStarHalfSharp></IoStarHalfSharp> {rating}</h2>
                            <h2 className="flex gap-2 items-center">
                                <MdAccessTime></MdAccessTime>
                                {time}
                            </h2>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-2">
                        <Link to={`/craftdetails/${_id}`}>
                            <button className="flex items-center gap-2 text-[#23BE0A] text-xl font-semibold ">View Details <IoArrowForward></IoArrowForward></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
CraftCard.propTypes ={
    craft: PropTypes.object.isRequired,
}
export default CraftCard;