import React from "react";

export default function ProfilePage() {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        {/* Improved Basic Info Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 border border-blue-200 rounded-2xl p-8 shadow-md bg-white max-w-4xl mx-auto mb-10">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User Avatar"
              className="w-36 h-36 rounded-full object-cover ring-4 ring-blue-400 shadow-lg"
            />
            <button
              aria-label="Edit profile"
              className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition"
              title="Edit Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l3 3L20.5 7.5a2.121 2.121 0 00-3-3L9 13z" />
              </svg>
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-blue-900">
            <div>
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-blue-700 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                </svg>
                <span>johndoe@example.com</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422M12 14v7M12 14L5.84 10.578M18 21v-6.5" />
                </svg>
                <span><strong>University:</strong> University of Example</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8M8 17h8" />
                </svg>
                <span><strong>Faculty:</strong> Computer Science</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-6-7v7m12-7v7" />
                </svg>
                <span><strong>Student ID:</strong> 123456789</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M5 8v8a4 4 0 008 0V8" />
                </svg>
                <span><strong>Enrollment Year:</strong> 2021</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Projects Uploaded */}
          <section className="bg-blue-100 rounded-xl p-6 shadow-inner">
            <h2 className="text-xl font-semibold mb-6 border-b border-blue-300 pb-2 text-blue-800">Projects Uploaded</h2>
            <ul className="space-y-4 max-h-72 overflow-y-auto">
              <li className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-900">Smart Campus App</h3>
                  <p className="text-sm text-blue-700">A mobile app to manage campus services.</p>
                </div>
                <span className="text-sm text-blue-600 font-medium">2024</span>
              </li>
              <li className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-900">Library Management System</h3>
                  <p className="text-sm text-blue-700">Web system for managing books and loans.</p>
                </div>
                <span className="text-sm text-blue-600 font-medium">2023</span>
              </li>
              {/* Add more projects here */}
            </ul>
          </section>

          {/* Forum Activity */}
          <section className="bg-blue-100 rounded-xl p-6 shadow-inner flex flex-col space-y-8 max-h-[460px] overflow-y-auto">

            {/* Questions Asked */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b border-blue-300 pb-2 text-blue-800">Questions Asked</h2>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-md shadow">
                  <p className="font-medium text-blue-900">How to optimize React app performance?</p>
                  <p className="text-sm text-blue-600">Asked on 2024-07-15</p>
                </li>
                <li className="p-3 bg-white rounded-md shadow">
                  <p className="font-medium text-blue-900">Best database for real-time chat apps?</p>
                  <p className="text-sm text-blue-600">Asked on 2024-06-20</p>
                </li>
              </ul>
            </div>

            {/* Answers Given */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b border-blue-300 pb-2 text-blue-800">Answers Given</h2>
              <ul className="space-y-3">
                <li className="p-3 bg-white rounded-md shadow">
                  <p className="font-medium text-blue-900">React app performance can be improved by memoization.</p>
                  <p className="text-sm text-blue-600">Answered on 2024-07-16</p>
                </li>
                <li className="p-3 bg-white rounded-md shadow">
                  <p className="font-medium text-blue-900">Firebase and Socket.io work well for chat apps.</p>
                  <p className="text-sm text-blue-600">Answered on 2024-06-21</p>
                </li>
              </ul>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}
