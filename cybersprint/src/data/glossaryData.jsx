export const glossaryTerms = [
    {
      term: "Authentication",
      definition: "The process of verifying the identity of a user, system, or entity. Common methods include passwords, biometrics, and multi-factor authentication.",
      letter: "A",
      tags: ["Authorization", "MFA"],
      category: "Core Concept",
    },
    {
      term: "Attack Surface",
      definition: "The sum of all points in a system where an unauthorized user can attempt to enter or extract data. Reducing the attack surface is a key security strategy.",
      letter: "A",
      tags: ["Attack Vector", "Defense in Depth"],
      category: "Vulnerability",
    },
    {
      term: "ARP Spoofing",
      definition: "A type of attack where an attacker sends falsified ARP messages over a local network, linking their MAC address with the IP address of a legitimate system.",
      letter: "A",
      tags: ["Man in the Middle", "Network Security"],
      category: "Attack Technique",
    },
    {
        "term": "Authentication",
        "definition": "The process of verifying the identity of a user or system. Methods include passwords, biometrics, and multi-factor authentication.",
        "letter": "A",
        "tags": [
        "Authorization",
        "MFA",
        "Identity"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Botnet",
        "definition": "A network of compromised computers controlled by an attacker, used to perform coordinated attacks like DDoS.",
        "letter": "B",
        "tags": [
        "DDoS",
        "Malware"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Cryptography",
        "definition": "The practice of securing communication and data using mathematical techniques and algorithms.",
        "letter": "C",
        "tags": [
        "Encryption",
        "Security",
        "Algorithms"
        ],
        "category": "Core Concept"
    },
    {
        "term": "DDoS",
        "definition": "A Distributed Denial of Service attack floods a system with traffic to exhaust resources and disrupt services.",
        "letter": "D",
        "tags": [
        "Availability",
        "Attack"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Encryption",
        "definition": "A method of protecting data by converting it into unreadable code that only authorized users can decode.",
        "letter": "E",
        "tags": [
        "Confidentiality",
        "Crypto"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Firewall",
        "definition": "A security system that controls incoming and outgoing network traffic based on predetermined rules.",
        "letter": "F",
        "tags": [
        "Network Security",
        "Filtering"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Governance",
        "definition": "The framework of policies and controls used to manage cybersecurity strategy and compliance in organizations.",
        "letter": "G",
        "tags": [
        "Compliance",
        "Risk Management"
        ],
        "category": "Policy & Strategy"
    },
    {
        "term": "Hashing",
        "definition": "Transforming data into a fixed-size string of characters, which represents the original data in a secure format.",
        "letter": "H",
        "tags": [
        "Integrity",
        "Hash Function"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Incident Response",
        "definition": "A process for detecting, responding to, and recovering from cybersecurity incidents.",
        "letter": "I",
        "tags": [
        "Recovery",
        "Security Event"
        ],
        "category": "Operational Security"
    },
    {
        "term": "Jailbreaking",
        "definition": "Removing software restrictions imposed by the operating system to allow unauthorized access or modifications.",
        "letter": "J",
        "tags": [
        "Mobile Security",
        "Privilege Escalation"
        ],
        "category": "Vulnerability"
    },
    {
        "term": "Keylogger",
        "definition": "A malicious program that records keystrokes to steal sensitive information like passwords.",
        "letter": "K",
        "tags": [
        "Malware",
        "Spyware"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Logic Bomb",
        "definition": "Malicious code that is triggered when specific conditions are met, often used to cause harm or exfiltrate data.",
        "letter": "L",
        "tags": [
        "Malware",
        "Delayed Execution"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Man-in-the-Middle",
        "definition": "An attack where a malicious actor intercepts and potentially alters communication between two parties.",
        "letter": "M",
        "tags": [
        "Network Attack",
        "Eavesdropping"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "NAC (Network Access Control)",
        "definition": "A security solution that enforces policy on devices seeking to access network resources.",
        "letter": "N",
        "tags": [
        "Access Control",
        "Endpoint Security"
        ],
        "category": "Security Tool"
    },
    {
        "term": "OAuth",
        "definition": "An open standard for token-based authorization that allows users to grant access to resources without sharing credentials.",
        "letter": "O",
        "tags": [
        "Authorization",
        "Identity"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Phishing",
        "definition": "A type of social engineering attack where attackers impersonate trustworthy entities to steal information.",
        "letter": "P",
        "tags": [
        "Social Engineering",
        "Email Security"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "QR Code Attack",
        "definition": "Exploiting QR codes to direct victims to malicious URLs or install malware.",
        "letter": "Q",
        "tags": [
        "Social Engineering",
        "Mobile"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Ransomware",
        "definition": "Malware that encrypts files and demands payment from victims to restore access.",
        "letter": "R",
        "tags": [
        "Malware",
        "Encryption"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "SOC (Security Operations Center)",
        "definition": "A centralized team responsible for monitoring, detecting, and responding to cybersecurity threats.",
        "letter": "S",
        "tags": [
        "Monitoring",
        "Response"
        ],
        "category": "Operational Security"
    },
    {
        "term": "Threat Intelligence",
        "definition": "Information about potential or current attacks that can help organizations reduce risk.",
        "letter": "T",
        "tags": [
        "Cyber Threats",
        "Proactive Defense"
        ],
        "category": "Policy & Strategy"
    },
    {
        "term": "U2F (Universal 2nd Factor)",
        "definition": "A physical device used as a second factor in two-factor authentication (2FA).",
        "letter": "U",
        "tags": [
        "2FA",
        "Authentication"
        ],
        "category": "Security Tool"
    },
    {
        "term": "VPN",
        "definition": "A Virtual Private Network encrypts internet traffic and hides user IP addresses for secure online access.",
        "letter": "V",
        "tags": [
        "Privacy",
        "Encryption"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Worm",
        "definition": "A self-replicating malware that spreads across networks without user interaction.",
        "letter": "W",
        "tags": [
        "Self-Propagating",
        "Network"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "XSS (Cross-Site Scripting)",
        "definition": "A vulnerability that allows attackers to inject malicious scripts into trusted websites.",
        "letter": "X",
        "tags": [
        "Web Security",
        "Injection"
        ],
        "category": "Vulnerability"
    },
    {
        "term": "YARA",
        "definition": "A tool for identifying and classifying malware using rules-based pattern matching.",
        "letter": "Y",
        "tags": [
        "Malware Detection",
        "Forensics"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Zero-Day",
        "definition": "A vulnerability that is exploited before it becomes publicly known or patched.",
        "letter": "Z",
        "tags": [
        "Exploit",
        "Unknown Threat"
        ],
        "category": "Vulnerability"
    },
    {
        "term": "Authentication",
        "definition": "The process of verifying the identity of a user or system. Methods include passwords, biometrics, and multi-factor authentication.",
        "letter": "A",
        "tags": [
        "Authorization",
        "MFA",
        "Identity"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Botnet",
        "definition": "A network of compromised computers controlled by an attacker, used to perform coordinated attacks like DDoS.",
        "letter": "B",
        "tags": [
        "DDoS",
        "Malware"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Cryptography",
        "definition": "The practice of securing communication and data using mathematical techniques and algorithms.",
        "letter": "C",
        "tags": [
        "Encryption",
        "Security",
        "Algorithms"
        ],
        "category": "Core Concept"
    },
    {
        "term": "DDoS",
        "definition": "A Distributed Denial of Service attack floods a system with traffic to exhaust resources and disrupt services.",
        "letter": "D",
        "tags": [
        "Availability",
        "Attack"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Encryption",
        "definition": "A method of protecting data by converting it into unreadable code that only authorized users can decode.",
        "letter": "E",
        "tags": [
        "Confidentiality",
        "Crypto"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Firewall",
        "definition": "A security system that controls incoming and outgoing network traffic based on predetermined rules.",
        "letter": "F",
        "tags": [
        "Network Security",
        "Filtering"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Governance",
        "definition": "The framework of policies and controls used to manage cybersecurity strategy and compliance in organizations.",
        "letter": "G",
        "tags": [
        "Compliance",
        "Risk Management"
        ],
        "category": "Policy & Strategy"
    },
    {
        "term": "Hashing",
        "definition": "Transforming data into a fixed-size string of characters, which represents the original data in a secure format.",
        "letter": "H",
        "tags": [
        "Integrity",
        "Hash Function"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Incident Response",
        "definition": "A process for detecting, responding to, and recovering from cybersecurity incidents.",
        "letter": "I",
        "tags": [
        "Recovery",
        "Security Event"
        ],
        "category": "Operational Security"
    },
    {
        "term": "Jailbreaking",
        "definition": "Removing software restrictions imposed by the operating system to allow unauthorized access or modifications.",
        "letter": "J",
        "tags": [
        "Mobile Security",
        "Privilege Escalation"
        ],
        "category": "Vulnerability"
    },
    {
        "term": "Keylogger",
        "definition": "A malicious program that records keystrokes to steal sensitive information like passwords.",
        "letter": "K",
        "tags": [
        "Malware",
        "Spyware"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Logic Bomb",
        "definition": "Malicious code that is triggered when specific conditions are met, often used to cause harm or exfiltrate data.",
        "letter": "L",
        "tags": [
        "Malware",
        "Delayed Execution"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Man-in-the-Middle",
        "definition": "An attack where a malicious actor intercepts and potentially alters communication between two parties.",
        "letter": "M",
        "tags": [
        "Network Attack",
        "Eavesdropping"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "NAC (Network Access Control)",
        "definition": "A security solution that enforces policy on devices seeking to access network resources.",
        "letter": "N",
        "tags": [
        "Access Control",
        "Endpoint Security"
        ],
        "category": "Security Tool"
    },
    {
        "term": "OAuth",
        "definition": "An open standard for token-based authorization that allows users to grant access to resources without sharing credentials.",
        "letter": "O",
        "tags": [
        "Authorization",
        "Identity"
        ],
        "category": "Core Concept"
    },
    {
        "term": "Phishing",
        "definition": "A type of social engineering attack where attackers impersonate trustworthy entities to steal information.",
        "letter": "P",
        "tags": [
        "Social Engineering",
        "Email Security"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "QR Code Attack",
        "definition": "Exploiting QR codes to direct victims to malicious URLs or install malware.",
        "letter": "Q",
        "tags": [
        "Social Engineering",
        "Mobile"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "Ransomware",
        "definition": "Malware that encrypts files and demands payment from victims to restore access.",
        "letter": "R",
        "tags": [
        "Malware",
        "Encryption"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "SOC (Security Operations Center)",
        "definition": "A centralized team responsible for monitoring, detecting, and responding to cybersecurity threats.",
        "letter": "S",
        "tags": [
        "Monitoring",
        "Response"
        ],
        "category": "Operational Security"
    },
    {
        "term": "Threat Intelligence",
        "definition": "Information about potential or current attacks that can help organizations reduce risk.",
        "letter": "T",
        "tags": [
        "Cyber Threats",
        "Proactive Defense"
        ],
        "category": "Policy & Strategy"
    },
    {
        "term": "U2F (Universal 2nd Factor)",
        "definition": "A physical device used as a second factor in two-factor authentication (2FA).",
        "letter": "U",
        "tags": [
        "2FA",
        "Authentication"
        ],
        "category": "Security Tool"
    },
    {
        "term": "VPN",
        "definition": "A Virtual Private Network encrypts internet traffic and hides user IP addresses for secure online access.",
        "letter": "V",
        "tags": [
        "Privacy",
        "Encryption"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Worm",
        "definition": "A self-replicating malware that spreads across networks without user interaction.",
        "letter": "W",
        "tags": [
        "Self-Propagating",
        "Network"
        ],
        "category": "Attack Technique"
    },
    {
        "term": "XSS (Cross-Site Scripting)",
        "definition": "A vulnerability that allows attackers to inject malicious scripts into trusted websites.",
        "letter": "X",
        "tags": [
        "Web Security",
        "Injection"
        ],
        "category": "Vulnerability"
    },
    {
        "term": "YARA",
        "definition": "A tool for identifying and classifying malware using rules-based pattern matching.",
        "letter": "Y",
        "tags": [
        "Malware Detection",
        "Forensics"
        ],
        "category": "Security Tool"
    },
    {
        "term": "Zero-Day",
        "definition": "A vulnerability that is exploited before it becomes publicly known or patched.",
        "letter": "Z",
        "tags": [
        "Exploit",
        "Unknown Threat"
        ],
        "category": "Vulnerability"
    }
];