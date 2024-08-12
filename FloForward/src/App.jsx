import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Join from "./pages/Join.jsx"
import Opportunity from "./pages/Opportunity.jsx"


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
        <Route path="/join" element={<Join/>}/>
        <Route path="/opportunity" element={<Opportunity/>}/>
      </Routes>
    </Router>
      
  );
}

export default App
