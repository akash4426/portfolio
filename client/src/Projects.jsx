import { motion } from "framer-motion";

const projects = [
  {
    title: "Video RAG System (CLIP + Gemini + FastAPI)",
    description: "Developed a multimodal Retrieval-Augmented Generation system that extracts embeddings from video frames using CLIP and performs intelligent video-based QA using Gemini. Supports text, frame-level search, and semantic video understanding.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://videorag-in9agcr2rynefnchvpwflz.streamlit.app/",
    featured: true,
    gradient: "from-neon-blue to-neon-cyan",
    image: "/images/projects/video-rag.png",
  },
  {
    title: "Document RAG System (Text & PDF) using FastAPI",
    description: "Developed a Retrieval-Augmented Generation (RAG) system that processes text and PDF documents. Extracts embeddings, stores them in a vector database, and builds a FastAPI backend for querying using similarity search.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
    featured: true,
    gradient: "from-neon-purple to-electric-violet",
    image: "/images/projects/doc-rag.png",
  },
  {
    title: "Portfolio Website",
    description: "A futuristic portfolio built with React, Tailwind, and Framer Motion featuring glassmorphism, advanced animations, and a cyberpunk aesthetic.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    gradient: "from-neon-cyan to-neon-blue",
    image: "/images/projects/portfolio.png",
  },
  {
    title: "Federated Learning System",
    description: "A decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426",
    gradient: "from-electric-violet to-neon-purple",
    image: "/images/projects/federated-learning.png",
  },
  {
    title: "Threat Detection App",
    description: "Real-time security threat detection using osquery and AI to monitor system events and identify potential security breaches.",
    tech: ["Node.js", "osquery", "AI/ML"],
    link: "https://github.com/akash4426",
    gradient: "from-neon-pink to-neon-purple",
    image: "/images/projects/threat-detection.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML, cybersecurity, and full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    FEATURED
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-neon-purple border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-neon-blue transition-all text-sm"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl border border-white/5 hover:border-neon-purple/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-32 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-semibold rounded-full bg-white/5 text-neon-blue border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-400 border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-bold text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
