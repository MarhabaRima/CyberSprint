import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      {/* Need to include Navbar here */}
      <Navbar />

      {/* Define routes using React Router */}
      <Routes>
        {/* When user visits "/", they see Home.jsx */}
        <Route path="/" element={<Home />} />

        {/* When user visits "/dashboard", they see Dashboard.jsx */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}