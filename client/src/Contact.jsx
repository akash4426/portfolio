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
    { icon: <EmailIcon />, label: "Email", value: "akashkarri2006@gmail.com", link: "mailto:akashkarri2006@gmail.com" },
    { icon: <LinkedInIcon />, label: "LinkedIn", value: "kakashreddy", link: "https://www.linkedin.com/in/kakashreddy" },
    { icon: <GitHubIcon />, label: "GitHub", value: "akash4426", link: "https://github.com/akash4426" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-obsidian-light/30">
      <div className="max-w-4xl mx-auto">
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
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-all text-center group bg-obsidian"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform text-white group-hover:text-gold-primary">{item.icon}</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{item.label}</div>
              <div className="text-white text-sm truncate font-medium">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary to-gold-dim"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
              <input
                name="name"
                onChange={update}
                value={form.name}
                required
                placeholder="John Doe"
                className="w-full p-4 rounded-xl bg-obsidian border border-white/10 text-white placeholder-slate-600 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
              <input
                name="email"
                type="email"
                onChange={update}
                value={form.email}
                required
                placeholder="john@example.com"
                className="w-full p-4 rounded-xl bg-obsidian border border-white/10 text-white placeholder-slate-600 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="6"
              required
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl bg-obsidian border border-white/10 text-white placeholder-slate-600 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${status === "sending"
              ? "bg-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-gold-primary text-obsidian hover:bg-gold-light hover:shadow-gold"
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-center font-bold text-sm"
            >
              Message sent successfully. I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-center font-bold text-sm"
            >
              Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
