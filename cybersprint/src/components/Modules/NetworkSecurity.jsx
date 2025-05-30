import { useState } from 'react';
import Terminal from 'react-console-emulator';
import NetworkSecurityContent from '../../data/modules/NetworkSecurityContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/NetworkSecurity.css';

export default function NetworkSecurity() {
  const [activeTerminalIndex, setActiveTerminalIndex] = useState(null);

  const terminalCommands = {
    firewall: {
      description: 'Display basic firewall rules',
      usage: 'firewall',
      fn: () => `Inbound: Allow HTTP/HTTPS, SSH\nOutbound: Allow all\nDefault policy: DROP`,
    },
    'iptables -L': {
      description: 'List iptables rules',
      usage: 'iptables -L',
      fn: () => `Chain INPUT (policy DROP)\nACCEPT tcp -- anywhere anywhere tcp dpt:ssh\nACCEPT tcp -- anywhere anywhere tcp dpt:http`,
    }
  };

  return (
    <div className="module-page">
      <div className="module-header">
        <h1 className="module-title">🛡️ Network Security</h1>
        <p className="module-subtitle">Defend your data highways and fortresses.</p>
      </div>

      {NetworkSecurityContent.sections.map((section, index) => (
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

          {section.heading.toLowerCase().includes('activity') && (
            <div className="code-sim-wrapper">
              <button
                className="btn-run"
                onClick={() => setActiveTerminalIndex(activeTerminalIndex === index ? null : index)}
              >
                {activeTerminalIndex === index ? 'Hide Terminal 🛑' : 'Launch Terminal 💻'}
              </button>

              {activeTerminalIndex === index && (
                <div className="terminal-container">
                    <div className="terminal-help">
                    <strong>💡 Commands to try:</strong>
                    <ul>
                        <li><code>firewall</code> – View firewall rules</li>
                        <li><code>iptables -L</code> – List iptables configuration</li>
                    </ul>
                    </div>

                  <Terminal
                    commands={terminalCommands}
                    promptLabel="user@cybersprint:~$"
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