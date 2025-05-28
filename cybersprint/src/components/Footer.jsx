import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-center py-6 bg-[#0F0F1A] border-t border-gray-800 text-gray-500 text-sm">
      © {new Date().getFullYear()} CyberSprint. All rights reserved.
    </footer>
  );
}