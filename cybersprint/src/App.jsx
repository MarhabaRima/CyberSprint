import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import Navbar from "./components/Navbar-Footer/Navbar";

// 🔽 IMPORT THE TOPIC COMPONENT
import CyberSecurityIntro from "./components/Modules/CyberSecurityIntro";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<Modules />} />

        {/* 🔽 ADD THIS ROUTE FOR THE INDIVIDUAL TOPIC PAGE */}
        <Route path="/modules/intro-to-cybersecurity" element={<CyberSecurityIntro />} />
      </Routes>
    </>
  );
}