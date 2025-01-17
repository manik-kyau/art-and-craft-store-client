import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import User from '../../assets/images/user.png'

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme]);

    const { user, logOut } = useContext(AuthContext);

    const NavItems = <>
        <li><NavLink to='/'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Home</NavLink></li>
        <li><NavLink to='/allArt&Craft'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >AllArt&Craft</NavLink></li>
        {/* {
            user && <li><NavLink to='/allArt&Craft'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >AllArt&Craft</NavLink></li>
        } */}
        {
            user && <li><NavLink to='/addCraft'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >AddCraftItem</NavLink></li>
        }
        {
            user && <li><NavLink to='/myArt'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >MyArt&Craft</NavLink></li>
        }
        {
            user && <li><NavLink to='/contact'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >Contact Us</NavLink></li>
        }

    </>

    const handleLogOut = () => {
        logOut()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('retro');
        }
        else {
            setTheme('light');
        }
    }

    return (
        <div>
            <div className="navbar justify-between bg-base-100 mt-8 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold text-[#131313]">Art<span className="text-[#23BE0A]">Gallery</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end w-full md:w-[450px]">
                    <div className="mr-3">

                        <label className="swap swap-rotate">
                            <input
                                onChange={handleToggle}
                                type="checkbox"
                                className="theme-controller"
                                value="retro"
                            />
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>

                    {
                        user && <div className="relative containr">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full mr-">
                                    <img alt="Tailwind CSS Navbar component" src={user ? user?.photoURL : User} />
                                </div>
                            </div>
                            <div className="content space-y-2 p-4 absolute z-10 w-[130px] -right-[5px] md:-right-[30px] bg-white shadow-2xl text-white hidden rounded-xl">
                                <h2 className="text-center text-black font-semibold">{user?.displayName}</h2>

                                <h3>
                                    {
                                        user && <div className="">
                                            <button onClick={handleLogOut} className="btn w-full bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-base font-semibold">LogOut</button>
                                        </div>
                                    }
                                </h3>
                            </div>
                        </div>
                    }
                    <div>
                        {
                            user ? "" : <Link to='/register'>
                                <button className="btn mr-5 hover:bg-[#23BE0A] text-lg font-semibold hover:text-white">Register</button>
                            </Link>
                        }
                        {
                            user ? "" : <Link to='/login' className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Login
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;