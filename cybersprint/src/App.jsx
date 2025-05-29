import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import Navbar from "./components/Navbar-Footer/Navbar";

// Import topic modules
import CyberSecurityIntro from "./components/Modules/CyberSecurityIntro";
import LinuxIntro from "./components/Modules/Linux";
import Nmap from "./components/Modules/Nmap"; // ✅ NEW IMPORT

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<Modules />} />

        {/* Topic pages */}
        <Route path="/modules/intro-to-cybersecurity" element={<CyberSecurityIntro />} />
        <Route path="/modules/linux" element={<LinuxIntro />} />
        <Route path="/modules/nmap" element={<Nmap />} /> 
      </Routes>
    </>
  );
}