import { useState } from "react";

export default function Profile3() {
  const [employed, setEmployed] = useState(true);

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md px-10 py-8">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-black">
          Create your Profile
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Step 3 of 3 · Work Experience
        </p>

        {/* Progress text row */}
        <div className="flex justify-between items-center mt-4 text-sm font-medium">
          <span className="text-gray-700">Experience</span>
          <span className="text-blue-600">95%</span>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-2 w-full bg-gray-200 rounded">
          <div className="h-2 bg-blue-600 rounded w-[95%]"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-16 mt-6 text-sm font-medium">
          <span className="text-gray-500">Basic Info</span>
          <span className="text-gray-500">Education & Skills</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Experience
          </span>
        </div>

        <hr className="my-6" />

        {/* Section title */}
        <h3 className="text-xl font-semibold text-black mb-1">
          Let’s finish up your profile
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Tell us where and how you would like to work so we can match you with the right opportunities.
        </p>

        {/* FORM */}
        <form className="space-y-8">

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Total Work Experience <span className="text-red-500">*</span>
              </label>
              <select className="input">
                <option>Select Year</option>
                <option>0 - 1 Year</option>
                <option>1 - 3 Years</option>
                <option>3 - 5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                When Can You start
              </label>
              <input type="date" className="input" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Current status <span className="text-red-500">*</span>
              </label>
              <select className="input">
                <option>Select Notice Period</option>
                <option>Immediate</option>
                <option>15 Days</option>
                <option>30 Days</option>
                <option>60 Days</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Preferred Shift
              </label>
              <select className="input">
                <option>Select Shift preference</option>
                <option>Day</option>
                <option>Night</option>
                <option>Rotational</option>
              </select>
            </div>
          </div>

          {/* Expected Salary */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Expected Salary
            </label>
            <div className="grid grid-cols-2 gap-6">
              <select className="input">
                <option>Maximum</option>
                <option>10,000</option>
                <option>20,000</option>
                <option>30,000</option>
              </select>

              <select className="input">
                <option>Minimum</option>
                <option>5,000</option>
                <option>10,000</option>
                <option>15,000</option>
              </select>
            </div>
          </div>

          {/* Toggle */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Are you Currently employed ?
            </label>

            <div className="flex items-center gap-4">
              <span className="text-sm">No</span>

              <button
                type="button"
                onClick={() => setEmployed(!employed)}
                className={`w-12 h-6 rounded-full relative transition ${
                  employed ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                    employed ? "right-1" : "left-1"
                  }`}
                />
              </button>

              <span className="text-sm">Yes</span>
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
              Save & Complete
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
