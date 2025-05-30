const NetworkSecurityContent = {
    sections: [
      {
        heading: "🌐 What is Network Security?",
        content: [
          "Network security refers to the strategies and tools used to protect computer networks and the data they transmit from unauthorized access, misuse, or attacks.",
          "💡 Imagine your home Wi-Fi network — protecting it with a password is a basic form of network security.",
          "Without proper security, sensitive data (like passwords or financial info) can be intercepted or manipulated."
        ]
      },
      {
        heading: "🔒 Why is Network Security Important?",
        content: [
          "✅ Prevents data breaches by ensuring only authorized users can access the network.",
          "💰 Saves organizations from expensive damage due to hacking.",
          "📡 Ensures smooth communication between systems and devices by keeping threats out."
        ]
      },
      {
        heading: "⚠️ Types of Network Attacks",
        content: [
          "🔹 **DDoS (Distributed Denial of Service):** Overwhelms a server with traffic from multiple sources to make it crash.",
          "🔹 **Privilege Escalation:** A hacker gains more access than intended (e.g., a regular user becomes admin).",
          "🔹 **Man in the Middle (MitM):** Attacker secretly intercepts and possibly alters communication between two parties.",
          "🔹 **Identity Spoofing:** Pretending to be someone else using fake IP or caller ID."
        ]
      },
      {
        heading: "🛡️ Protecting Your Network",
        content: [
          "✅ **Access Controls:** Ensures only the right people get access to the right parts of the network.",
          "✅ **Authentication:** Uses passwords, biometrics, or 2FA to verify identity.",
          "✅ **RBAC (Role-Based Access Control):** Users only get access based on their job role.",
          "✅ **ACLs (Access Control Lists):** Rules on routers/firewalls that control what traffic is allowed.",
          "✅ **Network Segmentation:** Dividing the network into sections to contain breaches.",
          "✅ **Firewalls:** Think of it as a digital wall between you and threats.",
          "✅ **IDS (Intrusion Detection System):** Watches the network and alerts you to suspicious activity."
        ]
      },
      {
        heading: "🧰 Introduction to Metasploit",
        content: [
          "Metasploit is a powerful tool used by ethical hackers to find and exploit vulnerabilities in systems.",
          "Think of it like a toolkit that can simulate attacks to test how secure a network really is.",
          "💡 Used for penetration testing to help organizations find weak spots before real attackers do."
        ]
      },
      {
        heading: "🔍 Metasploit Modules",
        content: [
          "🧨 **Exploits:** Code used to breach a system.",
          "🧾 **Payloads:** What runs after an exploit (e.g., remote shell access).",
          "🔧 **Auxiliaries:** Tools like scanners, sniffers, etc.",
          "🔐 **Encoders:** Obfuscate payloads to bypass detection."
        ]
      },
      {
        heading: "💡 Hands-on Activity: Try Metasploit Commands",
        content: [
          "`msfconsole` - Open the Metasploit console",
          "`help` - Show help menu",
          "`show exploits` - List all available exploits",
          "`use exploit/windows/smb/ms17_010_eternalblue` - Load a specific exploit",
          "`show options` - View required variables",
          "`set RHOSTS 192.168.0.100` - Set target IP",
          "`set LHOST 192.168.0.10` - Set attacker’s IP",
          "`check` - Verify if the target is vulnerable",
          "`run` or `exploit` - Launch the attack"
        ]
      },
      {
        heading: "🎓 Real-World Example",
        content: [
          "In 2017, the WannaCry ransomware attack used a vulnerability in Windows (exploited via EternalBlue) to affect over 200,000 systems globally.",
          "🧑‍💻 Hackers used tools like Metasploit to execute the exploit, encrypt files, and demand ransom payments.",
          "Lesson: Unpatched systems and exposed networks can lead to massive consequences!"
        ]
      },
      {
        heading: "📘 Recap & Learning Goals",
        content: [
          "✅ Understand the different types of network attacks",
          "✅ Explore how to defend networks with firewalls, segmentation, and controls",
          "✅ Learn the basics of Metasploit and how to simulate real attacks safely",
          "✅ Recognize the value of testing and monitoring to protect against threats"
        ]
      }
    ]
  };
  
  export default NetworkSecurityContent;