
import { FaLink, FaGithub } from "react-icons/fa6";


const Projects = () => {
    return (
//         <div className="border-b border-neutral-900 pb-4">
//             <h1 className="my-20 text-center text-4xl">Projects</h1>
//             <div>
//                 <div className="mb-8 flex gap-10 flex-wrap lg:justify-center">
//                     <div className="w-full lg:w-1/4">
//                     <img className="mb-6 rounded h-[200px] w-[500px]" src="https://i.ibb.co/n1PCfBk/Screenshot-2024-07-03-234358.png" alt=""   />

//                  </div>
//                  <div className="w-full max-w-xl lg:w-3/4">
//                  <h6 className="mb-2 font-semibold">Wonder Tour</h6>
//                  <p className="mb-4 text-white">Wonder Tour: Explore the world, manage your account for personalized access, discover tourist spots globally with filters, view destinations on an interactive map, leave reviews, and share travel experiences to inspire others.</p>
//                  <span className="mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-800 ">
//                  Tailwind-Css  Axios
// React
// Mongodb
// Express-js
// firebase
// vercel
//                  </span>

//                  </div>

//                 </div>
//             </div>
//         </div>

<div>
    <div className="flex justify-center">
    <h1 className='my-20 text-blue-400 text-center text-3xl'>Projects</h1>

    </div>
 
{/* card-1    */}
<div className="flex justify-center">
<div className="max-w-2xl overflow-hidden bg-opacity-0 shadow-md border rounded-lg border-blue-500">
<img
  className="object-cover w-full h-[295px] rounded-lg"
  src="https://i.ibb.co/n1PCfBk/Screenshot-2024-07-03-234358.png"
  alt="Wonder Tour"
/>

<div className="p-6">
  <div>
   
    <a
      href="#"
      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
      tabIndex="0"
      role="link"
    >
      Wonder Tour
    </a>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
    Wonder Tour: Explore the world Manage your account for personalized access, discover tourist spots globally with filters, view destinations on an interactive map, leave reviews, and share travel experiences to inspire others.
    </p>
  </div>

  <div className="mt-4">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Features:</h2>
      <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Enable user accounts for personalized experiences and access to exclusive features.</li>
        <li>Provide a searchable list of tourist spots with detailed information and interactive maps for exploration.</li>
        <li>Allow users to leave reviews, bookmark favorite spots, and share travel experiences for enhanced engagement.</li>
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Technologies used:</h2>
      {/* <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Tailwind CSS</li>
        <li>Axios</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Firebase</li>
        <li>Vercel</li>
      </ul> */}
      <div className="flex gap-3 justify-center flex-wrap lg:mt-3">
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Tailwind CSS</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Axios</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">React</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">MongoDB</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Express.js</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Firebase</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Vercel</p>
      </div>
      <div className="flex gap-4 justify-center mt-3">
      <a href="https://assignment-10-343b7.web.app/" className="flex items-center  text-blue-500 p-1 rounded-lg">
      <FaLink className="mr-2" />
      Live link
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-10-client"
      className="flex items-center  text-blue-500 p-2 rounded-lg"
    >
      <FaGithub className="mr-2" />
      Client site
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-10-server"
      className="flex items-center text-blue-500 p-3 rounded-lg "
    >
      <FaGithub className="mr-2" />
      Server site
    </a>
      </div>

    </div>

    
  </div>
</div>
</div>
</div>

{/* card-2 */}
<div className="flex justify-center mt-10">
<div className="max-w-2xl overflow-hidden bg-opacity-0 shadow-md border rounded-lg border-blue-500 ">
<img
  className="object-cover w-full h-[295px] rounded-lg"
  src="https://i.ibb.co/pZjRWZZ/Screenshot-2024-07-03-234612.png"
  alt="Wonder Tour"
/>

<div className="p-6">
  <div>
   
    <a
      href="#"
      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
      tabIndex="0"
      role="link"
    >
      Tech Query
    </a>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
 TechQuery is an innovative platform offering personalized technical solutions and efficient knowledge sharing. Utilizing advanced algorithms and user-generated content, it provides tailored responses, comprehensive comparison and filtering options, and seamless integration with popular e-commerce platforms for an enhanced user experience.
    </p>
  </div>

  <div className="mt-4">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Features:</h2>
      <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Utilizes algorithms to suggest products based on user preferences, browsing history, and previous purchases.</li>
        <li>Enables users to compare features, prices, and reviews, with flexible filtering options like price range, brand, specifications, and user ratings.</li>
        <li>Incorporates reviews, ratings, and testimonials to build trust, and integrates with e-commerce platforms for smooth transitions to purchase.</li>
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Technologies used:</h2>
      {/* <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Tailwind CSS</li>
        <li>Axios</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Firebase</li>
        <li>Vercel</li>
      </ul> */}
      <div className="flex gap-3 justify-center flex-wrap lg:mt-3">
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Tailwind CSS</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Axios</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">React</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">MongoDB</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Express.js</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Firebase</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Vercel</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Jwt</p>
      </div>
      <div className="flex gap-4 justify-center mt-3">
      <a href="https://final-assignment-11.web.app/" className="flex items-center  text-blue-500 p-1 rounded-lg">
      <FaLink className="mr-2" />
      Live link
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-11-Client"
      className="flex items-center  text-blue-500 p-2 rounded-lg"
    >
      <FaGithub className="mr-2" />
      Client site
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-11-server"
      className="flex items-center text-blue-500 p-3 rounded-lg "
    >
      <FaGithub className="mr-2" />
      Server site
    </a>
      </div>

    </div>

    
  </div>
</div>
</div>
</div>

{/* card-3 */} 

<div className="flex justify-center mt-10">
<div className="max-w-2xl overflow-hidden bg-opacity-0 shadow-md border rounded-lg border-blue-500 ">
<img
  className="object-cover w-full h-[295px] rounded-lg"
  src="https://i.ibb.co/pvF9NfF/Screenshot-2024-07-03-235021.png
"
  alt="Wonder Tour"
/>

<div className="p-6">
  <div>
   
    <a
      href="#"
      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
      tabIndex="0"
      role="link"
    >
      LabX
    </a>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
    LabX Diagnostic Center Management is a streamlined platform designed for efficient operations within diagnostic centers. It simplifies scheduling, patient management, and diagnostic test integration, featuring automated appointment booking, detailed patient records, and real-time reporting for optimized workflow and enhanced patient care.
    </p>
  </div>

  <div className="mt-4">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Features:</h2>
      <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>LabX streamlines operations within diagnostic centers with tools for scheduling, patient management, and integration of diagnostic tests, ensuring smooth workflow and improved efficiency.</li>
        <li>The platform offers detailed patient records, facilitating comprehensive tracking of patient information, medical history, and diagnostic results for better-informed decision-making and patient care.</li>
        <li>LabX provides real-time reporting capabilities and analytics tools that enable quick access to diagnostic data, helping healthcare professionals make timely and accurate clinical decisions.
</li>
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Technologies used:</h2>
      {/* <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Tailwind CSS</li>
        <li>Axios</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Firebase</li>
        <li>Vercel</li>
      </ul> */}
      <div className="flex gap-3 justify-center flex-wrap lg:mt-3">
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Tailwind CSS</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Axios</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">React</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">MongoDB</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Express.js</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Firebase</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Vercel</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Stripe</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Framer-motion</p>
        <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Tanstack-query</p>
         <p className="bg-neutral-900 text-blue-500 p-1 rounded-lg">Jwt</p>
      </div>
      <div className="flex gap-4 justify-center mt-3">
      <a href="https://final-assignment-12-ea1ec.web.app/" className="flex items-center  text-blue-500 p-1 rounded-lg">
      <FaLink className="mr-2" />
      Live link
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-12-client"
      className="flex items-center  text-blue-500 p-2 rounded-lg"
    >
      <FaGithub className="mr-2" />
      Client site
    </a>
    <a
      href="https://github.com/AyonJR/Assignment-12-server"
      className="flex items-center text-blue-500 p-3 rounded-lg "
    >
      <FaGithub className="mr-2" />
      Server site
    </a>
      </div>

    </div>

    
  </div>
</div>
</div>
</div>

</div>



    );
};

export default Projects;