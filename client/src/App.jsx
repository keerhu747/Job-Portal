/*import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;*/

/*import AppRoutes from "./routes/routes";

function App() {
  return <AppRoutes />;
}

export default App;*/


import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Profile2 from "./pages/profile2";
import Profile3 from "./pages/profile3";
import Home from "./pages/home";
import Home2 from "./pages/home2";
import Emplogin from "./pages/employer/emplogin";
import EmpLayout from "./components/emplayout";
import EmpDashboard from "./pages/employer/empdashboard";
import EmpSettings from "./pages/employer/empsettings";
import EmpMessage from "./pages/employer/empmessage";
import EmpJobs from "./pages/employer/empjobs";
import PostJob from "./pages/employer/postjob";
import PostJob2 from "./pages/employer/postjob2";
import PostJob3 from "./pages/employer/postjob3";
import EmpCandidates from "./pages/employer/empcandidates";


import AdminLogin from "./pages/admin/adminlogin";
import AdminDashboard from "./pages/admin/admindashhboard";
import AdminJob from "./pages/admin/adminjob";
import UserManagement from "./pages/admin/adminusermgmt";
import Subscription from "./pages/admin/adminsubscription";
import AdminProfile from "./pages/admin/adminprofile";



function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/profile2" element={<Profile2 />} />
       <Route path="/emplogin" element={<Emplogin />} />

      <Route path="/emplayout" element={<EmpLayout />}>
        <Route path="empdashboard" element={<EmpDashboard />} />
        <Route path="empsettings" element={<EmpSettings />} />
        <Route path="empmessage" element={<EmpMessage />} />
        <Route path="empcandidates" element={<EmpCandidates />} />
        <Route path="empjobs" element={<EmpJobs />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="postjob2" element={<PostJob2 />} />
        <Route path="postjob3" element={<PostJob3 />} />
      </Route>

      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminjob" element={<AdminJob/>} />
      <Route path="/adminusermgmt" element={<UserManagement/>} />
      <Route path="/adminsubscription" element={<Subscription/>} />
      <Route path="/adminprofile" element={<AdminProfile/>} />
    
</Routes>
  );
 
}
export default App;