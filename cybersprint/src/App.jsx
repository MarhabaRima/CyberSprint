import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar-Footer/Navbar";

export default function App() {
  return (
    <>
      {/* Navbar appears on all routes */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}