import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import TiltCard from "./components/TiltCard";
import Spotlight from "./components/Spotlight";
import {
  PythonIcon, ReactIcon, PyTorchIcon,
  ClipIcon, GeminiIcon, FastApiIcon, RagIcon,
  EmbeddingsIcon, TailwindIcon, FramerMotionIcon,
  FlowerIcon, ShieldIcon, LightningIcon
} from "./Icons";

const techIcons = {
  "Python": PythonIcon,
  "React": ReactIcon,
  "PyTorch": PyTorchIcon,
  "CLIP": ClipIcon,
  "Gemini": GeminiIcon,
  "FastAPI": FastApiIcon,
  "RAG": RagIcon,
  "Embeddings": EmbeddingsIcon,
  "Tailwind": TailwindIcon,
  "Framer Motion": FramerMotionIcon,
  "Flower": FlowerIcon,
  "Machine Learning": LightningIcon,
  "Security": ShieldIcon
};

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
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            Selected <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Showcasing innovative solutions in Artificial Intelligence and Cybersecurity.
          </p>
        </FadeIn>

        <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
            >
              <TiltCard className="h-full">
                <div className="glass-card rounded-2xl overflow-hidden group hover:border-gold-primary/40 transition-all duration-500 hover:shadow-2xl h-full flex flex-col bg-obsidian/50">
                  {/* Image Container */}
                  <div className="h-48 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-obsidian/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-obsidian/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors font-display">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tech.map((t, i) => {
                        const Icon = techIcons[t] || LightningIcon;
                        return (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1.5 font-medium"
                          >
                            <Icon />
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-gold-primary hover:text-gold-light transition-colors group/link mt-auto"
                    >
                      View Project <span className="text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
