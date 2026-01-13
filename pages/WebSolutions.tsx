
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const WebSolutions: React.FC<Props> = ({ navigate }) => {
  const solutions = [
    { title: 'Enterprise Knowledge & RAG', cat: 'Intelligence', desc: 'Next-gen retrieval systems for proprietary enterprise data.', impact: '40% reduction in document discovery time.', icon: 'trending_up', color: 'primary' },
    { title: 'Agentic CRM Integrator', cat: 'Automation', desc: 'Autonomous agents managing complex sales lifecycle workflows.', impact: 'Multi-step validation using ensemble LLM chains.', icon: 'account_tree', color: 'emerald-500' },
    { title: 'Predictive Supply Chain', cat: 'Operations', desc: 'Real-time logistics optimization using advanced custom models.', impact: 'Average delivery latency reduced by 14 days.', icon: 'bolt', color: 'amber-500' }
  ];

  return (
    <div className="flex flex-col max-w-lg mx-auto pb-20">
      <header className="px-6 pt-8 pb-4">
        <h1 className="text-3xl font-black tracking-tight">Web Solutions</h1>
        <p className="text-slate-500 mt-2 text-sm leading-relaxed">Enterprise-grade platforms engineered for high-impact intelligence.</p>
      </header>
      
      <div className="flex flex-col gap-6 px-4">
        {solutions.map((s, i) => (
          <div key={i} className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src={`https://picsum.photos/seed/${i+10}/800/600?grayscale`} alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className={`bg-${s.color}/10 border border-${s.color}/30 text-${s.color} backdrop-blur-md text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>{s.cat}</span>
              </div>
            </div>
            <div className="p-6 -mt-10 relative z-10 space-y-4">
              <div>
                <h2 className="text-xl font-bold text-white">{s.title}</h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
              </div>
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5 space-y-3">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Impact Metric</span>
                    <div className="flex bg-slate-800 rounded-full p-0.5 text-[8px] font-bold">
                       <span className="bg-primary text-white px-2 py-0.5 rounded-full">OUTCOME</span>
                       <span className="px-2 py-0.5 text-slate-500">PROCESS</span>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-${s.color} text-lg`}>{s.icon}</span>
                    <p className="text-xs text-slate-300 leading-snug">{s.impact}</p>
                 </div>
              </div>
              <button onClick={() => navigate(View.CONTACT)} className="w-full py-4 bg-white text-slate-900 font-bold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                Explore Platform <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="px-6 py-12 mt-8 bg-slate-900/50 border-t border-slate-800">
         <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
         <p className="text-sm text-slate-400 mb-6">Our systems engineering team builds bespoke platforms tailored to your specific technical requirements.</p>
         <button onClick={() => navigate(View.CONTACT)} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all">Schedule Technical Audit</button>
      </section>
    </div>
  );
};

export default WebSolutions;
