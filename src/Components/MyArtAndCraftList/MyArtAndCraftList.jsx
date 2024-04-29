import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AddMyCraft from '../AddMyCraft/AddMyCraft';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const MyArtAndCraftList = () => {

    const { user } = useContext(AuthContext);
    const [crafts, setCrafts] = useState([]);
    const [userCraft, setUserCraft] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myArtAndCraft/${user?.userEmail}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
            })
    }, [user])

    // filter single user art
    const remaining = crafts.filter(craf => craf.userEmail == user.email);
    // setUserCraft(remaining)

    const handleChange = (event) => {
        // console.log(event.target.value);
        const customize = event.target.value;
        
      };

    return (
        <div>
            <Helmet>
                <title>My Art And Craft</title>
            </Helmet>
            <Fade direction='left'>
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-[#F4F3F0] rounded-md">My Art And Crafts</h2>
                </div>
            </Fade>
            <Fade cascade damping={0.2}>
                <div className='flex justify-center py-4'>
                    <select className='text-xl font-semibold bg-[#23BE0A] px-3 py-3 rounded-md text-white outline-none' name="" id="" onChange={handleChange}>
                        <option className='bg-white text-black' value="">Customization</option>
                        <option className='bg-white text-black' value="Customization Yes">Customization Yes</option>
                        <option className='bg-white text-black' value="Customization No">Customization No</option>
                    </select>
                </div>
            </Fade>
            <Fade direction='right'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-10'>
                    {
                        remaining .map((craft, idx) => <AddMyCraft
                            key={idx}
                            craft={craft}
                            crafts={crafts}
                            setCrafts={setCrafts}
                        ></AddMyCraft>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default MyArtAndCraftList;