import { useState } from 'react';
import Terminal from 'react-console-emulator';
import LinuxContent from '../../data/modules/LinuxContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/Linux.css';

export default function LinuxIntro() {
  const [showTerminal, setShowTerminal] = useState(false);

  const terminalCommands = {
    touch: {
      description: 'Creates a file',
      usage: 'touch <filename>',
      fn: (args) => `File '${args}' created ✔`,
    },
    echo: {
      description: 'Writes text to file',
      usage: `echo 'text' > <filename>`,
      fn: (args) => {
        const match = args.match(/"(.*)"\s*>\s*(.*)/);
        return match ? `Saved to ${match[2]}: ${match[1]}` : 'Usage: echo "text" > filename';
      },
    },
    cat: {
      description: 'Reads file content',
      usage: 'cat <filename>',
      fn: () => 'Hello Linux!',
    },
    rm: {
      description: 'Deletes a file',
      usage: 'rm <filename>',
      fn: (args) => `File '${args}' deleted 🗑️`,
    },
  };

  return (
    <div className="module-page">
      <div className="module-header">
        <h1 className="module-title">🐧 Linux for Cybersecurity</h1>
        <p className="module-subtitle">Command your way through cybersecurity like a pro.</p>
      </div>

      {LinuxContent.sections.map((section, index) => (
        <section key={index} className="module-section">
          <h2 className="section-heading">{section.heading}</h2>
          <ul className="section-points no-bullets">
            {section.content.map((line, idx) =>
              line.startsWith('`') ? (
                <li key={idx} className="terminal-block">
                  <pre><code>{line.replace(/`/g, '')}</code></pre>
                </li>
              ) : (
                <li key={idx} className="point-text">{line}</li>
              )
            )}
          </ul>

          {section.heading.toLowerCase().includes('fun activity') && (
            <div className="code-sim-wrapper">
              <button
                className="btn-run"
                onClick={() => setShowTerminal(prev => !prev)}
                aria-expanded={showTerminal}
              >
                {showTerminal ? 'Hide Terminal 🛑' : 'Try Linux Terminal 💻'}
              </button>

              {showTerminal && (
                <>
                  <div className="terminal-help">
                    <strong>💡 Commands to try:</strong>
                    <ul>
                      <li><code>touch test.txt</code> – Creates a new file</li>
                      <li><code>echo "Hello Linux!" &gt; test.txt</code> – Writes to file</li>
                      <li><code>cat test.txt</code> – Displays file content</li>
                      <li><code>rm test.txt</code> – Deletes the file</li>
                    </ul>
                  </div>

                  <div className="real-terminal">
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