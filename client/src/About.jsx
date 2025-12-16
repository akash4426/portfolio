import { motion } from "framer-motion";
import Spotlight from "./components/Spotlight";
import FadeIn from "./components/FadeIn";
import { LightningIcon, ShieldIcon } from "./Icons";
import { GraduationIcon } from "./NavIcons";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
            Professional <span className="text-gradient-gold">Profile</span>
          </h2>
        </FadeIn>

        <Spotlight className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-auto lg:h-[600px] group">
          {/* Card 1: Profile (Tall) */}
          <div className="md:row-span-2 relative rounded-3xl border border-white/10 bg-obsidian overflow-hidden">
            <div className="absolute inset-0 bg-gold-primary/5"></div>
            <div className="h-full flex flex-col p-6">
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/akash.jpeg"
                  alt="Akash Karri"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-white mb-2 font-display">Akash Karri</h3>
                <p className="text-gold-primary font-medium tracking-wide uppercase text-sm mb-4">AI & Security Engineer</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 border border-white/5">Visakhapatnam, IN</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 border border-white/5">Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Bio (Wide) */}
          <div className="md:col-span-2 relative rounded-3xl border border-white/10 bg-obsidian p-8 flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <h4 className="text-xl font-bold text-white mb-4 relative z-10">The Intersection of Intelligence & Defense</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light relative z-10">
              I am a <strong className="text-white font-medium">Cybersecurity Analyst</strong> and <strong className="text-white font-medium">AI Engineer</strong> with a deep focus on building resilient intelligent systems. My work bridges the gap between offensive security and generative AI, ensuring that the future of intelligence is secure by design.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light relative z-10">
              Specializing in <span className="text-gold-primary">Federated Learning</span> and defensive AI architectures, I design solutions that are not only powerful but inherently secure and privacy-preserving.
            </p>
          </div>

          {/* Card 3: Stats/Details */}
          <div className="relative rounded-3xl border border-white/10 bg-obsidian p-6 flex flex-col justify-between group/card hover:border-gold-primary/30 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center text-gold-primary"><LightningIcon /></div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Focus</div>
                  <div className="text-white font-medium">AI Integration</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><ShieldIcon /></div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Approach</div>
                  <div className="text-white font-medium">Zero Trust</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Feature */}
          <div className="relative rounded-3xl border border-white/10 bg-obsidian p-6 flex items-center gap-4 group/card hover:bg-white/5 transition-colors">
            <div className="text-gold-primary"><GraduationIcon className="w-10 h-10" /></div>
            <div>
              <div className="font-bold text-white text-lg">Lifelong Learner</div>
              <div className="text-sm text-slate-500">Continuous Evolution</div>
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}
