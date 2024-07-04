import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaLink, FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="projects" className="py-20 mx-5 lg:mx-0  text-white">
      <div className="flex justify-center">
        <h1 className='text-4xl font-bold text-blue-400'>Projects</h1>
      </div>

      <div className="flex justify-center mt-10">
        <Tabs className="w-full max-w-6xl">
          <TabList className="flex justify-center gap-8 mb-10 border-b-2 border-blue-500">
            <Tab className="p-3 text-lg cursor-pointer bg-gray-800 rounded-t-md transition-all duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
              Wonder Tour
            </Tab>
            <Tab className="p-3 text-lg cursor-pointer bg-gray-800 rounded-t-md transition-all duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
              Tech Query
            </Tab>
            <Tab className="p-3 text-lg cursor-pointer bg-gray-800 rounded-t-md transition-all duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
              LabX
            </Tab>
          </TabList>

          {/* Wonder Tour */}
          <TabPanel>
            <div className="max-w-4xl mx-auto overflow-hidden bg-gray-800 shadow-lg rounded-lg">
              <img
                className="object-cover w-full h-[400px]"
                src="https://i.ibb.co/n1PCfBk/Screenshot-2024-07-03-234358.png"
                alt="Wonder Tour"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400">Wonder Tour</h2>
                <p className="mt-4 text-gray-300">
                  Wonder Tour: Explore the world Manage your account for personalized access, discover tourist spots globally with filters, view destinations on an interactive map, leave reviews, and share travel experiences to inspire others.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Features:</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-300">
                    <li>Enable user accounts for personalized experiences and access to exclusive features.</li>
                    <li>Provide a searchable list of tourist spots with detailed information and interactive maps for exploration.</li>
                    <li>Allow users to leave reviews, bookmark favorite spots, and share travel experiences for enhanced engagement.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Technologies used:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-500 rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Axios</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">React</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">MongoDB</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Express.js</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Firebase</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Vercel</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center mt-6">
                  <a href="https://assignment-10-343b7.web.app/" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105">
                    <FaLink className="mr-2" />
                    Live link
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-10-client"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Client site
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-10-server"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Server site
                  </a>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Tech Query */}
          <TabPanel>
            <div className="max-w-4xl mx-auto overflow-hidden bg-gray-800 shadow-lg rounded-lg">
              <img
                className="object-cover w-full h-[400px]"
                src="https://i.ibb.co/pZjRWZZ/Screenshot-2024-07-03-234612.png"
                alt="Tech Query"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400">Tech Query</h2>
                <p className="mt-4 text-gray-300">
                  TechQuery is an innovative platform offering personalized technical solutions and efficient knowledge sharing. Utilizing advanced algorithms and user-generated content, it provides tailored responses, comprehensive comparison and filtering options, and seamless integration with popular e-commerce platforms for an enhanced user experience.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Features:</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-300">
                    <li>Utilizes algorithms to suggest products based on user preferences, browsing history, and previous purchases.</li>
                    <li>Enables users to compare features, prices, and reviews, with flexible filtering options like price range, brand, specifications, and user ratings.</li>
                    <li>Incorporates reviews, ratings, and testimonials to build trust, and integrates with e-commerce platforms for smooth transitions to purchase.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Technologies used:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-500 rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Axios</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">React</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">MongoDB</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Express.js</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Firebase</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Vercel</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Jwt</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center mt-6">
                  <a href="https://final-assignment-11.web.app/" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105">
                    <FaLink className="mr-2" />
                    Live link
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-11-Client"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Client site
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-11-server"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Server site
                  </a>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* LabX */}
          <TabPanel>
            <div className="max-w-4xl mx-auto overflow-hidden bg-gray-800 shadow-lg rounded-lg">
              <img
                className="object-cover w-full h-[400px]"
                src="https://i.ibb.co/pvF9NfF/Screenshot-2024-07-03-235021.png"
                alt="LabX"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400">LabX</h2>
                <p className="mt-4 text-gray-300">
                  LabX is a centralized hub for educational resources, collaboration, and project management, tailored to the needs of students and educators in the scientific community.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Features:</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-300">
                    <li>Provides a rich database of scientific articles, research papers, and educational videos, enabling users to stay updated with the latest developments in their field.</li>
                    <li>Facilitates collaboration through discussion forums, project groups, and live chat features, promoting a vibrant scientific community.</li>
                    <li>Integrates project management tools such as task assignment, progress tracking, and file sharing, ensuring seamless teamwork and productivity.</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Technologies used:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-500 rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Axios</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">React</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">MongoDB</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Express.js</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Firebase</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Vercel</span>
                    <span className="px-2 py-1 bg-blue-500 rounded">Jwt</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center mt-6">
                  <a href="https://final-assignment-11.web.app/" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105">
                    <FaLink className="mr-2" />
                    Live link
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-11-Client"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Client site
                  </a>
                  <a
                    href="https://github.com/AyonJR/Assignment-11-server"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
                  >
                    <FaGithub className="mr-2" />
                    Server site
                  </a>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
