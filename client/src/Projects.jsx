import { motion } from "framer-motion";

const projects = [
  {
    title: "VIDEO_RAG_SYSTEM",
    description: "Multimodal Retrieval-Augmented Generation system extracting embeddings from video frames using CLIP and performing intelligent video-based QA using Gemini.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI"],
    link: "https://videorag-in9agcr2rynefnchvpwflz.streamlit.app/",
    featured: true,
    image: "/images/projects/video-rag.png",
    id: "OP-001"
  },
  {
    title: "DOC_RAG_SYSTEM",
    description: "Retrieval-Augmented Generation (RAG) system processing text and PDF documents. Extracts embeddings, stores in vector DB, and queries via FastAPI.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
    featured: true,
    image: "/images/projects/doc-rag.png",
    id: "OP-002"
  },
  {
    title: "PORTFOLIO_V2",
    description: "Advanced personal portfolio featuring glassmorphism, cyber-security aesthetic, and system-level animations built with React and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    image: "/images/projects/portfolio.png",
    id: "OP-003"
  },
  {
    title: "FEDERATED_LEARNING",
    description: "Decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426",
    image: "/images/projects/federated-learning.png",
    id: "OP-004"
  },
  {
    title: "THREAT_DETECTION",
    description: "Real-time security threat detection using osquery and AI to monitor system events and identify potential security breaches.",
    tech: ["Node.js", "osquery", "AI/ML"],
    link: "https://github.com/akash4426",
    image: "/images/projects/threat-detection.png",
    id: "OP-005"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            MISSION_<span className="text-cyber-green">LOGS</span>
          </h2>
          <div className="h-1 w-24 bg-cyber-green mx-auto"></div>
          <p className="text-cyber-green/60 font-mono mt-4">
            // DECLASSIFIED_OPERATIONS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-black border border-cyber-green/30 hover:border-cyber-green transition-all duration-300 overflow-hidden"
            >
              {/* Image Overlay */}
              <div className="h-48 relative overflow-hidden border-b border-cyber-green/30">
                <div className="absolute inset-0 bg-cyber-green/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-scanline z-20 pointer-events-none opacity-50"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 z-30 bg-black/80 border border-cyber-green/50 px-2 py-1 text-xs font-mono text-cyber-green">
                  {project.id}
                </div>
              </div>

              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-cyber-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 font-mono leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] uppercase font-mono border border-cyber-green/30 text-cyber-green/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="block w-full text-center py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all font-mono text-sm uppercase tracking-wider"
                >
                  ACCESS_FILE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
