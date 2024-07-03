import { FaDownload } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-32">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-white text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl">Abdul Baset</h1>
                        <span className="bg-gradient-to-r from-blue-400 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent">Front End Developer</span>
                        
                        <p className="my-2 text-white max-w-xl py-6 font-light tracking-tighter">
                        I am a passionate Front-End Developer specializing in creating beautiful and functional user interfaces with Tailwind CSS and React JS. Currently, I'm expanding my expertise to include the MERN stack (MongoDB, Express.js, React JS, Node.js). I am always eager to learn new technologies and continuously improve my coding skills.
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-start">
                    <button className="flex items-center justify-center px-5 w-32 mb-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-slate-600 to-purple-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 animate-bounce">
                                <FaDownload className="mr-2" />
                                Resume
                            </button>

                    </div>

                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                      <img className="w-[400px]" src="https://i.ibb.co/Hpbcrzd/Whats-App-Image-2024-07-01-at-9-55-20-PM.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;