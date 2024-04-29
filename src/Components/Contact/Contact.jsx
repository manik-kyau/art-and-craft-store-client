import Lottie from "lottie-react";
import contact from "../../assets/contact.json"
import { Fade } from 'react-awesome-reveal';
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Fade direction='left'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-[#F4F3F0] rounded-md text-[#131313]"
                >About Us</h2>
            </Fade>
            <Fade direction='right'>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-12 px-8 bg-[#F4F3F0] py-16 mx-auto rounded-lg  md:pr-12 lg:pr-16 xl:pr-32 dark:bg-gray-100 dark:text-gray-800 my-12">

                    <div className="flex flex-col gap-6 items-center w-full md:w-1/2">
                        <div className="space-y-2 text-center">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                            <div className="dark:text-gray-600">Contact me any issue? We are always active here</div>
                        </div>
                        <div className="">
                            <Lottie animationData={contact} className="h-[300px] w-[400px]"></Lottie>
                        </div>
                    </div>
                    <form noValidate="" className="space-y-6 w-full md:w-1/2">
                        <div>
                            <label htmlFor="name" className="text-lg font-semibold">Full name</label>
                            <input id="name" type="text" placeholder="Enter Name:" className="w-full p-3 rounded  outline-none dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-lg font-semibold">Email</label>
                            <input id="email" type="email" placeholder="Enter Email:" className="w-full outline-none p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-lg font-semibold">Message</label>
                            <textarea id="message" rows="3" className="w-full outline-none p-3 rounded dark:bg-gray-100" placeholder="Your Message:"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600  bg-[#23BE0A] dark:text-gray-50 text-white">Send Message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;