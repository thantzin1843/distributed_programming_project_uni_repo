import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa6";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    universityName: '',
    universityAddress: '',
    universityWebsite: '',
    universityType: '',
    universityCountry: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with API call to submit formData
    console.log('Sign Up Request:', formData);

    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      universityName: '',
      universityAddress: '',
      universityWebsite: '',
      universityType: '',
      universityCountry: '',
    });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-16 p-8 border border-gray-300 rounded-lg shadow-md font-sans">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Thank you for your request!</h2>
        <p className="mb-6 text-blue-500">
          We have received your sign-up request to join UniRepo with your university details.
          Our team will review and get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 border border-gray-300 rounded-lg shadow-md font-sans">
    <div className ="flex items-center justify-between">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">
        <a
        href="#"
        className=" flex items-center gap-2 text-3xl font-extrabold bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent transition duration-300"
        >
        <FaGraduationCap className='text-blue-500 '/>UniRepo
        </a>
        </h1>
        <button type="button" onClick={() => window.history.back()}
            className="mb-6 px-4 py-2 bg-blue-200 text-blue-700 rounded hover:bg-blue-300 transition"
        > Back</button>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">University Sign-Up Request</h2>
      <p className="mb-8 text-blue-500">
        Please provide your details and your university information to join UniRepo.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Information */}
        <fieldset className="border border-gray-300 rounded-md p-6">
          <legend className="text-blue-700 font-semibold px-2">User  Information</legend>
          <div className="mt-4 space-y-6">
            <label className="block">
              <span className="font-semibold text-blue-500">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </fieldset>

        {/* University Information */}
        <fieldset className="border border-gray-300 rounded-md p-6">
          <legend className="text-blue-700 font-semibold px-2">University Information</legend>
          <div className="mt-4 space-y-6">
            <label className="block">
              <span className="font-semibold text-blue-500">University Name</span>
              <input
                type="text"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                required
                placeholder="Name of your university"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">University Address</span>
              <input
                type="text"
                name="universityAddress"
                value={formData.universityAddress}
                onChange={handleChange}
                required
                placeholder="Address of your university"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">University Website</span>
              <input
                type="url"
                name="universityWebsite"
                value={formData.universityWebsite}
                onChange={handleChange}
                placeholder="https://example.edu"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">University Type</span>
              <select
                name="universityType"
                value={formData.universityType}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select type</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Community">Community</option>
                <option value="Technical">Technical</option>
              </select>
            </label>
            <label className="block">
              <span className="font-semibold text-blue-500">Country</span>
              <input
                type="text"
                name="universityCountry"
                value={formData.universityCountry}
                onChange={handleChange}
                required
                placeholder="Country where university is located"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
