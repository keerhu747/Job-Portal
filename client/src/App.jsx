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
       <Route path="/apply" element={<Home4 />} />
       </Routes>
 );
}


export default App;