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
import Upgrade from "./pages/Upgrade";




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
       </Routes>
 );
}


export default App;