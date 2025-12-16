// Simple icon components for the portfolio
export const PythonIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C10.9 2 10 2.9 10 4V8H14V9H8C6.9 9 6 9.9 6 11V13C6 14.1 6.9 15 8 15H10V19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19V15H16C17.1 15 18 14.1 18 13V11C18 9.9 17.1 9 16 9H14V4C14 2.9 13.1 2 12 2Z" fill="url(#python-gradient)" />
        <defs>
            <linearGradient id="python-gradient" x1="6" y1="2" x2="18" y2="21">
                <stop offset="0%" stopColor="#4FC3F7" />
                <stop offset="100%" stopColor="#FFD54F" />
            </linearGradient>
        </defs>
    </svg>
);

export const JavaScriptIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
        <path d="M12 8V16M12 16L15 13M12 16L9 13" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const CppIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#00599C" stroke="#004482" strokeWidth="1.5" />
        <text x="12" y="15" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">C++</text>
    </svg>
);

export const JavaIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M8 18C8 18 7 18.5 8.5 18.7C10.3 19 11.2 18.9 13.5 18.5C13.5 18.5 14 18.8 14.8 19.1C9.5 21.3 4 19 8 18Z" fill="#EA2D2E" />
        <path d="M7.5 15.5C7.5 15.5 6.3 16.3 7.8 16.5C9.8 16.8 11.3 16.8 14.5 16.2C14.5 16.2 15 16.5 15.5 16.7C9.2 18.5 3.5 16.5 7.5 15.5Z" fill="#EA2D2E" />
        <circle cx="12" cy="8" r="3" fill="#5382A1" />
    </svg>
);

export const BrainIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8.5 3 6 5.5 6 8C6 9 6.3 9.9 6.7 10.7C5.7 11.3 5 12.3 5 13.5C5 15.4 6.6 17 8.5 17H9V19C9 20.7 10.3 22 12 22C13.7 22 15 20.7 15 19V17H15.5C17.4 17 19 15.4 19 13.5C19 12.3 18.3 11.3 17.3 10.7C17.7 9.9 18 9 18 8C18 5.5 15.5 3 12 3Z" fill="url(#brain-gradient)" />
        <defs>
            <linearGradient id="brain-gradient" x1="5" y1="3" x2="19" y2="22">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#C44569" />
            </linearGradient>
        </defs>
    </svg>
);

export const FireIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z" fill="#FF6B35" />
        <path d="M12 15C12 15 9 17 9 19C9 21 10.3 22 12 22C13.7 22 15 21 15 19C15 17 12 15 12 15Z" fill="#F7931E" />
    </svg>
);

export const LockIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="11" width="12" height="9" rx="2" fill="url(#lock-gradient)" />
        <path d="M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V11" stroke="#4ECDC4" strokeWidth="2" fill="none" />
        <circle cx="12" cy="15.5" r="1.5" fill="white" />
        <defs>
            <linearGradient id="lock-gradient" x1="6" y1="11" x2="18" y2="20">
                <stop offset="0%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#44A08D" />
            </linearGradient>
        </defs>
    </svg>
);

export const BookIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z" fill="url(#book-gradient)" />
        <path d="M8 8H16M8 12H16M8 16H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
            <linearGradient id="book-gradient" x1="4" y1="4" x2="20" y2="20">
                <stop offset="0%" stopColor="#667EEA" />
                <stop offset="100%" stopColor="#764BA2" />
            </linearGradient>
        </defs>
    </svg>
);

export const ReactIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
);

export const NodeIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#68A063" />
        <path d="M12 12L8 10V14L12 16L16 14V10L12 12Z" fill="#3C873A" />
    </svg>
);

export const MongoIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C12 3 8 8 8 12C8 16 10 19 12 21C14 19 16 16 16 12C16 8 12 3 12 3Z" fill="#4DB33D" />
        <path d="M11.5 21V23H12.5V21H11.5Z" fill="#3FA037" />
    </svg>
);

export const LightningIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#lightning-gradient)" />
        <defs>
            <linearGradient id="lightning-gradient" x1="3" y1="2" x2="21" y2="22">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
        </defs>
    </svg>
);

export const ShieldIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V6L12 2Z" fill="url(#shield-gradient)" />
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="shield-gradient" x1="4" y1="2" x2="20" y2="22">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#3A7BD5" />
            </linearGradient>
        </defs>
    </svg>
);

export const SearchIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="url(#search-gradient)" strokeWidth="2" fill="none" />
        <path d="M14.5 14.5L20 20" stroke="url(#search-gradient)" strokeWidth="2" strokeLinecap="round" />
        <defs>
            <linearGradient id="search-gradient" x1="4" y1="4" x2="20" y2="20">
                <stop offset="0%" stopColor="#F093FB" />
                <stop offset="100%" stopColor="#F5576C" />
            </linearGradient>
        </defs>
    </svg>
);

