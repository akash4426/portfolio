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
    image: "/images/projects/video-rag-v2.png",
    category: "AI Research"
  },
  {
    title: "Document RAG System",
    description: "Retrieval-Augmented Generation (RAG) system processing text and PDF documents. Extracts embeddings, stores in vector DB, and queries via FastAPI.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426",
    image: "/images/projects/doc-rag-v2.png",
    category: "NLP"
  },
  {
    title: "Portfolio V2",
    description: "Advanced personal portfolio featuring glassmorphism, AI-driven aesthetic, and system-level animations built with React and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    image: "/images/projects/portfolio-v2.png",
    category: "Web Dev"
  },
  {
    title: "Federated Learning System",
    description: "Decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426",
    image: "/images/projects/federated-learning-v2.png",
    category: "Privacy AI"
  },
  {
    title: "Phishing URL Detector",
    description: "Phishing URL detector using Python and Machine Learning to monitor system events and identify potential security breaches.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/akash4426/Phishing_Links",
    image: "/images/projects/threat-detection-v2.png",
    category: "Security"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative bg-black/40">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display text-white tracking-tight">
            Selected <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Showcasing innovative solutions in Artificial Intelligence and Cybersecurity.
          </p>
        </FadeIn>

        <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 group">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
            >
              <TiltCard className="h-full">
                <div className="h-full rounded-3xl overflow-hidden border border-white/5 bg-[#080808] hover:border-gold-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 flex flex-col relative group">
                  {/* Image Container */}
                  <div className="h-56 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-black/90 text-white border border-white/10 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-20">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors font-display tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tech.map((t, i) => {
                        const Icon = techIcons[t] || LightningIcon;
                        return (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1.5 font-medium group-hover:bg-white/10 transition-colors"
                          >
                            <Icon />
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold-primary transition-colors group/link mt-auto uppercase tracking-wider"
                    >
                      View Project <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
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
