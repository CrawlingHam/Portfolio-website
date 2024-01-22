import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (

        /*--------------------Background Images For Website---------------------------------*/
        <div id="main">
            <img className="w-full h-screen object-cover fade-bg blur-sm" src="https://waste-management-world.com/imager/media/wasteManagementWorld/2423109/WMW5_Grafik_428fd902f4247199467725e7eccf1673.jpg"></img>
            <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
                <div className="max-w-[7] m-auto h-full w-full flex flex-col justify-center lg-items-start items-center">
                    {/*----------Introduction To Website----------*/}
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-100"> Hi, I'm Ham</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-100">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I am a Mice',
                                1500, // wait 1s before replacing "Mice" with "Hamsters"
                                'I am a Hamsters',
                                1500,
                                'I am a Guinea Pigs',
                                1500,
                            ]}
                            wrapper="span"
                            speed={ 50 }
                            style={{ fontSize: '1em', display: 'inline-block', color: 'white', paddingLeft: '5px' }}
                            repeat={ Infinity }
                            />
                    </h2>

                    {/*----------------------Contacts + Redirections----------------------*/}
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <div onClick={ () => window.location.href="http://localhost:5173/"}>
                            <FaTwitter style={{ color: 'white' }} className="cursor-pointer shadow-gray-100 cursor-pointer hover:scale-110 ease-in duration-300" size={ 25 }/>
                        </div>
                        <div onClick={ () => window.location.href="http://localhost:5173/"}>
                            <FaFacebookF style={{ color: 'white' }} className="cursor-pointer shadow-gray-100 cursor-pointer hover:scale-110 ease-in duration-300" size={ 25 }/>
                        </div>
                        <div onClick={ () => window.location.href="http://localhost:5173/"}>
                            <FaInstagram style={{ color: 'white' }} className="cursor-pointer shadow-gray-100 cursor-pointer hover:scale-110 ease-in duration-300" size={ 25 }/> 
                        </div>
                        <div onClick={() => window.location.href="https://www.linkedin.com/in/abdullahi-f-664798298"}>
                            <FaLinkedinIn style={{ color: 'white' }} className="cursor-pointer shadow-gray-100 cursor-pointer hover:scale-110 ease-in duration-300" size={ 25 }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;