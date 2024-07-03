import React from 'react';

const AboutMe = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='mt-20 text-blue-400  text-center text-3xl'>About
                <span className='text-white'> Me</span>
            </h1>
            <div className='flex flex-wrap justify-center items-center'>
                <div className=' lg:p-4'>
                

                </div>
                <div className=''>
                  <div className='flex justify-center lg:justify-start'> 
                   <p className='my-2 max-w-xl py-6'>Hello! I'm Abdul Baset, a creative Front-End Developer specializing in Tailwind CSS and React JS, passionate about transforming ideas into engaging digital experiences. Currently, I'm expanding my skills with the MERN stack (MongoDB, Express.js, React JS, Node.js), always eager to learn and stay ahead in web development. When I'm not coding, I explore new tech, contribute to open-source projects, and share insights with the developer community. Let's collaborate to bring your vision to life!</p>
                  </div>

                </div>
                
            </div>
        </div>
    );
};

export default AboutMe;