import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Getinv from "./pages/Getinv.jsx"
import Events from "./pages/Events.jsx"


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/getinvolved" element={<Getinv/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </Router>
      
  );
}

export default App
