import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Profile2() {
  const navigate = useNavigate();
  const [employed, setEmployed] = useState(true);

const [experience, setExperience] = useState("");
const [noticePeriod, setNoticePeriod] = useState("");
const [startDate, setStartDate] = useState("");
const [shift, setShift] = useState("");
const [salaryMax, setSalaryMax] = useState("");
const [salaryMin, setSalaryMin] = useState("");

const handleSubmit = async () => {

const userId = localStorage.getItem("userId");

const profile1 = JSON.parse(localStorage.getItem("profile1"));
const profile2 = JSON.parse(localStorage.getItem("profile2"));

const finalData = {
  userId,
  ...profile1,
  ...profile2,
  totalWorkExperience: experience,
  noticePeriod: noticePeriod,
  startDate: startDate,
  shift: shift,
  expectedSalaryMax: salaryMax,
  expectedSalaryMin: salaryMin,
  currentlyEmployed: employed
};

try {

const res = await axios.get(`http://localhost:5000/api/profile/${userId}`);

if(res.data){

await axios.put(
`http://localhost:5000/api/profile/update/${userId}`,
finalData
);

alert("Profile updated successfully");

}else{

await axios.post(
"http://localhost:5000/api/profile/create",
finalData
);


alert("Profile created successfully");

}

localStorage.removeItem("profile1");
localStorage.removeItem("profile2");

navigate("/home");

}catch(error){

console.error(error);

await axios.post(
"http://localhost:5000/api/profile/create",
finalData
);

alert("Profile created successfully");

}

finally {

  localStorage.removeItem("profile1");
  localStorage.removeItem("profile2");

  navigate("/home");

}



};

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex justify-center py-10">
      <div className="w-full max-w-6xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 text-white px-3 py-2 rounded font-bold">
              TP
            </div>
            <h1 className="text-lg font-semibold text-blue-700">
              Talent Point
            </h1>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-500"
          >
            Back to Home
          </button>
        </div>

        {/* -------- BOX 1 : CREATE PROFILE -------- */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">

          <h2 className="text-lg font-semibold">
            Create your Profile
          </h2>

          <p className="text-sm text-gray-500">
            Step 3 of 3 Work Experience
          </p>

          {/* Progress */}
          <div className="mt-3 h-2 bg-gray-200 rounded">
            <div className="h-2 bg-blue-600 rounded w-[95%]"></div>
          </div>

          <div className="flex justify-between text-sm mt-3">
            <span className="text-gray-500">Basic Info</span>
            <span className="text-gray-500">Education & Skills</span>
            <span className="text-blue-600 font-medium">Experience</span>
          </div>

        </div>

        {/* -------- BOX 2 : FORM -------- */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">

          <h3 className="text-xl font-semibold mb-2">
            Let’s finish up your profile
          </h3>

          <p className="text-sm text-gray-500 mb-8">
            Tell us where and how you would like to work so we can match you with the right opportunities.
          </p>

          <div className="grid grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <div>
                <label className="text-sm font-medium block mb-2">
                  Total Work Experience *
                </label>

               <select
                className="input"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Current status *
                </label>

                <p className="text-xs text-gray-500 mb-1">
                  Notice Period
                </p>
                  <select
                  className="input"
                  value={noticePeriod}
                  onChange={(e)=>setNoticePeriod(e.target.value)}
                  >
                  <option>Select Notice Period</option>
                  <option>Immediate</option>
                  <option>15 Days</option>
                  <option>30 Days</option>
                </select>
              </div>

              {/* Toggle */}
              <div>
                <label className="text-sm font-medium block mb-2">
                  Are you currently employed ?
                </label>

                <div className="flex items-center gap-3">

                  <span className="text-sm">No</span>

                  <div
                    onClick={() => setEmployed(!employed)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                      employed ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                        employed ? "translate-x-6" : ""
                      }`}
                    />
                  </div>

                  <span className="text-sm">Yes</span>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <div>
                <label className="text-sm font-medium block mb-2">
                  When Can You start
                </label>

                <p className="text-xs text-gray-500 mb-1">Date</p>

                <input type="date" className="input mb-3"
                value={startDate}
                onChange={(e)=>setStartDate(e.target.value)}
                />

                <p className="text-xs text-gray-500 mb-1">
                  Preferred Shift
                </p>

                <select className="input"
                value={shift}
                onChange={(e)=>setShift(e.target.value)}
                >
                  <option>Select Shift preference</option>
                  <option>Day Shift</option>
                  <option>Night Shift</option>
                </select>
              </div>

              {/* Salary */}
              <div>
                <label className="text-sm font-medium block mb-2">
                  Expected Salary
                </label>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Maximum
                    </p>

                    <select className="input"
                    value={salaryMax}
                    onChange={(e)=>setSalaryMax(e.target.value)}
                    >
                      <option>Max</option>
                      <option>3 LPA</option>
                      <option>5 LPA</option>
                    </select>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Minimum
                    </p>

                    <select className="input"
                    value={salaryMin}
                    onChange={(e)=>setSalaryMin(e.target.value)}
                    >
                      <option>Min</option>
                      <option>2 LPA</option>
                      <option>4 LPA</option>
                    </select>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-10">

            <button
              onClick={() => navigate("/profile")}
              className="px-8 py-2 border border-gray-300 rounded-md"
            >
              Back
            </button>

            <button 
            onClick={handleSubmit}
            className="px-8 py-2 bg-blue-600 text-white rounded-md">
              Save & Complete
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}