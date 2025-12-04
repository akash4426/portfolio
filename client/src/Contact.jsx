import { motion } from "framer-motion";
import { useState } from "react";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");
      const apiUrl = `${baseUrl}/api/contact`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      setStatus("error");
    }
  };

  const contactMethods = [
    { icon: <EmailIcon />, label: "Encrypted Mail", value: "akashkarri2006@gmail.com", link: "mailto:akashkarri2006@gmail.com" },
    { icon: <LinkedInIcon />, label: "LinkedIn", value: "kakashreddy", link: "https://www.linkedin.com/in/kakashreddy" },
    { icon: <GitHubIcon />, label: "GitHub", value: "akash4426", link: "https://github.com/akash4426" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure <span className="text-gradient-ai">Uplink</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Establish a secure connection for collaboration or inquiry.
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
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neural-blue/30 transition-all text-center group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform text-neural-blue">{item.icon}</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-white text-sm truncate group-hover:text-neural-blue transition-colors">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neural-blue to-synapse-purple"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Identity</label>
              <input
                name="name"
                onChange={update}
                value={form.name}
                required
                placeholder="Enter Name"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-neural-blue focus:ring-1 focus:ring-neural-blue outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Return Address</label>
              <input
                name="email"
                type="email"
                onChange={update}
                value={form.email}
                required
                placeholder="Enter Email"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-neural-blue focus:ring-1 focus:ring-neural-blue outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Transmission Data</label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="6"
              required
              placeholder="Enter Message..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-neural-blue focus:ring-1 focus:ring-neural-blue outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${status === "sending"
              ? "bg-gray-800 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-neural-blue to-synapse-purple text-white hover:shadow-neural"
              }`}
          >
            {status === "sending" ? "Transmitting..." : "Initiate Transmission"}
          </button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-neural-blue/10 border border-neural-blue/30 text-neural-blue text-center font-bold text-sm"
            >
              Transmission Successful. Awaiting Response.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-center font-bold text-sm"
            >
              Transmission Failed. Retry Protocol Initiated.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
