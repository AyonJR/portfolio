const Education = () => {
    return (
      <div className="flex justify-center">
        <div className="max-w-4xl py-20">
          <h1 className="text-blue-400 text-center text-3xl mb-12">Education</h1>
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-0  rounded-lg shadow-lg p-8 max-w-3xl">
              <div className="flex items-center">
                <div className="mr-6">
                  <svg
                    className="w-16 h-16 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.608 6.518M12 14L5.24 10.578a12.083 12.083 0 00-.608 6.518M12 14v7m0 0h.01M12 21h-.01"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Bachelor of Computer Science
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    2020 - Ongoing
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    East Delta University , Chattogram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  