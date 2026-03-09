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
import Profile2 from "./pages/Profile2";
import Profile3 from "./pages/Profile3";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Savejobs from "./pages/Savejobs";
import Myappln from "./pages/Myappln";
import Myappln2 from "./pages/Myappln2";
import Myappln3 from "./pages/Myappln3";
import Myappln4 from "./pages/Myappln4";
import Myappln5 from "./pages/Myappln5";
import Msg from "./pages/Msg";
import Topcompany from "./pages/Topcompany";





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
import Upgrade1 from "./pages/employer/empupgrade";


import AdminLogin from "./pages/admin/adminlogin";
import AdminDashboard from "./pages/admin/admindashhboard";
import AdminJob from "./pages/admin/adminjob";
import UserManagement from "./pages/admin/adminusermgmt";
import Subscription from "./pages/admin/adminsubscription";
import AdminProfile from "./pages/admin/adminprofile";
import Upgrade from "./pages/upgrade";



function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/profile2" element={<Profile2 />} />
       <Route path="/profile3" element={<Profile3 />} />
       <Route path="/home" element={<Home />} />
       <Route path="/home2" element={<Home2 />} />
       <Route path="/home3" element={<Home3 />} />
       <Route path="/home4" element={<Home4 />} />
       <Route path="/home5" element={<Home5 />} />
       <Route path="/savejobs" element={<Savejobs />} />
       <Route path="/myappln" element={<Myappln />} />
       <Route path="/myappln2" element={<Myappln2 />} />
       <Route path="/myappln3" element={<Myappln3 />} />
       <Route path="/myappln4" element={<Myappln4 />} />
       <Route path="/myappln5" element={<Myappln5 />} />
       <Route path="/msg" element={<Msg />} />
       <Route path="/topcompany" element={<Topcompany />} />
       <Route path="/upgrade" element={<Upgrade />} />
      

       <Route path="/emplogin" element={<Emplogin />} />
       <Route path="/empupgrade" element={<Upgrade1 />} />

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