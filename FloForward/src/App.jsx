import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Join from "./pages/Join.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./auth/Login.jsx"
import Register from "./auth/Register.jsx"

import {ToastContainer} from "react-toastify"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
      
  );
}

export default App