export const DockerIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="3" height="3" fill="#0DB7ED" />
        <rect x="8" y="10" width="3" height="3" fill="#0DB7ED" />
        <rect x="12" y="10" width="3" height="3" fill="#0DB7ED" />
        <rect x="8" y="7" width="3" height="2.5" fill="#0DB7ED" />
        <rect x="12" y="7" width="3" height="2.5" fill="#0DB7ED" />
        <path d="M16 10C16 10 18 9 19 10C20 11 20 12 19 13C18 14 4 14 4 14" stroke="#0DB7ED" strokeWidth="1.5" fill="none" />
    </svg>
);

export const GitIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="12" r="2" fill="#F05032" />
        <circle cx="18" cy="12" r="2" fill="#F05032" />
        <circle cx="12" cy="6" r="2" fill="#F05032" />
        <path d="M8 12H16M12 8V10" stroke="#F05032" strokeWidth="1.5" />
    </svg>
);

export const EmailIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="url(#email-gradient)" stroke="#4FC3F7" strokeWidth="1.5" />
        <path d="M3 7L12 13L21 7" stroke="#4FC3F7" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
            <linearGradient id="email-gradient" x1="3" y1="5" x2="21" y2="19">
                <stop offset="0%" stopColor="rgba(79, 195, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(79, 195, 247, 0.2)" />
            </linearGradient>
        </defs>
    </svg>
);

export const LinkedInIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="url(#linkedin-gradient)" stroke="#4FC3F7" strokeWidth="1.5" />
        <path d="M8 10V16M8 8V8.5M12 16V13C12 11.5 13 10.5 14 10.5C15 10.5 16 11.5 16 13V16" stroke="#4FC3F7" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
            <linearGradient id="linkedin-gradient" x1="4" y1="4" x2="20" y2="20">
                <stop offset="0%" stopColor="rgba(79, 195, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(79, 195, 247, 0.2)" />
            </linearGradient>
        </defs>
    </svg>
);

export const GitHubIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12C2 16.4 4.9 20.2 8.8 21.5C9.3 21.6 9.5 21.3 9.5 21V19.3C6.7 20 6.1 18 6.1 18C5.7 17 5 16.7 5 16.7C4 16 5.1 16 5.1 16C6.2 16.1 6.7 17.1 6.7 17.1C7.7 18.7 9.4 18.2 9.5 17.8C9.6 17.1 9.9 16.7 10.2 16.4C7.9 16.1 5.5 15.2 5.5 11.2C5.5 10.2 5.9 9.3 6.7 8.7C6.6 8.4 6.2 7.3 6.8 5.8C6.8 5.8 7.7 5.5 9.5 6.7C10.4 6.4 11.2 6.3 12 6.3C12.8 6.3 13.6 6.4 14.5 6.7C16.3 5.5 17.2 5.8 17.2 5.8C17.8 7.3 17.4 8.4 17.3 8.7C18.1 9.3 18.5 10.2 18.5 11.2C18.5 15.2 16.1 16.1 13.8 16.4C14.2 16.8 14.5 17.5 14.5 18.6V21C14.5 21.3 14.7 21.6 15.2 21.5C19.1 20.2 22 16.4 22 12C22 6.5 17.5 2 12 2Z" fill="url(#github-gradient)" stroke="#A855F7" strokeWidth="0.5" />
        <defs>
            <linearGradient id="github-gradient" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
            </linearGradient>
        </defs>
    </svg>
);

export const TensorFlowIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M11.76 2.75L2.47 7.94V17.06L11.76 22.25L21.05 17.06V7.94L11.76 2.75Z" fill="#FF6F00" fillOpacity="0.2" />
        <path d="M12 11.5V20.5" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 11.5L4.5 7" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 11.5L19.5 7" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="11.5" r="1.5" fill="#FF6F00" />
    </svg>
);

export const PyTorchIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#pytorch-gradient)" fillOpacity="0.1" />
        <path d="M8.5 16.5L12 13M12 13L15.5 9.5M12 13L9 9M12 13L15 16" stroke="#EE4C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="pytorch-gradient" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stopColor="#EE4C2C" />
                <stop offset="100%" stopColor="#EE4C2C" />
            </linearGradient>
        </defs>
    </svg>
);

export const KerasIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#D00000" fillOpacity="0.1" />
        <path d="M17 6L7 18M17 18L7 6" stroke="#D00000" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#D00000" />
    </svg>
);

export const ScikitLearnIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F7931E" strokeWidth="1.5" fill="rgba(247, 147, 30, 0.1)" />
        <path d="M12 6V18M6 12H18" stroke="#3498DB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="#F7931E" />
    </svg>
);

export const ExpressIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#000000" fillOpacity="0.1" />
        <path d="M7 12H17M12 7V17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="12" y="16" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial">EX</text>
    </svg>
);

export const SQLIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 4C7.58172 4 4 5.79086 4 8V16C4 18.2091 7.58172 20 12 20C16.4183 20 20 18.2091 20 16V8C20 5.79086 16.4183 4 12 4Z" fill="url(#sql-gradient)" fillOpacity="0.1" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 8C4 10.2091 7.58172 12 12 12C16.4183 12 20 10.2091 20 8" stroke="#00758F" strokeWidth="1.5" />
        <path d="M4 12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12" stroke="#00758F" strokeWidth="1.5" />
        <defs>
            <linearGradient id="sql-gradient" x1="4" y1="4" x2="20" y2="20">
                <stop offset="0%" stopColor="#00758F" />
                <stop offset="100%" stopColor="#F29111" />
            </linearGradient>
        </defs>
    </svg>
);

