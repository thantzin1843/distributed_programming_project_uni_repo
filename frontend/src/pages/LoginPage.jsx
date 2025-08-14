import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* Left side with blue gradient and text */}
        <div className="md:w-1/2 bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 p-12 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-extrabold mb-4 tracking-wide">Welcome Back!</h2>
          <p className="mb-8 text-lg opacity-90">
            Login to your account to access all features and enjoy personalized content.
          </p>
          <div className="mt-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919600.png"
              alt="Login Illustration"
              className="w-48 mx-auto opacity-80"
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="md:w-1/2 p-12">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800">Sign In</h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 rounded-xl text-white font-semibold text-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
