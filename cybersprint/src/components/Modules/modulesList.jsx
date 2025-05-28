// src/components/Modules/ModuleList.jsx

import { Link } from "react-router-dom";
import "../../styles/Modules/ModuleList.css"; // Make sure this exists

const modulesList = [
  {
    id: "intro-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    description: "Discover foundational cybersecurity concepts, goals, and threat types.",
    icon: "🔐",
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Explore how to secure and monitor network infrastructure.",
    icon: "🌐",
  },
  {
    id: "firewalls",
    title: "Firewalls",
    description: "Understand the types and functions of firewalls in defending networks.",
    icon: "🧱",
  },
  {
    id: "ids-ips",
    title: "IDS & IPS",
    description: "Learn how Intrusion Detection and Prevention Systems safeguard systems.",
    icon: "🛡️",
  },
  {
    id: "linux",
    title: "Linux",
    description: "Get hands-on with Linux commands for cybersecurity workflows.",
    icon: "🐧",
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    description: "Learn how to identify and assess system weaknesses.",
    icon: "🔍",
  },
  {
    id: "password-cracking",
    title: "Password Cracking",
    description: "Explore techniques used in password attacks and how to prevent them.",
    icon: "🔑",
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Understand manipulation tactics used to exploit human vulnerabilities.",
    icon: "🎭",
  },
  {
    id: "sql-injection",
    title: "SQL Injection",
    description: "Dive into one of the most common web vulnerabilities — and how to fix it.",
    icon: "💾",
  },
  {
    id: "xss-api-security",
    title: "XSS and API Security",
    description: "Prevent cross-site scripting and secure APIs in modern web apps.",
    icon: "📡",
  },
  {
    id: "web-application-security",
    title: "Web Application Security",
    description: "Secure your web apps from client-server attacks and misconfigurations.",
    icon: "🕸️",
  },
  {
    id: "wireless-network-security",
    title: "Wireless Network Security",
    description: "Safeguard Wi-Fi networks from sniffing, spoofing, and more.",
    icon: "📶",
  },
  {
    id: "owasp-juice-shop",
    title: "OWASP Juice Shop",
    description: "Practice vulnerabilities using the intentionally insecure Juice Shop app.",
    icon: "🧃",
  },
  {
    id: "cryptography",
    title: "Cryptography",
    description: "Understand encryption, hashing, and secure communication principles.",
    icon: "🧬",
  },
  {
    id: "wireshark",
    title: "Wireshark",
    description: "Learn packet analysis using the powerful Wireshark tool.",
    icon: "🔬",
  },
  {
    id: "nmap",
    title: "Nmap",
    description: "Scan networks and discover hosts and services using Nmap.",
    icon: "📊",
  },
];

export default function ModuleList() {
  return (
    <section className="module-section">
      <div className="module-wrapper">
        <h2 className="module-heading">Cybersecurity Learning Modules</h2>

        <div className="module-grid">
          {modulesList.map((module, index) => (
            <Link key={index} to={`/modules/${module.id}`} className="module-card">
              <div className="module-icon">{module.icon}</div>
              <h3 className="module-title">{module.title}</h3>
              <p className="module-desc">{module.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}