export const NetworkSecurityIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#4ECDC4" strokeWidth="1.5" fill="rgba(78, 205, 196, 0.1)" />
        <circle cx="12" cy="12" r="4" stroke="#4ECDC4" strokeWidth="1.5" />
        <path d="M12 8V10M12 14V16M8 12H10M14 12H16" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const EthicalHackingIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#FF6B6B" strokeWidth="1.5" fill="rgba(255, 107, 107, 0.1)" />
        <path d="M6 10L8 12L6 14" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14H14" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const CryptographyIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="10" width="12" height="10" rx="2" stroke="#FFE66D" strokeWidth="1.5" fill="rgba(255, 230, 109, 0.1)" />
        <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="#FFE66D" strokeWidth="1.5" />
        <path d="M12 14V16" stroke="#FFE66D" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1" fill="#FFE66D" />
    </svg>
);

export const ThreatAnalysisIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF6B6B" strokeWidth="1.5" fill="rgba(255, 107, 107, 0.1)" />
        <path d="M12 7V12L15 15" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#FF6B6B" />
        <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const ClipIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="black" fillOpacity="0.8" />
        <path d="M8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12Z" stroke="white" strokeWidth="2" />
        <path d="M12 2V8M12 16V22M2 12H8M16 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const GeminiIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-gradient)" />
        <defs>
            <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22">
                <stop offset="0%" stopColor="#4E8CFF" />
                <stop offset="100%" stopColor="#FFF" />
            </linearGradient>
        </defs>
    </svg>
);

export const FastApiIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#009688" fillOpacity="0.1" />
        <path d="M12 6V18M12 6L8 10M12 6L16 10" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H16" stroke="#009688" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const RagIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#607D8B" fillOpacity="0.1" />
        <path d="M14 2V8H20" stroke="#607D8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12L14 16M14 12L10 16" stroke="#607D8B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="14" r="5" stroke="#607D8B" strokeWidth="1.5" />
    </svg>
);

export const EmbeddingsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2" fill="#9C27B0" />
        <circle cx="18" cy="6" r="2" fill="#9C27B0" />
        <circle cx="6" cy="18" r="2" fill="#9C27B0" />
        <circle cx="18" cy="18" r="2" fill="#9C27B0" />
        <circle cx="12" cy="12" r="3" fill="#E1BEE7" />
        <path d="M6 6L12 12M18 6L12 12M6 18L12 12M18 18L12 12" stroke="#9C27B0" strokeWidth="1" />
    </svg>
);

export const TailwindIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 6C9 6 9 10 6 10C3 10 3 6 6 6C9 6 9 2 12 2C15 2 15 6 18 6C21 6 21 10 18 10C15 10 15 6 12 6Z" fill="#38B2AC" />
        <path d="M12 14C9 14 9 18 6 18C3 18 3 14 6 14C9 14 9 10 12 10C15 10 15 14 18 14C21 14 21 18 18 18C15 18 15 14 12 14Z" fill="#38B2AC" />
    </svg>
);

export const FramerMotionIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20V12H12L4 20V4Z" fill="white" fillOpacity="0.1" />
        <path d="M4 4H20L12 12L4 4Z" fill="#0055FF" />
        <path d="M4 20L12 12H20L12 20H4Z" fill="#FF0088" />
    </svg>
);

export const FlowerIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" fill="#F47F24" />
        <circle cx="12" cy="5" r="3" fill="#F47F24" fillOpacity="0.6" />
        <circle cx="12" cy="19" r="3" fill="#F47F24" fillOpacity="0.6" />
        <circle cx="5" cy="12" r="3" fill="#F47F24" fillOpacity="0.6" />
        <circle cx="19" cy="12" r="3" fill="#F47F24" fillOpacity="0.6" />
        <circle cx="7" cy="7" r="2" fill="#F47F24" fillOpacity="0.4" />
        <circle cx="17" cy="7" r="2" fill="#F47F24" fillOpacity="0.4" />
        <circle cx="7" cy="17" r="2" fill="#F47F24" fillOpacity="0.4" />
        <circle cx="17" cy="17" r="2" fill="#F47F24" fillOpacity="0.4" />
    </svg>
);

export const XGBoostIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#152737" />
        <path d="M12 4V20M4 12H20" stroke="#25C2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="7" width="10" height="10" rx="1" stroke="#25C2A0" strokeWidth="2" fill="none" transform="rotate(45 12 12)" />
    </svg>
);

export const StreamlitIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 12L12 22L20 12L12 2Z" fill="#FF4B4B" />
        <path d="M12 6L7 12L12 18L17 12L12 6Z" fill="white" fillOpacity="0.2" />
        <path d="M12 9L9.5 12L12 15L14.5 12L12 9Z" fill="white" />
    </svg>
);
