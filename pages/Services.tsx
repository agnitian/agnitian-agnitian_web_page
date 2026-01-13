
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const Services: React.FC<Props> = ({ navigate }) => {
  const services = [
    { title: 'AI & GenAI', icon: 'auto_awesome', sub: 'Enterprise RAG Systems', details: 'Harnessing internal knowledge bases with RAG for context-aware responses.', tags: ['LLMs', 'Vector DBs', 'LangChain'] },
    { title: 'Agentic Automation', icon: 'precision_manufacturing', sub: 'Autonomous Workflows', details: 'Multi-step autonomous agents that can plan, execute, and self-correct tasks.', tags: ['Auto-GPT', 'Tool Calling', 'Reasoning'] },
    { title: 'Model Intelligence', icon: 'psychology', sub: 'Predictive Analytics', details: 'Deep learning models for forecasting, anomaly detection, and pattern recognition.', tags: ['Scikit-Learn', 'XGBoost'] }
  ];

  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <section className="px-6 pt-10 pb-6">
        <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">Our Expertise</span>
        <h1 className="text-3xl font-black leading-tight tracking-tight">Web Services & AI Systems</h1>
        <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-xs">Architecting the next generation of intelligent enterprise applications with a focus on autonomous performance.</p>
      </section>

      <div className="px-4 space-y-4">
        {services.map((s, i) => (
          <details key={i} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden" open={i === 0}>
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors list-none">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-open:bg-primary group-open:text-white transition-all">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="px-5 pb-6 pt-2">
              <div className="border-l-2 border-primary/30 pl-4 space-y-4">
                <div>
                   <h4 className="text-sm font-bold">{s.sub}</h4>
                   <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.details}</p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {s.tags.map(t => <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[9px] font-bold text-slate-500 uppercase">{t}</span>)}
                   </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      <section className="mt-12 px-6">
        <h3 className="font-bold mb-4">Quick Capabilities</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-3">security</span>
            <h5 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Security</h5>
            <p className="text-xs font-bold mt-1">SOC2 Compliant AI</p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-3">speed</span>
            <h5 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Performance</h5>
            <p className="text-xs font-bold mt-1">Sub-100ms Inference</p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-t dark:border-slate-800 z-40">
        <button onClick={() => navigate(View.CONTACT)} className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined">chat_bubble</span>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Services;
