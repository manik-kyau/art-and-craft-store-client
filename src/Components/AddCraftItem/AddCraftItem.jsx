
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { Fade } from 'react-awesome-reveal';


const AddCraftItem = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        const itemName = form.itemName.value;
        const subName = form.subName.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stockstatus = form.stockstatus.value;
        const time = form.time.value;
        const customization = form.customization.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const craft = { itemName, subName, photo, description, price, rating, time, stockstatus, customization, userName, userEmail }
        console.log(craft);

        // send data to the server
        fetch('http://localhost:5000/crafts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Craft Added Successfully Done.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <>
            <Helmet>
                <title>Add Craft Item </title>
            </Helmet>
            <Fade cascade damping={0.4}>
                <div className='p-5 md:p-12 bg-[#F4F3F0] my-6 md:my-10 rounded-3xl'>
                    <div className='text-center space-y-4 '>
                        <h2 className='text-5xl font-bold'>Add New Craft</h2>
                        <p className='text-base font-medium md:w-2/3 mx-auto'>Discover endless creativity on our 'Add New Craft' page! Share your latest craft, connect with fellow crafters, and let your imagination soar. It's easy: just give your craft a title, describe it, list the materials, and inspire others</p>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleAddCraft}>
                        <div className='mt-6'>
                            {/* I name & S name */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Item Name</span>
                                    <input type="text" name='itemName' placeholder="Enter Item Name" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Subcategory Name</span>
                                    <input type="text" name='subName' placeholder="Enter subcategory name" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            {/* image & description */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Photo URL</span>
                                    <input type="text" name='photo' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Description</span>
                                    <input type="text" name='description' placeholder="Enter Description" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            {/* price & rating */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Price </span>
                                    <input type="text" name='price' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Rating</span>
                                    <input type="text" name='rating' placeholder="Enter Rating" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            {/* customization & stock status */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Customization </span>
                                    <input type="text" name='customization' placeholder="Customization " required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Stock Status</span>
                                    <input type="text" name='stockstatus' placeholder="Stock Status" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            <div>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Processing Time</span>
                                    <input type="time" name='time' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            <div className='flex flex-col md:flex-row w-full my-4 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">User Email </span>
                                    <input type="text" name='userName' placeholder="Customization " required
                                        value={user.displayName} className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">User Email</span>
                                    <input type="email" name='userEmail' placeholder="Stock Status" required value={user.email} className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            <div className='mt-6'>
                                <button type="submit" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-lg w-full text-[#331A15] font-bold py-2 px-4 rounded">Add Craft</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </>
    );
};

export default AddCraftItem;