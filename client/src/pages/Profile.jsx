import { useState } from "react";

export default function Profile() {
  const [step] = useState(1);

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md px-10 py-8">

        {/* Header */}
        <h2 className="text-2xl font-semibold">Create your Profile</h2>
        <p className="text-sm text-gray-500 mt-1">
          Step {step} of 3 · Basic Details
        </p>

        {/* Progress bar */}
        <div className="mt-4 h-2 w-full bg-gray-200 rounded">
          <div className="h-2 bg-blue-600 rounded w-1/4"></div>
        </div>

        {/* Step Tabs */}
        <div className="flex gap-10 mt-6 text-sm font-medium">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Basic Info
          </span>
          <span className="text-gray-400">Education & Skills</span>
          <span className="text-gray-400">Experience</span>
        </div>

        <hr className="my-6" />

        {/* Section title */}
        <h3 className="text-lg font-semibold mb-1">
          Let’s start with the basics
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Please provide your contact details and a resume so employers can reach you.
        </p>

        {/* FORM */}
        <form className="space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="label">First Name *</label>
              <input className="input" />
            </div>

            <div>
              <label className="label">Last Name</label>
              <input className="input" />
            </div>

            <div>
              <label className="label">Location</label>
              <input className="input" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="label">Email Address *</label>
              <input className="input" type="email" />
            </div>

            <div>
              <label className="label">Phone Number *</label>
              <input className="input" />
            </div>

            <div>
              <label className="label">Enter Password *</label>
              <input className="input" type="password" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="label">Confirm Password *</label>
              <input className="input" type="password" />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="w-full border-2 border-dashed border-gray-400 rounded-lg py-10 text-center">
            <p className="text-blue-600 font-medium cursor-pointer">
              Click to upload or drag & drop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PDF, DOC, DOCX (max 5MB)
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-2 border rounded-md"
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
