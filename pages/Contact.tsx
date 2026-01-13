
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const Contact: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-xl mx-auto pb-20">
      <section className="p-8 bg-slate-100 dark:bg-slate-900/40 rounded-b-3xl">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Connect</span>
        <h1 className="text-3xl font-black mb-6 leading-tight">Start a conversation with our engineering team</h1>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-xl text-primary"><span className="material-symbols-outlined">location_on</span></div>
            <div><h3 className="font-bold text-sm">San Francisco HQ</h3><p className="text-sm text-slate-500">101 California St, Suite 2710<br/>San Francisco, CA 94111</p></div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-xl text-primary"><span className="material-symbols-outlined">mail</span></div>
            <div><h3 className="font-bold text-sm">Email</h3><p className="text-sm text-slate-500">systems@agnitian.ai</p></div>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <div className="h-1 flex-1 bg-primary rounded-full"></div>
            <div className="h-1 flex-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            <div className="h-1 flex-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
          </div>
          <div className="flex justify-between items-end">
            <h2 className="text-xl font-bold">Project Details</h2>
            <span className="text-xs text-slate-500">Step 1 of 3</span>
          </div>
        </div>

        <form className="space-y-6">
           <div>
             <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">What are we building?</label>
             <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'genai', label: 'GenAI & LLM Implementation', icon: 'auto_awesome' },
                  { id: 'agentic', label: 'Agentic Automation', icon: 'precision_manufacturing' },
                  { id: 'digital', label: 'Digital Platform & Backend', icon: 'cloud_sync' }
                ].map((t, idx) => (
                  <label key={t.id} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${idx === 0 ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                    <input type="radio" name="p_type" defaultChecked={idx === 0} className="hidden" />
                    <span className={`material-symbols-outlined mr-4 ${idx === 0 ? 'text-primary' : 'text-slate-400'}`}>{t.icon}</span>
                    <span className="text-sm font-bold flex-1">{t.label}</span>
                    {idx === 0 && <span className="material-symbols-outlined text-primary text-sm">check_circle</span>}
                  </label>
                ))}
             </div>
           </div>

           <div className="space-y-4 pt-4">
             <div className="relative">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-400" />
             </div>
             <div className="relative">
                <input type="email" placeholder="Business Email" className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 placeholder:text-slate-400" />
             </div>
           </div>

           <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-all">
             Next Step
             <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
