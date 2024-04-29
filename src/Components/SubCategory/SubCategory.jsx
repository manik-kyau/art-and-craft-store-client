import { BsCurrencyDollar } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SubCategory = ({ craft }) => {
    const { _id, itemName, subName, customization, description, photo, price, rating, stockstatus, time } = craft;
    return (
        <div className="">
            <div className="card card-compact bg-base-100 border hover:shadow-xl rounded-lg mt-10">
                <img src={photo} className="h-[300px] rounded-t-md" alt="Shoes" />
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{itemName.slice(0,20)}</h2>
                    <p className="text-2xl font-medium">{subName}</p>
                    <p className="text-base font-medium">{description.slice(0, 200)}</p>
                    {/*  */}
                    <div className="space-y-4 mt-2">
                        <h2 className="text-base font-medium"><span className="text-base font-bold mr-1">Stock Status:</span> {stockstatus}</h2>
                        <h2 className="text-base font-medium"><span className="text-base font-bold mr-1">Customization:</span> {customization}</h2>
                    </div>
                    {/*  */}
                    <div className='flex items-center gap-10 pb-3'>
                        <h2 className='flex items-center gap-1'><span className="text-base font-bold">Price: </span><BsCurrencyDollar></BsCurrencyDollar>{price}</h2>
                        <h2 className='flex items-center gap-1'><IoStarHalfSharp></IoStarHalfSharp> {rating}</h2>
                        <h2 className="flex gap-2 items-center">
                            <MdAccessTime></MdAccessTime>
                            {time}
                        </h2>
                    </div>
                    <div className="">
                        <Link to={`/craftdetails/${_id}`}>
                            <button className="btn text-lg text-white font-semibold w-full bg-[#23BE0A] hover:bg-[#23BE0A] mb-4">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
SubCategory.propTypes ={
    craft: PropTypes.object.isRequired,
}

export default SubCategory;