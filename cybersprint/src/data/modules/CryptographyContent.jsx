// pure data per topic 
const CryptographyContent = {
    sections: [
      {
        heading: "🔐 What is Cryptography?",
        content: [
          "Cryptography comes from the Greek word *kryptos*, meaning 'hidden'. It’s the art of hiding information to keep it secret from unintended viewers.",
          "In cybersecurity, cryptography helps ensure:",
          "🔒 Confidentiality – Only the intended person can read the message.",
          "🧮 Integrity – The message hasn't been tampered with.",
          "✔️ Accuracy – It works as expected.",
          "📜 Non-repudiation – The sender cannot deny sending the message."
        ]
      },
      {
        heading: "🔁 Encryption vs Decryption",
        content: [
          "Encryption is the process of turning readable data into an unreadable format to protect it.",
          "`Plain: 'Cybersecurity is fun!'`",
          "`Encrypted: 'Fbehuvhfxulwb lv ixq!'`",
          "Decryption is the process of turning encrypted data back to readable form.",
          "`Decrypted: 'Cybersecurity is fun!'`"
        ]
      },
      {
        heading: "🔑 What is a Key?",
        content: [
          "A key is a special value used in encryption and decryption algorithms. Think of it like a secret password that locks or unlocks data."
        ]
      },
      {
        heading: "📜 A Brief History of Cryptography",
        content: [
          "🧱 **Manual Era**",
          "• Egyptian Hieroglyphs – Used as symbolic encryption.",
          "• Caesar Cipher – Shift letters by a number (e.g., A ➡ D).",
          "• Vigenère Cipher – Uses keywords to encrypt messages.",
          "• Navajo Code Talkers – Used Navajo language as an unbreakable code in WWII.",
          "",
          "⚙️ **Mechanical Era**",
          "• Enigma Machine – Used in WWII by Germany. Complex rotor-based encryption.",
          "• Bombe – Alan Turing’s machine that broke Enigma codes.",
          "• Bletchley Park – 75% of its codebreaking team were women, including Joan Clarke & Mavis Batey.",
          "",
          "💻 **Digital Era**",
          "• DES – An older encryption method (now weak).",
          "• AES – Strong encryption used today (e.g., Wi-Fi, HTTPS).",
          "• RSA – Asymmetric encryption with public and private keys."
        ]
      },
      {
        heading: "⚖️ Symmetric vs Asymmetric Cryptography",
        content: [
          "🗝️ **Symmetric** – Same key for both encryption and decryption.",
          "• Fast and used for bulk data encryption.",
          "• Example: AES, DES",
          "",
          "🔓 **Asymmetric** – Uses a public/private key pair.",
          "• Public key encrypts, private key decrypts.",
          "• Example: RSA, ECC, Diffie-Hellman",
          "• Slower but more secure for key exchange."
        ]
      },
      {
        heading: "🔍 Encryption vs Hashing",
        content: [
          "🔐 **Encryption** – Two-way process. Can decrypt data using a key.",
          "🧩 **Hashing** – One-way process. Used for data integrity & password storage.",
          "Example: Hashing 'Hello' ➡ `a591a6d40bf...`",
          "Change one letter, and the entire hash changes!"
        ]
      },
      {
        heading: "🔏 Digital Certificates & Signatures",
        content: [
          "📜 **Digital Certificate** – Confirms ownership of a public key (used in HTTPS).",
          "🖊️ **Digital Signature** – Verifies the source and integrity of a message (used in secure emails, financial transactions, and code signing)."
        ]
      },
      {
        heading: "🚨 Attacks on Cryptography",
        content: [
          "👾 Brute-force – Try every key possible.",
          "📊 Frequency Analysis – Guess based on letter frequency.",
          "📚 Dictionary Attack – Try words from a list.",
          "🔁 Replay Attack – Resend valid data to trick systems.",
          "🔍 Known/Chosen Plaintext – Use known messages to break encryption."
        ]
      },
      {
        heading: "🧠 Fun Activity – Try Caesar Cipher",
        content: [
          "Decode this message using Caesar Cipher (shift 7):",
          "`Fvb nla pu spml doha fvb ohcl aol jvbyhnl av hzr mvy.`",
          "Hint: Use https://cryptii.com to decode!"
        ]
      },
      {
        heading: "🧪 Challenge – Hash Comparison",
        content: [
          "1️⃣ Go to: https://www.browserling.com/tools/all-hashes",
          "2️⃣ Enter a sentence and generate a hash.",
          "3️⃣ Change one letter and generate the hash again.",
          "4️⃣ See how even small changes make huge differences!",
        ]
      },
      {
        heading: "🔁 Cryptography in Network Security",
        content: [
          "🔗 **Link Encryption** – Secures specific connections.",
          "🔐 **End-to-End Encryption** – Ensures only sender and receiver can read the message.",
          "🌐 **SSL/TLS** – Encrypts websites (look for 'https://').",
          "📡 **IPsec** – Secures communication over IP networks."
        ]
      },
      {
        heading: "✅ Recap: What You've Learned",
        content: [
          "• What cryptography is and why it matters.",
          "• Key historical milestones (Enigma, AES, RSA).",
          "• The difference between encryption, hashing, and digital signatures.",
          "• How cryptography is attacked—and how to defend it.",
          "• How you're part of the legacy of women in cybersecurity. 💪"
        ]
      }
    ]
  };
  
  export default CryptographyContent;