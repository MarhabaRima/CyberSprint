export const glossaryTerms = [
    {
        term: "Access Control",
        definition: "Mechanisms that restrict access to resources based on policies, ensuring only authorized users can perform specific actions.",
        letter: "A",
        tags: ["Security", "Authorization"],
        category: "Security Mechanism"
      },
      {
        term: "API Gateway",
        definition: "A server that acts as an API front-end, handling requests, enforcing policies, and routing to appropriate services.",
        letter: "A",
        tags: ["Infrastructure", "Routing"],
        category: "Component"
      },
      {
        term: "ARP Spoofing",
        definition: "A type of attack where an attacker sends falsified ARP messages over a local network, linking their MAC address with the IP address of a legitimate system.",
        letter: "A",
        tags: ["Man in the Middle", "Network Security"],
        category: "Attack Technique"
      },
      {
        term: "Authentication",
        definition: "The process of verifying the identity of a user or system before granting access to resources.",
        letter: "A",
        tags: ["Security", "Identity Verification"],
        category: "Security Mechanism"
      },
      {
        term: "Authorization",
        definition: "Determining if a user has permission to access a resource or perform an action after authentication.",
        letter: "A",
        tags: ["Security", "Access Control"],
        category: "Security Mechanism"
      },
      {
        term: "Attack Surface",
        definition: "The sum of all points in a system where an unauthorized user can attempt to enter or extract data. Reducing the attack surface is a key security strategy.",
        letter: "A",
        tags: ["Attack Vector", "Defense in Depth"],
        category: "Vulnerability"
      },
      {
        term: "Bearer Token",
        definition: "A security token that grants access to resources without requiring further authentication.",
        letter: "B",
        tags: ["Authentication", "Token"],
        category: "Security Mechanism"
      },
      {
        term: "Botnet",
        definition: "A network of compromised computers controlled by an attacker, used to perform coordinated attacks like DDoS.",
        letter: "B",
        tags: ["DDoS", "Malware"],
        category: "Attack Technique"
      },
      {
        term: "CORS (Cross-Origin Resource Sharing)",
        definition: "A mechanism that allows restricted resources on a web page to be requested from another domain.",
        letter: "C",
        tags: ["Security", "Browser"],
        category: "Security Mechanism"
      },
      {
        term: "Cryptography",
        definition: "The practice of securing communication and data using mathematical techniques and algorithms.",
        letter: "C",
        tags: ["Encryption", "Security", "Algorithms"],
        category: "Core Concept"
      },
      {
        term: "Data Encryption",
        definition: "The process of converting data into a coded format to prevent unauthorized access.",
        letter: "D",
        tags: ["Security", "Data Protection"],
        category: "Security Mechanism"
      },
      {
        term: "DDoS",
        definition: "A Distributed Denial of Service attack floods a system with traffic to exhaust resources and disrupt services.",
        letter: "D",
        tags: ["Availability", "Attack"],
        category: "Attack Technique"
      },
      {
        term: "Encryption",
        definition: "A method of protecting data by converting it into unreadable code that only authorized users can decode.",
        letter: "E",
        tags: ["Confidentiality", "Crypto"],
        category: "Core Concept"
      },
      {
        term: "Endpoint",
        definition: "A specific URL where an API can access the resources they need to carry out a function.",
        letter: "E",
        tags: ["API", "URL"],
        category: "Component"
      },
      {
        term: "Firewall",
        definition: "A network security device that monitors and filters incoming and outgoing network traffic.",
        letter: "F",
        tags: ["Security", "Network"],
        category: "Security Mechanism"
      },
      {
        term: "Governance",
        definition: "The framework of policies and controls used to manage cybersecurity strategy and compliance in organizations.",
        letter: "G",
        tags: ["Compliance", "Risk Management"],
        category: "Policy & Strategy"
      },
      {
        term: "GraphQL",
        definition: "A query language for APIs that allows clients to request exactly the data they need.",
        letter: "G",
        tags: ["API", "Query Language"],
        category: "API Architecture"
      },
      {
        term: "Hashing",
        definition: "Transforming data into a fixed-size string of characters, which represents the original data in a secure format.",
        letter: "H",
        tags: ["Integrity", "Hash Function"],
        category: "Core Concept"
      },
      {
        term: "HTTP (Hypertext Transfer Protocol)",
        definition: "The foundation of data communication for the World Wide Web.",
        letter: "H",
        tags: ["Protocol", "Web"],
        category: "Communication Protocol"
      },
      {
        term: "Incident Response",
        definition: "A process for detecting, responding to, and recovering from cybersecurity incidents.",
        letter: "I",
        tags: ["Recovery", "Security Event"],
        category: "Operational Security"
      },
      {
        term: "Input Validation",
        definition: "The process of ensuring that user input is clean, correct, and useful before processing.",
        letter: "I",
        tags: ["Security", "Data Validation"],
        category: "Security Mechanism"
      },
      {
        term: "Jailbreaking",
        definition: "Removing software restrictions imposed by the operating system to allow unauthorized access or modifications.",
        letter: "J",
        tags: ["Mobile Security", "Privilege Escalation"],
        category: "Vulnerability"
      },
      {
        term: "JSON (JavaScript Object Notation)",
        definition: "A lightweight data-interchange format that is easy for humans to read and write.",
        letter: "J",
        tags: ["Data Format", "Serialization"],
        category: "Data Format"
      },
      {
        term: "Keylogger",
        definition: "A malicious program that records keystrokes to steal sensitive information like passwords.",
        letter: "K",
        tags: ["Malware", "Spyware"],
        category: "Attack Technique"
      },
      {
        term: "KPI (Key Performance Indicator)",
        definition: "A measurable value that demonstrates how effectively a company is achieving key objectives.",
        letter: "K",
        tags: ["Metrics", "Performance"],
        category: "Monitoring"
      },
      {
        term: "Load Balancer",
        definition: "A device that distributes network or application traffic across multiple servers.",
        letter: "L",
        tags: ["Infrastructure", "Scalability"],
        category: "Component"
      },
      {
        term: "Logic Bomb",
        definition: "Malicious code that is triggered when specific conditions are met, often used to cause harm or exfiltrate data.",
        letter: "L",
        tags: ["Malware", "Delayed Execution"],
        category: "Attack Technique"
      },
      {
        term: "Man-in-the-Middle",
        definition: "An attack where a malicious actor intercepts and potentially alters communication between two parties.",
        letter: "M",
        tags: ["Network Attack", "Eavesdropping"],
        category: "Attack Technique"
      },
      {
        term: "Middleware",
        definition: "Software that acts as a bridge between an operating system or database and applications.",
        letter: "M",
        tags: ["Software", "Integration"],
        category: "Component"
      },
      {
        term: "NAC (Network Access Control)",
        definition: "A security solution that enforces policy on devices seeking to access network resources.",
        letter: "N",
        tags: ["Access Control", "Endpoint Security"],
        category: "Security Tool"
      },
      {
        term: "Nonce",
        definition: "A random or unique number that is used only once in a cryptographic communication.",
        letter: "N",
        tags: ["Security", "Cryptography"],
        category: "Security Mechanism"
      },
      {
        term: "OAuth",
        definition: "An open standard for access delegation, commonly used to grant websites or applications access to user information without exposing passwords.",
        letter: "O",
        tags: ["Authentication", "Authorization"],
        category: "Security Protocol"
      },
      {
        term: "Payload",
        definition: "The part of transmitted data that is the actual intended message, excluding headers or metadata.",
        letter: "P",
        tags: ["Data", "Transmission"],
        category: "Data Format"
      },
      {
        term: "Phishing",
        definition: "A type of social engineering attack where attackers impersonate trustworthy entities to steal information.",
        letter: "P",
        tags: ["Social Engineering", "Email Security"],
        category: "Attack Technique"
      },
      {
        term: "Query Parameter",
        definition: "A key-value pair that appears after a question mark in a URL, used to pass data to web applications.",
        letter: "Q",
        tags: ["URL", "Data"],
        category: "Component"
      },
      {
        term: "QR Code Attack",
        definition: "Exploiting QR codes to direct victims to malicious URLs or install malware.",
        letter: "Q",
        tags: ["Social Engineering", "Mobile"],
        category: "Attack Technique"
      },
      {
        term: "Ransomware",
        definition: "Malware that encrypts files and demands payment from victims to restore access.",
        letter: "R",
        tags: ["Malware", "Encryption"],
        category: "Attack Technique"
      },
      {
        term: "Rate Limiting",
        definition: "A technique used to control the amount of incoming and outgoing traffic to or from a network.",
        letter: "R",
        tags: ["Security", "Traffic Control"],
        category: "Security Mechanism"
      },
      {
        term: "SOAP (Simple Object Access Protocol)",
        definition: "A messaging protocol that allows programs running on disparate operating systems to communicate using HTTP and XML.",
        letter: "S",
        tags: ["Protocol", "Web Services"],
        category: "API Architecture"
      },
      {
        term: "SOC (Security Operations Center)",
        definition: "A centralized team responsible for monitoring, detecting, and responding to cybersecurity threats.",
        letter: "S",
        tags: ["Monitoring", "Response"],
        category: "Operational Security"
      },
      {
        term: "Token",
        definition: "A piece of data created by a server, and contains information to identify a particular user and session.",
        letter: "T",
        tags: ["Authentication", "Session Management"],
        category: "Security Mechanism"
      },
      {
        term: "Threat Intelligence",
        definition: "Information about potential or current attacks that can help organizations reduce risk.",
        letter: "T",
        tags: ["Cyber Threats", "Proactive Defense"],
        category: "Policy & Strategy"
      },
      {
        term: "U2F (Universal 2nd Factor)",
        definition: "A physical device used as a second factor in two-factor authentication (2FA).",
        letter: "U",
        tags: ["2FA", "Authentication"],
        category: "Security Tool"
      },
      {
        term: "URL (Uniform Resource Locator)",
        definition: "The address of a web page or resource on the internet.",
        letter: "U",
        tags: ["Web", "Address"],
        category: "Component"
      },
      {
        term: "Versioning",
        definition: "The practice of assigning unique version numbers to different states of software or APIs.",
        letter: "V",
        tags: ["Development", "Maintenance"],
        category: "Best Practice"
      },
      {
        term: "VPN",
        definition: "A Virtual Private Network encrypts internet traffic and hides user IP addresses for secure online access.",
        letter: "V",
        tags: ["Privacy", "Encryption"],
        category: "Security Tool"
      },
      {
        term: "Webhook",
        definition: "User-defined HTTP callbacks triggered by specific events, allowing real-time data sharing between applications.",
        letter: "W",
        tags: ["Event-Driven", "Integration"],
        category: "Communication Mechanism"
      },
      {
        term: "Worm",
        definition: "A self-replicating malware that spreads across networks without user interaction.",
        letter: "W",
        tags: ["Self-Propagating", "Network"],
        category: "Attack Technique"
      },
      {
        term: "XML (eXtensible Markup Language)",
        definition: "A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.",
        letter: "X",
        tags: ["Data Format", "Serialization"],
        category: "Data Format"
      },
      {
        term: "XSS (Cross-Site Scripting)",
        definition: "A vulnerability that allows attackers to inject malicious scripts into trusted websites.",
        letter: "X",
        tags: ["Web Security", "Injection"],
        category: "Vulnerability"
      },
      {
        term: "YAML (YAML Ain't Markup Language)",
        definition: "A human-readable data serialization standard that can be used in conjunction with all programming languages.",
        letter: "Y",
        tags: ["Data Format", "Configuration"],
        category: "Data Format"
      },
      {
        term: "YARA",
        definition: "A tool for identifying and classifying malware using rules-based pattern matching.",
        letter: "Y",
        tags: ["Malware Detection", "Forensics"],
        category: "Security Tool"
      },
      {
        term: "Zero-Day",
        definition: "A vulnerability that is exploited before it becomes publicly known or patched.",
        letter: "Z",
        tags: ["Exploit", "Unknown Threat"],
        category: "Vulnerability"
      },
      {
        term: "Zero Trust Security",
        definition: "A security concept centered on the belief that organizations should not automatically trust anything inside or outside their perimeters.",
        letter: "Z",
        tags: ["Security", "Access Control"],
        category: "Security Strategy"
      }
];