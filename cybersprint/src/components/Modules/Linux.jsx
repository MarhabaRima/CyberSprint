import { useState, useRef } from 'react';
import Terminal from 'react-console-emulator';
import LinuxContent from '../../data/modules/LinuxContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/Linux.css';

export default function LinuxIntro() {
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalRendered = useRef(false);

  // Define interactive commands for the Linux terminal
  const terminalCommands = {
    touch: {
      description: 'Creates a file',
      usage: 'touch <filename>',
      fn: (args) => `📁 File '${args}' created successfully.`,
    },
    echo: {
      description: 'Writes text to a file',
      usage: `echo 'text' > <filename>`,
      fn: (args) => {
        const fileName = args.includes('>') ? args.split('>').pop().trim() : 'output.txt';
        return `📝 Text written to '${fileName}'.`;
      },
    },
    cat: {
      description: 'Displays file content',
      usage: 'cat <filename>',
      fn: () => '📄 Hello Linux!',
    },
    rm: {
      description: 'Deletes a file',
      usage: 'rm <filename>',
      fn: (args) => `🗑️ File '${args}' deleted.`,
    },
    helpme: {
      description: 'Shows a guided Linux command task',
      fn: () =>
        `👋 Try this:\n1. touch hello.txt\n2. echo "Hello Linux!" > hello.txt\n3. cat hello.txt\n4. rm hello.txt`,
    },
  };

  return (
    <div className="module-page">
      {/* Hero Section */}
      <header className="module-header">
        <h1 className="module-title"> 📖 Linux for Cybersecurity</h1>
        <p className="module-subtitle">Command your way through cybersecurity like a pro.</p>
      </header>

      {/* Loop through content sections */}
      {LinuxContent.sections.map((section, index) => (
        <section key={index} className="module-section">
          <h2 className="section-heading">{section.heading}</h2>
          <ul className="section-points">
            {section.content.map((line, idx) =>
              line.startsWith("`") ? (
                <li key={idx} className="terminal-block">
                  <pre><code>{line.replace(/`/g, '')}</code></pre>
                </li>
              ) : (
                <li key={idx} className="point-bullet">{line}</li>
              )
            )}
          </ul>

          {/* Show interactive terminal after the activity section */}
          {section.heading.toLowerCase().includes('fun activity') && (
            <div className="code-sim-wrapper">
              <button
                type="button"
                className="btn-run"
                onClick={() => setShowTerminal(prev => !prev)}
                aria-expanded={showTerminal}
                aria-controls="linux-terminal"
              >
                {showTerminal ? 'Hide Terminal 🛑' : 'Try Interactive Terminal 💻'}
              </button>

              {showTerminal && (
                <div id="linux-terminal" className="real-terminal">
                  <Terminal
                    welcomeMessage={`👋 Welcome to the Linux CLI Playground!\n\n💡 Type "helpme" to get a guided task.`}
                    promptLabel="user@cybersprint:~$"
                    commands={terminalCommands}
                    style={{
                      backgroundColor: '#000',
                      color: '#00FF00',
                      fontFamily: 'monospace',
                      padding: '1rem',
                      height: '350px',
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