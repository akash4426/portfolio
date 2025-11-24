import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: "📧", label: "Email", value: "akashkarri2006@gmail.com", link: "mailto:akashkarri2006@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "kakashreddy", link: "https://www.linkedin.com/in/kakashreddy" },
            { icon: "💻", label: "GitHub", value: "akash4426", link: "https://github.com/akash4426" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-gray-400 text-sm mb-1">{item.label}</div>
              <div className="text-white font-semibold group-hover:text-neon-blue transition-colors">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-10 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue"></div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Name</label>
              <input
                name="name"
                onChange={update}
                value={form.name}
                required
                placeholder="Your name"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Email</label>
              <input
                name="email"
                type="email"
                onChange={update}
                value={form.email}
                required
                placeholder="your.email@example.com"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Message</label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="6"
              required
              placeholder="Tell me about your project or idea..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-5 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden group ${status === "sending"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-neon-blue-lg"
              }`}
          >
            <span className="relative z-10">
              {status === "sending" ? "Sending..." : "Send Message"}
            </span>
            {status !== "sending" && (
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-neon-green/10 border border-neon-green/30 text-neon-green text-center font-medium"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-medium"
            >
              ✗ Failed to send message. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
