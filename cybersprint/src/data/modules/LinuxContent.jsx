const LinuxContent = {
    title: "🐧 Introduction to Linux for Cybersecurity",
    sections: [
      {
        heading: "What is Linux?",
        content: [
          "Linux is an open-source operating system that's widely used in cybersecurity for penetration testing, server management, and more.",
          "It's preferred due to its powerful command-line tools, flexibility, and security features."
        ]
      },
      {
        heading: "Why Linux in Cybersecurity?",
        content: [
          "Linux is used in most cybersecurity tools and distributions like Kali Linux, Parrot OS, etc.",
          "It provides fine-grained control over system processes, networks, and permissions."
        ]
      },
      {
        heading: "Basic Linux Commands",
        content: [
          "`pwd` – Displays the current directory.",
          "`ls` – Lists files and folders in the current directory.",
          "`cd` – Changes directory. Example: `cd /home/user`.",
          "`mkdir` – Creates a new directory.",
          "`touch` – Creates a new file.",
          "`rm` – Removes files or directories. Use with caution!"
        ]
      },
      {
        heading: "Navigating the Filesystem",
        content: [
          "`/` – The root directory, where everything begins.",
          "`/home` – User directories live here.",
          "`/etc` – Configuration files.",
          "`/bin` and `/usr/bin` – System binaries (commands and tools)."
        ]
      },
      {
        heading: "Working with Files",
        content: [
          "`cat file.txt` – Displays file contents.",
          "`nano file.txt` – Opens file in a simple editor.",
          "`cp file1 file2` – Copies file1 to file2.",
          "`mv oldname newname` – Renames or moves files.",
          "`chmod +x script.sh` – Makes a script executable."
        ]
      },
      {
        heading: "Fun Activity 🧠",
        content: [
          "Try running these commands in your terminal:",
          "`touch hello.txt` – Creates a file.",
          "`echo 'Hello Linux!' > hello.txt` – Adds text to the file.",
          "`cat hello.txt` – Reads the content.",
          "`rm hello.txt` – Deletes the file. Bye bye!"
        ]
      },
      {
        heading: "Bonus: Pipes & Redirection",
        content: [
          "`|` – Pipes output from one command to another. Example: `ls | grep txt`.",
          "`>` – Redirects output to a file. Example: `ls > list.txt`.",
          "`>>` – Appends output to a file. Example: `echo 'Hi' >> list.txt`."
        ]
      },
      {
        heading: "Practice Tip ✨",
        content: [
          "Use websites like https://www.webminal.org or install Ubuntu on a VM to safely practice Linux commands.",
          "Memorize a few commands each day — they’ll become second nature over time!"
        ]
      }
    ]
  };
  
  export default LinuxContent;