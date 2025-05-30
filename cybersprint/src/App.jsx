import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import Navbar from "./components/Navbar-Footer/Navbar";

// Import topic modules
import CyberSecurityIntro from "./components/Modules/CyberSecurityIntro";
import LinuxIntro from "./components/Modules/Linux";
import Nmap from "./components/Modules/Nmap";
import VulnerabilityAssessment from "./components/Modules/VulnerabilityAssessment";
import Cryptography from './components/Modules/Cryptography';
import NetworkSecurity from './components/Modules/NetworkSecurity';
import Firewalls from './components/Modules/Firewalls';

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
        <Route path="/modules/vulnerability-assessment" element={<VulnerabilityAssessment />} />
        <Route path="/modules/cryptography" element={<Cryptography />} />
        <Route path="/modules/network-security" element={<NetworkSecurity />} />
        <Route path="/modules/firewalls" element={<Firewalls />} />

        {/* Catch-all route */}
      </Routes>
    </>
  );
}