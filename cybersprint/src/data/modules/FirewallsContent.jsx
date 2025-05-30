const FirewallsContent = {
    title: "🔥 Firewalls & Network Defense",
    subtitle: "Block the threats. Allow the trusted. Stay protected.",
    sections: [
      {
        heading: "🧱 What is a Firewall?",
        content: [
          "A firewall is a security system that monitors and controls incoming and outgoing traffic based on predefined security rules.",
          "It can be hardware, software, or a combination of both.",
          "Firewalls form the first line of defense in securing your network from unauthorized access."
        ]
      },
      {
        heading: "🔐 Why Firewalls Matter",
        content: [
          "Firewalls prevent unauthorized access, ensuring only trusted data enters or leaves your network.",
          "They help block malware, hackers, and data exfiltration attempts.",
          "Think of a firewall as a security guard — checking credentials before letting anyone in."
        ]
      },
      {
        heading: "🧪 Real-World Example: WannaCry",
        content: [
          "In 2017, the WannaCry ransomware exploited systems using open ports and vulnerabilities.",
          "Many affected organizations lacked basic firewall configurations to block malicious inbound connections.",
          "Lesson: A properly configured firewall can block the attack vector before exploitation happens."
        ]
      },
      {
        heading: "🚦 How Firewalls Filter Traffic",
        content: [
          "Allow by default: Everything is blocked unless explicitly allowed — more secure.",
          "Deny by default: Everything is allowed unless explicitly blocked — easier, but riskier.",
          "Rules can be based on IP address, port, protocol, service, or application."
        ]
      },
      {
        heading: "📊 Types of Firewalls",
        content: [
          "Packet Filtering Firewall – Examines headers like IP, port, and protocol. (e.g., iptables)",
          "Stateful Inspection Firewall – Tracks connections and context. (e.g., Cisco ASA)",
          "Application Proxy Firewall – Acts as an intermediary to inspect full requests. (e.g., Squid Proxy)",
          "Next-Gen Firewall (NGFW) – Includes deep inspection, antivirus, intrusion prevention, etc. (e.g., Palo Alto Networks)"
        ]
      },
      {
        heading: "🧱 IPTables - Manual Rule-Based Firewall",
        content: [
          "`iptables -L` – Lists all active rules.",
          "`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` – Allows SSH connections.",
          "`sudo iptables -A INPUT -s 192.168.0.50 -j DROP` – Blocks all connections from 192.168.0.50.",
          "`sudo iptables -D INPUT -p tcp --dport 22 -j ACCEPT` – Removes SSH allowance rule.",
          "`sudo iptables -F` – Flushes all rules (dangerous — removes all protection)."
        ]
      },
      {
        heading: "⚙️ UFW - Uncomplicated Firewall (User-Friendly)",
        content: [
          "`sudo ufw enable` – Enables the firewall.",
          "`sudo ufw allow 22` – Allows SSH (port 22).",
          "`sudo ufw allow 80,443/tcp` – Allows HTTP and HTTPS.",
          "`sudo ufw deny 23` – Blocks Telnet (an insecure protocol).",
          "`sudo ufw allow from 192.168.0.101` – Allows all traffic from this IP only.",
          "`sudo ufw status verbose` – Shows all rules with extra detail."
        ]
      },
      {
        heading: "🔧 Fun Activity: Secure Your Server",
        content: [
          "You have a server hosting:",
          "- A web server (Apache on ports 80/443)",
          "- A Flask API on port 3001",
          "- A MySQL DB on port 3306, but only allow access from 192.168.1.50",
          "- SSH for remote management",
          "- Block everything else",
          "Your UFW setup should look like this:",
          "`sudo ufw allow 22/tcp`",
          "`sudo ufw allow 3001/tcp`",
          "`sudo ufw allow 80,443/tcp`",
          "`sudo ufw allow from 192.168.1.50 to any port 3306`",
          "`sudo ufw default deny incoming`",
          "`sudo ufw enable`"
        ]
      },
      {
        heading: "🛠️ Troubleshooting Firewalls",
        content: [
          "Misconfigured rules can block legit traffic — test after applying.",
          "Use `ufw status numbered` or `iptables -L` to audit current rules.",
          "Log suspicious blocks with logging enabled (`ufw logging on`).",
          "Check app firewalls (like Apache, MySQL) in addition to system-level ones."
        ]
      },
      {
        heading: "🚨 Extra Tools & Real Use Cases",
        content: [
          "pfSense – Advanced open-source firewall with GUI (used in small offices, labs).",
          "IPFire – Linux-based firewall focused on speed, security, and simplicity.",
          "Cloud Firewalls – AWS Security Groups, Azure NSGs, GCP Firewall Rules for cloud VMs."
        ]
      },
      {
        heading: "🎓 Recap",
        content: [
          "Firewalls block or allow traffic based on rules you set.",
          "Types include packet filtering, stateful, proxy, and NGFWs.",
          "Tools like iptables and ufw help apply rules easily.",
          "You can now configure and troubleshoot basic firewall setups!"
        ]
      }
    ]
  };
  
  export default FirewallsContent;