import { motion } from "framer-motion";

const projects = [
  {
    title: "Video RAG System",
    description: "Multimodal Retrieval-Augmented Generation system extracting embeddings from video frames using CLIP and performing intelligent video-based QA using Gemini.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI"],
    link: "https://videorag-in9agcr2rynefnchvpwflz.streamlit.app/",
    image: "/images/projects/video-rag.png",
    category: "AI Research"
  },
  {
    title: "Document RAG System",
    description: "Retrieval-Augmented Generation (RAG) system processing text and PDF documents. Extracts embeddings, stores in vector DB, and queries via FastAPI.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
    image: "/images/projects/doc-rag.png",
    category: "NLP"
  },
  {
    title: "Portfolio V2",
    description: "Advanced personal portfolio featuring glassmorphism, AI-driven aesthetic, and system-level animations built with React and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    image: "/images/projects/portfolio.png",
    category: "Web Dev"
  },
  {
    title: "Federated Learning System",
    description: "Decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426",
    image: "/images/projects/federated-learning.png",
    category: "Privacy AI"
  },
  {
    title: "Phishing URL Detector",
    description: "Phishing URL detector using Python and Machine Learning to monitor system events and identify potential security breaches.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/akash4426/Phishing_Links",
    image: "/images/projects/threat-detection.png",
    category: "Security"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Processed <span className="text-gradient-ai">Datasets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of deployed models and system architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-neural-blue/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-deep-mind/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neural-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-neural-blue hover:text-synapse-purple transition-colors"
                >
                  View Analysis <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
