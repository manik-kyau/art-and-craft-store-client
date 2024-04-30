import { BsCurrencyDollar } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SubCategory = ({ craft }) => {
    const { _id, itemName, subName, customization, description, photo, price, rating, stockstatus, time } = craft;
    return (
        <div className="">
            <Link >
                <div className="card card-compact bg-base-100 border hover:shadow-xl rounded-lg mt-10">
                    <img src={photo} className="h-[250px] rounded-t-md" alt="Shoes" />
                    <div className="card-body">
                        <h2 className="text-xl font-bold">{itemName.slice(0, 20)}</h2>
                        <p className="text-lg font-medium">{subName.slice(0, 18)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
SubCategory.propTypes = {
    craft: PropTypes.object.isRequired,
}

export default SubCategory;