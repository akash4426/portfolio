import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "./components/FadeIn";
import TiltCard from "./components/TiltCard";
import Spotlight from "./components/Spotlight";
import {
  PythonIcon, ReactIcon, PyTorchIcon,
  ClipIcon, GeminiIcon, FastApiIcon, RagIcon,
  EmbeddingsIcon, TailwindIcon, FramerMotionIcon,
  FlowerIcon, ShieldIcon, LightningIcon,
  XGBoostIcon, StreamlitIcon
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
  "Security": ShieldIcon,
  "XGBoost": XGBoostIcon,
  "Streamlit": StreamlitIcon
};

const projects = [
  {
    title: "LLM-Powered SOC Analyst",
    description: "AI-driven Security Operations Center analyst that automatically investigates security logs by combining LSTM-based anomaly detection, RAG using the MITRE ATT&CK framework, and a locally deployed LLM (Phi-3). Reconstructs attack timelines and generates structured incident reports.",
    tech: ["Python", "FastAPI", "RAG", "Machine Learning", "Security"],
    link: "https://github.com/akash4426/LLM_Powered_SOC_ANALYST.git",
    category: "AI Security",
    color: "#ef4444"
  },
  {
    title: "Video RAG System",
    description: "Multimodal Retrieval-Augmented Generation system extracting embeddings from video frames using CLIP and performing intelligent video-based question answering using Gemini.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI"],
    link: "https://videorag-in9agcr2rynefnchvpwflz.streamlit.app/",
    category: "AI Research",
    color: "#8b5cf6"
  },
  {
    title: "Hybrid RAG System",
    description: "Production-style RAG pipeline for text and PDF documents using hybrid retrieval (TF-IDF + vector embeddings). Built a FastAPI backend with sub-second retrieval latency and efficient end-to-end response handling.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426/rag-system.git",
    category: "NLP",
    color: "#06b6d4"
  },
  {
    title: "GenAI Job Search System",
    description: "GenAI-powered job search assistant that performs resume-aware job ranking using semantic embeddings and FAISS vector-based retrieval for contextual relevance rather than keyword matching.",
    tech: ["Python", "Embeddings", "Machine Learning"],
    link: "https://jobspy-genai-latest.onrender.com/",
    category: "GenAI",
    color: "#f59e0b"
  },
  {
    title: "Federated Learning System",
    description: "Decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data using the Flower federated learning framework.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426/federated-threat-detection.git",
    category: "Privacy AI",
    color: "#10b981"
  },
  {
    title: "Phishing URL Detector",
    description: "Machine Learning-based phishing URL detector that monitors URLs and identifies potential security threats with high accuracy using Python and classical ML algorithms.",
    tech: ["Python", "Machine Learning", "Security"],
    link: "https://github.com/akash4426/Phishing_Links",
    category: "Security",
    color: "#ef4444"
  },
  {
    title: "SDN Self-Healing Network",
    description: "A Self-Healing SDN System utilizing XGBoost for real-time DDoS attack detection and PPO Reinforcement Learning for autonomous mitigation actions.",
    tech: ["Python", "XGBoost", "Streamlit", "Machine Learning"],
    link: "https://github.com/akash4426/SDN",
    category: "AI Security",
    color: "#f59e0b"
  }
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 px-6 relative bg-black/40">
      {/* Neural grid background */}
      <div className="absolute inset-0 neural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display text-white tracking-tight">
            Selected <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Showcasing innovative solutions in Artificial Intelligence and Cybersecurity.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gold-primary text-black border-gold-primary shadow-gold-sm"
                  : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TiltCard className="h-full">
                  <div
                    className="h-full rounded-3xl overflow-hidden border border-white/5 bg-[#080808] hover:border-white/20 transition-all duration-500 hover:shadow-2xl flex flex-col relative group"
                    style={{ "--project-color": project.color }}
                  >
                    {/* Top accent line with project color */}
                    <div
                      className="h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                    />

                    <div className="p-7 flex flex-col flex-grow relative z-20">
                      {/* Subtle bg glow */}
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                        style={{ background: project.color }}
                      />

                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="px-3 py-1 text-[10px] font-bold rounded-full border uppercase tracking-widest"
                          style={{
                            color: project.color,
                            borderColor: `${project.color}40`,
                            background: `${project.color}10`
                          }}
                        >
                          {project.category}
                        </span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/30 transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors font-display tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 4).map((t, i) => {
                          const Icon = techIcons[t] || LightningIcon;
                          return (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1 font-medium hover:bg-white/10 transition-colors"
                            >
                              <span className="w-3.5 h-3.5 inline-flex items-center">
                                <Icon />
                              </span>
                              {t}
                            </span>
                          );
                        })}
                        {project.tech.length > 4 && (
                          <span className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-slate-500 border border-white/5">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </Spotlight>
      </div>
    </section>
  );
}
