import { useState } from 'react';
import Terminal from 'react-console-emulator';
import CryptographyContent from '../../data/modules/CryptographyContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/Cryptography.css';

export default function CryptographyModule() {
  const [showTerminal, setShowTerminal] = useState(false);

  const terminalCommands = {
    encrypt: {
      description: 'Encrypts text using Caesar cipher (shift 3)',
      usage: 'encrypt <text>',
      fn: (args) => {
        const shift = 3;
        return args
          .split('')
          .map(char => {
            const code = char.charCodeAt(0);
            if (char.match(/[a-z]/)) {
              return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else if (char.match(/[A-Z]/)) {
              return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            return char;
          })
          .join('');
      },
    },
    decrypt: {
      description: 'Decrypts Caesar cipher (shift 3)',
      usage: 'decrypt <text>',
      fn: (args) => {
        const shift = 3;
        return args
          .split('')
          .map(char => {
            const code = char.charCodeAt(0);
            if (char.match(/[a-z]/)) {
              return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            } else if (char.match(/[A-Z]/)) {
              return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            }
            return char;
          })
          .join('');
      },
    },
  };

  return (
    <div className="module-page">
      {/* Header */}
      <div className="module-header">
        <h1 className="module-title">🔐 Cryptography Basics</h1>
        <p className="module-subtitle">Unlock the world of secret codes and encryption.</p>
      </div>

      {/* Content Sections */}
      {CryptographyContent.sections.map((section, index) => (
        <section key={index} className="module-section">
          <h2 className="section-heading">{section.heading}</h2>
          <ul className="section-points no-bullets">
            {section.content.map((line, idx) => (
              line.startsWith('`') ? (
                <li key={idx} className="terminal-block">
                  <pre><code>{line.replace(/`/g, '')}</code></pre>
                </li>
              ) : (
                <li key={idx} className="point-bullet">{line}</li>
              )
            ))}
          </ul>

          {/* Interactive Terminal */}
          {section.heading.toLowerCase().includes('fun activity') && (
            <div className="code-sim-wrapper">
              <button
                className="btn-run"
                onClick={() => setShowTerminal(prev => !prev)}
                aria-expanded={showTerminal}
              >
                {showTerminal ? 'Hide Cryptography CLI 🛑' : 'Try Encryption Commands 💻'}
              </button>

              {showTerminal && (
                <>
                  <div className="terminal-help">
                    <p className="terminal-guide">
                        Welcome to the Cryptography CLI! <br />
                      🧠 Try using: <br />
                      <code>encrypt HELLO</code> → Encrypts using Caesar shift<br />
                      <code>decrypt KHOOR</code> → Decrypts Caesar output
                    </p>
                  </div>

                  <div className="real-terminal">
                    <Terminal
                      promptLabel="user@crypto:~$"
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
                        marginTop: '1rem'
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      ))}

      <Footer />
    </div>
  );
}