import { motion } from "framer-motion";
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

// ... (imports remain the same)

const projects = [
  {
    title: "Video RAG System",
    description: "Multimodal Retrieval-Augmented Generation system extracting embeddings from video frames using CLIP and performing intelligent video-based QA using Gemini.",
    tech: ["CLIP", "Gemini", "Python", "FastAPI"],
    link: "https://videorag-in9agcr2rynefnchvpwflz.streamlit.app/",
    category: "AI Research"
  },
  {
    title: "Document RAG System",
    description: "Retrieval-Augmented Generation (RAG) system processing text and PDF documents. Extracts embeddings, stores in vector DB, and queries via FastAPI.",
    tech: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/akash4426/rag-system.git",
    category: "NLP"
  },
  {
    title: "GenAI-Enhanced Job Search & Recommendation System",
    description: "GenAI-powered job search assistant that performs resume-aware job ranking using semantic embeddings and vector-based retrieval. The system converts resumes and job descriptions into dense embeddings and applies similarity search to rank job opportunities based on contextual relevance rather than keyword matching.",
    tech: [
      "Python",
      "Docker",
      "Railway",
      "Sentence-BERT",
      "FAISS",
      "Pandas",
      "Web Scraping"
    ],
    link: "https://jobspy-5x5qg9mwi9fdspreo4vzzg.streamlit.app/",
    category: "GenAI / AI Productivity"
  },

  {
    title: "Federated Learning System",
    description: "Decentralized machine learning system for privacy-preserving AI, enabling collaborative model training without sharing raw data.",
    tech: ["Python", "PyTorch", "Flower"],
    link: "https://github.com/akash4426/federated-threat-detection.git",
    category: "Privacy AI"
  },
  {
    title: "Phishing URL Detector",
    description: "Phishing URL detector using Python and Machine Learning to monitor system events and identify potential security breaches.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/akash4426/Phishing_Links",
    category: "Security"
  },

  {
    title: "SDN – Self-Healing Network",
    description: "A Self-Healing SDN System utilizing XGBoost for real-time DDoS attack detection and PPO Reinforcement Learning for autonomous mitigation actions.",
    tech: ["Python", "XGBoost", "Streamlit", "Machine Learning"],
    link: "https://github.com/akash4426/SDN",
    category: "AI Security"
  },
  {
    title: "LLM-Powered SOC Analyst",
    description: "Developed an AI-driven Security Operations Center (SOC) analyst that automatically investigates security logs by combining LSTM-based anomaly detection, Retrieval-Augmented Generation (RAG) using the MITRE ATT&CK framework, and a locally deployed LLM (Phi-3). The system reconstructs attack timelines, maps threats to MITRE techniques, and generates structured incident reports.",
    tech: ["Python", "FastAPI", "RAG", "Machine Learning", "Security", "GenAI"],
    link: "https://github.com/akash4426/LLM_Powered_SOC_ANALYST.git",
    category: "AI Security"
  }
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

                  <div className="p-8 flex flex-col flex-grow relative z-20">
                    <div className="mb-4">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/5 text-gold-primary border border-white/10 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

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
