import { motion } from "framer-motion";

const projects = [
  {
    title: "Video RAG System (CLIP + Gemini + FastAPI)",
    description: "Developed a multimodal Retrieval-Augmented Generation system that extracts embeddings from video frames using CLIP and performs intelligent video-based QA using Gemini. Supports text, frame-level search, and semantic video understanding.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
  },
  {
    title: "Document RAG System (Text & PDF) using FastAPI",
    description: "Developed a Retrieval-Augmented Generation (RAG) system that processes text and PDF documents. Extracts embeddings, stores them in a vector database, and builds a FastAPI backend for querying using similarity search.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
  },
  {
    title: "Portfolio Website",
    description: "A futuristic portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Federated Learning System",
    description: "A decentralized machine learning system for privacy-preserving AI.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426",
  },
  {
    title: "Threat Detection App",
    description: "Real-time security threat detection using osquery and AI.",
    tech: ["Node.js", "osquery", "AI/ML"],
    link: "https://github.com/akash4426",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured <span className="text-neon-blue">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-neon-purple border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-block text-sm font-bold text-white hover:text-neon-blue transition-colors">
                View Project &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
