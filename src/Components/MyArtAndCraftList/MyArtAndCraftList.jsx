import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AddMyCraft from '../AddMyCraft/AddMyCraft';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
import Select from 'react-select'

const MyArtAndCraftList = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [crafts, setCrafts] = useState([]);
    const [selactCustomization, setSelectCustomization] = useState(null);

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-delta.vercel.app/myArtAndCraft/${user?.userEmail}`)
            .then(res => res.json())
            .then(data => {
                const remaining = data.filter(craf => craf.userEmail == user.email);
                console.log(remaining);
                setCrafts(remaining);
            })
    }, [user])

    const customizations = Array.from(
        new Set(crafts.map((res) => res.customization))
    )

    const customizationOptions = customizations.map((customization) => ({
        value: customization,
        label: customization
    }))

    const filterCrafts = selactCustomization ? crafts.filter((craf) => craf.customization === selactCustomization.value) : crafts;

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
                <div className='flex justify-center relative py-4 pb-10 z-12'>

                    <Select
                        options={customizationOptions}
                        isClearable
                        placeholder='select Customization'
                        onChange={(selectOption) => setSelectCustomization(selectOption)}
                        value={selactCustomization}
                        className='min-w-[250px] h-8'
                    >
                    </Select>
                </div>
            </Fade>
            <Fade direction='right'>
                <div >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-14'>
                        {
                            filterCrafts.map((craft, idx) => <AddMyCraft
                                key={idx}
                                craft={craft}
                                crafts={crafts}
                                setCrafts={setCrafts}
                            ></AddMyCraft>)
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default MyArtAndCraftList;