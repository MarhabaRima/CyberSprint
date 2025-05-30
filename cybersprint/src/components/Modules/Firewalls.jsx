import { useState } from 'react';
import Terminal from 'react-console-emulator';
import FirewallsContent from '../../data/modules/FirewallsContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/Firewalls.css';

export default function FirewallsModule() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const terminalCommands = {
    'ufw enable': {
      description: 'Enable the firewall',
      usage: 'sudo ufw enable',
      fn: () => 'Firewall is now active and enabled on system startup.',
    },
    'ufw allow': {
      description: 'Allow port through firewall',
      usage: 'sudo ufw allow <port>',
      fn: (args) => `Traffic allowed on port(s): ${args}`,
    },
    'ufw deny': {
      description: 'Deny port through firewall',
      usage: 'sudo ufw deny <port>',
      fn: (args) => `Traffic denied on port(s): ${args}`,
    },
    'ufw status': {
      description: 'View current firewall rules',
      usage: 'sudo ufw status verbose',
      fn: () => 'Status: active\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW       Anywhere\n80,443/tcp                 ALLOW       Anywhere\n3001/tcp                   ALLOW       Anywhere\n3306                       ALLOW       192.168.1.50\nDefault: deny (incoming)',
    },
  };

  return (
    <div className="module-page">
      <div className="module-header">
        <h1 className="module-title">🔥 Firewalls & Network Defense</h1>
        <p className="module-subtitle">Block the threats. Allow the trusted. Stay protected.</p>
      </div>

      {FirewallsContent.sections.map((section, index) => (
        <section key={index} className="module-section">
          <h2 className="section-heading">{section.heading}</h2>
          <ul className="section-points no-bullets">
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

          {section.heading.toLowerCase().includes('fun activity') && (
            <div className="code-sim-wrapper">
              <button
                className="btn-run"
                onClick={() => {
                  setShowTerminal((prev) => !prev);
                  setShowHelp(true);
                }}
                aria-expanded={showTerminal}
              >
                {showTerminal ? 'Hide Terminal 🛑' : 'Launch Firewall Terminal 💻'}
              </button>

              {showTerminal && (
                <div className="real-terminal">
                  {showHelp && (
                    <div className="terminal-help">
                      <p><strong>Welcome to the Firewall CLI Playground:</strong></p>
                      <p>Try running commands like:</p>
                      <code>sudo ufw enable</code><br />
                      <code>sudo ufw allow 22</code><br />
                      <code>sudo ufw allow 80,443/tcp</code><br />
                      <code>sudo ufw allow from 192.168.1.50 to any port 3306</code><br />
                      <code>sudo ufw status verbose</code>
                    </div>
                  )}

                  <Terminal
                    promptLabel="user@cybersprint:~$"
                    commands={terminalCommands}
                    welcomeMessage=""
                    autoFocus
                    style={{
                      backgroundColor: '#000',
                      color: '#00FF00',
                      fontFamily: 'monospace',
                      padding: '1rem',
                      height: '300px',
                      overflowY: 'auto',
                      borderRadius: '10px',
                      marginTop: '1rem',
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