import { motion } from "framer-motion";
import { useState } from "react";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");
      const apiUrl = `${baseUrl}/api/contact`;

      console.log("Sending message to:", apiUrl);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const contactMethods = [
    { icon: <EmailIcon />, label: "ENCRYPTED_MAIL", value: "akashkarri2006@gmail.com", link: "mailto:akashkarri2006@gmail.com" },
    { icon: <LinkedInIcon />, label: "LINKEDIN_NODE", value: "kakashreddy", link: "https://www.linkedin.com/in/kakashreddy" },
    { icon: <GitHubIcon />, label: "GITHUB_REPO", value: "akash4426", link: "https://github.com/akash4426" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            SECURE_<span className="text-cyber-green">UPLINK</span>
          </h2>
          <p className="text-cyber-green/60 font-mono">
            // ESTABLISH_CONNECTION
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-black border border-cyber-green/30 p-6 hover:bg-cyber-green/5 hover:border-cyber-green transition-all text-center group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform text-cyber-green">{item.icon}</div>
              <div className="text-gray-500 text-xs font-mono mb-1">{item.label}</div>
              <div className="text-white font-mono text-sm truncate group-hover:text-cyber-green transition-colors">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-black/80 border border-cyber-green/30 p-8 md:p-10 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 w-full bg-cyber-green/10 border-b border-cyber-green/20 px-4 py-1 flex items-center justify-between">
            <span className="text-xs font-mono text-cyber-green/60">msg_terminal_v1.0</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-cyber-green/30"></div>
              <div className="w-2 h-2 rounded-full bg-cyber-green/30"></div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-cyber-green mb-2">&gt; INPUT_NAME</label>
              <input
                name="name"
                onChange={update}
                value={form.name}
                required
                placeholder="Enter identifier..."
                className="w-full p-3 bg-black border border-cyber-green/30 text-white font-mono placeholder-gray-700 focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-cyber-green mb-2">&gt; INPUT_EMAIL</label>
              <input
                name="email"
                type="email"
                onChange={update}
                value={form.email}
                required
                placeholder="Enter return address..."
                className="w-full p-3 bg-black border border-cyber-green/30 text-white font-mono placeholder-gray-700 focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-xs font-mono text-cyber-green mb-2">&gt; INPUT_MESSAGE</label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="6"
              required
              placeholder="Enter transmission data..."
              className="w-full p-3 bg-black border border-cyber-green/30 text-white font-mono placeholder-gray-700 focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full mt-8 p-4 font-bold font-mono uppercase tracking-widest transition-all duration-300 border ${status === "sending"
              ? "bg-gray-900 border-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-cyber-green/10 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-neon-green"
              }`}
          >
            {status === "sending" ? "TRANSMITTING..." : "INITIATE_TRANSMISSION"}
          </button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 border border-cyber-green/50 bg-cyber-green/10 text-cyber-green text-center font-mono text-sm"
            >
              &gt; TRANSMISSION_SUCCESSFUL
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 border border-red-500/50 bg-red-500/10 text-red-500 text-center font-mono text-sm"
            >
              &gt; TRANSMISSION_FAILED: RETRY_REQUIRED
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
