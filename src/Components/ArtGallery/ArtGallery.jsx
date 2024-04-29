import React from 'react';
import G1 from '../../assets/images/g1.jpg'
import G2 from '../../assets/images/g2.jpg'
import G11 from '../../assets/images/g11.jpg'
import G4 from '../../assets/images/g4.jpg'
import G5 from '../../assets/images/g5.jpg'
import G6 from '../../assets/images/g6.jpg'
import G7 from '../../assets/images/g7.jpg'
import G8 from '../../assets/images/g8.jpg'
import G9 from '../../assets/images/g9.jpg'
import G10 from '../../assets/images/g10.jpg'

const ArtGallery = () => {
    return (
        <div>
            <div className='text-center space-y-4'>
                <h2 className='text-[40px] font-bold'>Art And Craft Gallery</h2>
                <p className='w-2/3 mx-auto text-base font-semibold'>An Art and Craft Gallery is a space dedicated to showcasing a diverse range of artistic expressions, from traditional paintings and sculptures to contemporary installations and craftworks. These galleries often serve as vibrant hubs for cultural exchange, creativity, and appreciation of the arts.</p>
            </div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className=" grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={G1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G8} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G11} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G9} />
                    <img src={G10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default ArtGallery;