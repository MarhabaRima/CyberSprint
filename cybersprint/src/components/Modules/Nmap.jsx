import { useState } from 'react';
import Terminal from 'react-console-emulator';
import NmapContent from '../../data/modules/NmapContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/Nmap.css';

export default function NmapModule() {
  const [showTerminal, setShowTerminal] = useState(false);

  // Define terminal commands
  const terminalCommands = {
    nmap: {
      description: 'Basic Nmap Scan',
      usage: 'nmap <target>',
      fn: (args) => `Starting Nmap scan on ${args}...\nPORT    STATE SERVICE\n22/tcp  open  ssh\n80/tcp  open  http\n443/tcp open  https\nNmap done: 1 IP address (1 host up)`
    },
    'nmap -sV': {
      description: 'Version Detection Scan',
      usage: 'nmap -sV <target>',
      fn: (args) => `Scanning ${args} for service versions...\nPORT    STATE SERVICE VERSION\n22/tcp  open  ssh     OpenSSH 7.6p1\n80/tcp  open  http    Apache httpd 2.4.29\n443/tcp open  https   nginx 1.14.0`
    },
    'nmap -O': {
      description: 'OS Detection',
      usage: 'nmap -O <target>',
      fn: (args) => `Detecting OS of ${args}...\nOS details: Linux 3.10 - 4.11, Generic Linux (Linux 3.2 - 4.9)`
    }
  };

  return (
    <div className="module-page">
      {/* Header */}
      <div className="module-header">
        <h1 className="module-title">📡 Nmap Network Scanning</h1>
        <p className="module-subtitle">Map the network, uncover the unknown.</p>
      </div>

      {/* Content Sections */}
      {NmapContent.sections.map((section, index) => (
        <section key={index} className="module-section">
          <h2 className="section-heading">{section.heading}</h2>
          <ul className="section-points">
            {section.content.map((line, idx) =>
              line.startsWith('`') ? (
                <li key={idx} className="terminal-block">
                  <pre><code>{line.replace(/`/g, '')}</code></pre>
                </li>
              ) : (
                <li key={idx} className="point-bullet">{line}</li>
              )
            )}
          </ul>

          {/* Terminal Block */}
          {section.heading.toLowerCase().includes('hands-on activity') && (
            <div className="code-sim-wrapper">
              <button
                className="btn-run"
                onClick={() => setShowTerminal(prev => !prev)}
                aria-expanded={showTerminal}
              >
                {showTerminal ? 'Hide Nmap Terminal 🛑' : 'Try Nmap Commands 💻'}
              </button>

              {showTerminal && (
                <div className="real-terminal">
                  <Terminal
                    promptLabel="user@cybersprint:~$"
                    commands={terminalCommands}
                    welcomeMessage="Welcome to the Nmap CLI Playground. Try commands like 'nmap 192.168.1.1' or 'nmap -sV 192.168.1.1"
                    autoFocus
                    onLoad={(terminal) => {
                      terminal.pushToStdout(
                        "Welcome to the Nmap CLI Playground. Try commands like 'nmap 192.168.1.1' or 'nmap -sV 192.168.1.1'"
                      );
                    }}
                    style={{
                      backgroundColor: '#000',
                      color: '#00FF00',
                      fontFamily: 'monospace',
                      padding: '1rem',
                      height: '300px',
                      overflowY: 'auto',
                      borderRadius: '10px',
                      marginTop: '1rem'
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </section>
      ))}

      <Footer />
    </div>
  );
}