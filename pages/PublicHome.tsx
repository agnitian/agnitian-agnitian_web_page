
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const PublicHome: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex flex-col justify-end px-6 pb-16 md:px-10 bg-cover bg-center overflow-hidden" 
               style={{backgroundImage: 'linear-gradient(rgba(18, 25, 32, 0.4) 0%, rgba(18, 25, 32, 0.95) 100%), url("https://picsum.photos/1200/800?grayscale")'}}>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Engineering the Future</span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
            Building Systems That <br className="hidden md:block"/> Truly Matter
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8">
            Professional AI systems engineering focusing on impactful digital solutions and autonomous intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate(View.CONTACT)} className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all">Start a Project</button>
            <button onClick={() => navigate(View.SOLUTIONS)} className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold backdrop-blur-sm transition-all">View Case Studies</button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-8 bg-primary rounded-full"></div>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Expertise</span>
        </div>
        <h2 className="text-3xl font-bold mb-10 tracking-tight">Our Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'AI & GenAI', icon: 'auto_awesome', desc: 'Enterprise-grade LLM implementation and RAG architecture for private data intelligence.' },
            { title: 'Agentic Automation', icon: 'precision_manufacturing', desc: 'Developing autonomous agent workflows that handle complex, multi-step business logic.' },
            { title: 'Advanced Models', icon: 'psychology', desc: 'Custom ML model fine-tuning and predictive analytics tailored to specific industry domains.' },
            { title: 'Digital Platforms', icon: 'cloud_sync', desc: 'Building scalable cloud-native architectures and high-performance backend systems.' }
          ].map((cap, i) => (
            <div key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-4 transition-all">
                <span className="material-symbols-outlined">{cap.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to build something impactful?</h2>
          <p className="text-blue-100 max-w-md mx-auto mb-10 relative z-10">Our engineering team is ready to help you navigate the complex landscape of AI and digital platforms.</p>
          <button onClick={() => navigate(View.CONTACT)} className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-100 shadow-xl transition-all active:scale-95">
            Get Started Today
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-1 rounded-lg">
              <span className="material-symbols-outlined text-primary">developer_board</span>
            </div>
            <h2 className="font-bold">AGNITIAN</h2>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <button onClick={() => navigate(View.SERVICES)} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => navigate(View.SOLUTIONS)} className="hover:text-primary transition-colors">Case Studies</button>
            <button onClick={() => navigate(View.ABOUT)} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate(View.CONTACT)} className="hover:text-primary transition-colors">Privacy</button>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-500">© 2024 AGNITIAN SYSTEMS ENGINEERING. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;
