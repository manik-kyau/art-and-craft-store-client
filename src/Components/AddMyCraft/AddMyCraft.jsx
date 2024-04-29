import { BsCurrencyDollar } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const AddMyCraft = ({ craft, crafts, setCrafts }) => {
    const { _id, itemName, customization, time, photo, price, rating, stockstatus, } = craft;

    const handleDelete = (_id) => {
        // console.log("object",id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            const remaining = crafts.filter(craf => craf._id !== _id);
                            setCrafts(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-5 mg:gap-8 rounded-[8px] border bg-[#F5F4F1] p-5 md:p-7">
                <img className="lg:md-[230px] md:w-[200px] rounded-md" src={photo} alt="Movie" />
                <div className=" w-full">
                    <div className="space-y-4">
                        <div>
                            <h2 className="card-title text-3xl"> {itemName}</h2>
                            {/* <h2 className="text-xl font-semibold mt-2"> {subName}</h2> */}
                        </div>

                        {/*  */}
                        <div className="space-y-4">
                            <h2 className=""><span className="text-base font-bold">Stock Status:</span> {stockstatus}</h2>
                            <h2><span className="text-base font-bold">Customization:</span> {customization}</h2>
                        </div>
                        {/*  */}
                        <div className='flex items-center gap-10 border-dashed border-b-2 pb-5'>
                            <h2 className='flex items-center gap-1'><span className="text-base font-bold">Price: </span><BsCurrencyDollar></BsCurrencyDollar>{price}</h2>
                            <h2 className='flex items-center gap-1'><IoStarHalfSharp></IoStarHalfSharp> {rating}</h2>
                            <h2 className="flex gap-2 items-center">
                                <MdAccessTime></MdAccessTime>
                                {time}
                            </h2>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-5 mt-5">
                            <Link to={`/updateCraft/${_id}`}>
                                <button className="btn join-item text-white bg-[#a08460] hover:bg-[#D2B48C] px-8">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#EA4744] text-white hover:bg-[#EA4744] px-8">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
AddMyCraft.propTypes ={
    craft: PropTypes.object,
    setCrafts: PropTypes.func,
    crafts: PropTypes.array,
}
export default AddMyCraft;