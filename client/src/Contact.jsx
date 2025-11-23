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
      // Use VITE_API_URL from env, or fallback to localhost for development
      // Logic: Remove trailing slash from env var if present, then append /api/contact
      const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");
      const apiUrl = `${baseUrl}/api/contact`;

      console.log("Sending message to:", apiUrl); // Debug log

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
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Contact <span className="text-neon-blue">Me</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              name="name"
              onChange={update}
              value={form.name}
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              name="email"
              type="email"
              onChange={update}
              value={form.email}
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              onChange={update}
              value={form.message}
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-4 rounded-lg font-bold text-white transition-all duration-300 ${status === "sending"
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 shadow-lg shadow-neon-blue/20"
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-2 font-medium">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2 font-medium">Failed to send message. Try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
