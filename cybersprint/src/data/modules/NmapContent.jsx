const NmapContent = {
    title: "Nmap: Mastering Network Scanning & Reconnaissance",
    sections: [
      {
        heading: "🌐 What is Nmap?",
        content: [
          "Nmap (Network Mapper) is a powerful open-source tool for network discovery and security auditing.",
          "It helps identify live hosts, open ports, running services, and operating systems on a network.",
          "Widely used by network administrators and security professionals for tasks like network inventory, managing service upgrade schedules, and monitoring host or service uptime.",
          "`nmap <IP Address>` – Basic scan to discover open ports on a target."
        ]
      },
      {
        heading: "🎯 Why Use Nmap?",
        content: [
          "• Discover live hosts on a network.",
          "• Identify open ports and associated services.",
          "• Detect operating systems and software versions.",
          "• Perform vulnerability assessments using NSE scripts.",
          "• Map network topology and detect firewall configurations."
        ]
      },
      {
        heading: "⚙️ Common Nmap Scan Types & Flags",
        content: [
          "`-sS` → TCP SYN scan (stealth scan).",
          "`-sT` → TCP connect scan.",
          "`-sU` → UDP scan.",
          "`-sV` → Service version detection.",
          "`-O` → Operating system detection.",
          "`-A` → Aggressive scan (OS detection, version detection, script scanning, and traceroute).",
          "`-p` → Specify port(s) to scan. Example: `-p 22,80,443`.",
          "`-Pn` → Treat all hosts as online (skip host discovery).",
          "`-T4` → Set timing template for faster execution."
        ]
      },
      {
        heading: "🔍 Understanding Port States",
        content: [
          "• `Open`: An application is actively accepting connections on this port.",
          "• `Closed`: No application is listening on this port.",
          "• `Filtered`: Nmap cannot determine whether the port is open due to packet filtering.",
          "• `Unfiltered`: The port is accessible, but Nmap cannot determine if it's open or closed.",
          "• `Open|Filtered`: Nmap cannot determine whether the port is open or filtered.",
          "• `Closed|Filtered`: Nmap cannot determine whether the port is closed or filtered."
        ]
      },
      {
        heading: "🛠️ Real-World Scenarios",
        content: [
          "1. **Web Server Enumeration**:",
          "   `nmap -sV example.com`",
          "   Identifies open ports and services, e.g., Apache 2.4.29 on port 80.",
          "2. **Operating System Detection**:",
          "   `nmap -O 192.168.1.1`",
          "   Determines the OS of the target host.",
          "3. **Vulnerability Assessment**:",
          "   `nmap --script vuln 192.168.1.1`",
          "   Runs NSE scripts to detect vulnerabilities on the target."
        ]
      },
      {
        heading: "🎓 Hands-On Activity: Scanning a Target",
        content: [
          "1. Choose a target IP or domain (ensure you have permission to scan).",
          "2. Run a basic scan:",
          "   `nmap <target>`",
          "3. Perform a service version detection scan:",
          "   `nmap -sV <target>`",
          "4. Execute an aggressive scan for detailed information:",
          "   `nmap -A <target>`",
          "5. Analyze the results to identify potential vulnerabilities."
        ]
      },
      {
        heading: "📚 Additional Resources",
        content: [
          "• Nmap Official Documentation: https://nmap.org/docs.html",
          "• Nmap Cheat Sheet: https://www.stationx.net/nmap-cheat-sheet/",
          "• Nmap Scripting Engine Guide: https://nmap.org/book/nse.html",
          "• Exploit Database: https://www.exploit-db.com/"
        ]
      },
      {
        heading: "🏁 Summary",
        content: [
          "✅ Nmap is a versatile tool for network scanning and security auditing.",
          "✅ It supports various scan types to gather information about hosts and services.",
          "✅ NSE scripts enhance Nmap's capabilities for vulnerability detection.",
          "✅ Always ensure you have proper authorization before scanning targets."
        ]
      }
    ]
  };
  
  export default NmapContent;