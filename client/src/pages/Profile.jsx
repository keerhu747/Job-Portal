import { useState } from "react";

export default function Profile() {
  const [step] = useState(1);

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md px-10 py-8">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-black">
          Create your Profile
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Step {step} of 3 · Basic Details
        </p>

        {/* Progress */}
        <div className="mt-4 h-2 w-full bg-gray-200 rounded">
          <div className="h-2 bg-blue-600 rounded w-1/4"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-16 mt-6 text-sm font-medium">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Basic Info
          </span>
          <span className="text-gray-600">Education & Skills</span>
          <span className="text-gray-600">Experience</span>
        </div>

        <hr className="my-6" />

        {/* Section */}
        <h3 className="text-xl font-semibold text-black mb-1">
          Let’s Start with the basics
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Please provide your contact details and a resume so employers can reach you.
        </p>

        {/* FORM */}
        <form className="space-y-8">

          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input className="input" placeholder="Jane" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Last Name
              </label>
              <input className="input" placeholder="Doe" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Location
              </label>
              <input className="input" placeholder="Enter the location" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input className="input" placeholder="john@gmail.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input className="input" placeholder="9876543210" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Enter Password <span className="text-red-500">*</span>
              </label>
              <input type="password" className="input" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input type="password" className="input" />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Upload your resume / CV <span className="text-red-500">*</span>
            </label>

            <div className="w-full border-2 border-dashed border-gray-400 rounded-lg py-10 text-center">
              <p className="text-blue-600 font-medium cursor-pointer">
                Click to upload or drag & drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, DOC, DOCX (max 5MB)
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-2 border border-gray-400 rounded-md"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-8 py-2 bg-blue-600 text-white rounded-md"
            >
              Continue
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
