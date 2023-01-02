import TopBar from "./Components/topbar/TopBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import About from "./pages/about/About"
import { BrowserRouter as Router, Routes, Route, Redirect,Navigate } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>

      <TopBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>

      <Routes>
        <Route path="/readPost/:postId" element={<Single/>} />
      </Routes>

      <Routes>
        <Route path="/write" element={user? <Write/>: <Login/>} />
      </Routes>

      <Routes>
        <Route path="/settings" element={user? <Settings/> : <Home/>} />
      </Routes>

      <Routes>
        <Route path="/login" element={user? <Home/> : <Login/>} />
      </Routes>

      <Routes>
        <Route path="/register" element={ user? <Home/> : <Register/>} />
      </Routes>

      
      
      
    </Router>
  );
}

export default App;
