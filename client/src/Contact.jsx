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
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "akashkarri2006@gmail.com",
      link: "mailto:akashkarri2006@gmail.com",
      color: "#4FC3F7"
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "kakashreddy",
      link: "https://www.linkedin.com/in/kakashreddy",
      color: "#0A66C2"
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      value: "akash4426",
      link: "https://github.com/akash4426",
      color: "#a855f7"
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ background: "rgba(10, 15, 26, 0.3)" }}>
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 neural-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or want to discuss the future of AI and Security? Let's connect.
          </p>
        </motion.div>

        {/* Contact Method Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-all text-center group"
              style={{ background: "rgba(10, 15, 26, 0.6)" }}
            >
              <div
                className="flex justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                {item.label}
              </div>
              <div className="text-white text-sm truncate font-medium">
                {item.value}
              </div>
              {/* Bottom accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full mt-4 mx-auto transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          style={{ background: "rgba(10, 15, 26, 0.6)" }}
          onSubmit={handleSubmit}
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary via-cyber to-accent-purple"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                name="name"
                onChange={update}
                value={form.name}
                required
                placeholder="John Doe"
                className="w-full p-4 rounded-xl text-white placeholder-slate-600 outline-none transition-all input-glow"
                style={{
                  background: "#030712",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={update}
                value={form.email}
                required
                placeholder="john@example.com"
                className="w-full p-4 rounded-xl text-white placeholder-slate-600 outline-none transition-all input-glow"
                style={{
                  background: "#030712",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="5"
              required
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl text-white placeholder-slate-600 outline-none transition-all resize-none input-glow"
              style={{
                background: "#030712",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={status !== "sending" ? { scale: 1.02 } : {}}
            whileTap={status !== "sending" ? { scale: 0.98 } : {}}
            className="w-full p-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden btn-shine"
            style={{
              background: status === "sending" ? "#1e293b" : "linear-gradient(135deg, #f59e0b, #fbbf24)",
              color: status === "sending" ? "#64748b" : "#030712",
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </motion.button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl border text-center font-bold text-sm"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                borderColor: "rgba(16, 185, 129, 0.3)",
                color: "#10b981"
              }}
            >
              ✅ Message sent! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl border text-center font-bold text-sm"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.3)",
                color: "#ef4444"
              }}
            >
              ❌ Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
