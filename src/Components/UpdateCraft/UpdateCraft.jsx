
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const UpdateCraft = () => {
    const { id } = useParams();
    console.log(id);

    const [craft, setCraft] = useState({});

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-delta.vercel.app/singleCraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data)
                console.log(data);
            })
    },[id])

    const { itemName, subName, customization, description, photo, price, rating, stockstatus, time } = craft;
    console.log(price, time);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subName = form.subName.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stockstatus = form.stockstatus.value;
        const time = form.time.value;
        const customization = form.customization.value;
        const craft = { itemName, subName, photo, description, price, rating, time, stockstatus, customization }

        fetch(`https://art-and-craft-store-server-delta.vercel.app/updateCraft/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craft),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Craft update Successfully Done.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <>
            <Helmet>
                <title>Update Craft </title>
            </Helmet>
            <Fade cascade damping={0.4}>
                <div className='p-5 md:p-12 bg-[#F4F3F0] my-6 md:my-10 rounded-3xl'>
                    <div className='text-center space-y-4 '>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Update Existing Art & Craft Details</h2>
                        <p className='text-base font-medium w-full md:w-2/3 mx-auto pt-2'>Discover endless creativity on our 'Add New Craft' page! Share your latest craft, connect with fellow crafters, and let your imagination soar. It's easy: just give your craft a title, describe it, list the materials, and inspire others</p>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleUpdate}>
                        <div className='mt-8'>
                            {/* I name & S name */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Item Name</span>
                                    <input
                                        type="text"
                                        name='itemName'
                                        defaultValue={itemName}
                                        placeholder="Enter Item Name"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Subcategory Name</span>
                                    <input
                                        type="text"
                                        name='subName'
                                        defaultValue={subName}
                                        placeholder="Enter subcategory name"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                            </div>
                            {/* image & description */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Photo URL</span>
                                    <input
                                        type="text"
                                        name='photo'
                                        defaultValue={photo}
                                        placeholder="Enter Photo URL"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Description</span>
                                    <input
                                        type="text"
                                        name='description'
                                        defaultValue={description}
                                        placeholder="Enter Description"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                            </div>
                            {/* price & rating */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Price </span>
                                    <input
                                        type="text"
                                        name='price'
                                        defaultValue={price}
                                        placeholder="Enter Photo URL"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Rating</span>
                                    <input
                                        type="text"
                                        name='rating'
                                        defaultValue={rating}
                                        placeholder="Enter Rating"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                            </div>
                            {/* customization & stock status */}
                            <div className='flex flex-col md:flex-row w-full mb-3 gap-4 md:gap-8'>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Customization </span>
                                    
                                    <input
                                        type="text"
                                        name='customization'
                                        defaultValue={customization}
                                        placeholder="Customization: 'Yea' or 'No'"
                                        required
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Stock Status</span>
                                    <input
                                        type="text"
                                        name='stockstatus'
                                        defaultValue={stockstatus}
                                        placeholder="Stock Status"
                                        required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block w-full">
                                    <span className="mb-1 text-lg font-semibold">Processing Time</span>
                                    <input
                                        type="time"
                                        name='time'
                                        defaultValue={time}
                                        placeholder="Enter Photo URL"
                                        // required 
                                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                    />
                                </label>
                            </div>
                            <div className='mt-6'>
                                <button type="submit" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-lg w-full text-[#331A15] font-bold py-2 px-4 rounded">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </>
    );
};

export default UpdateCraft;