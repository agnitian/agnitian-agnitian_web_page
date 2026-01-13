
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { generateProjectInsights } from '../services/geminiService';

interface Props {
  navigate: (view: View) => void;
}

const ProjectDetail: React.FC<Props> = ({ navigate }) => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);

  const fetchInsights = async () => {
    setLoadingInsights(true);
    const data = await generateProjectInsights("Neural Engine v4", "In Progress");
    setInsights(data);
    setLoadingInsights(false);
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <div>
          <h1 className="text-lg font-bold">Enterprise RAG System</h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Project ID: AGN-9042</p>
        </div>
      </header>

      {/* Quick Metrics */}
      <div className="grid grid-cols-3 gap-2 px-4 py-2">
        {['Uptime 99.98%', 'Active 1.2k', 'Latency 42ms'].map((m, i) => (
          <div key={i} className="bg-slate-100 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-[10px] text-slate-500 uppercase">{m.split(' ')[0]}</p>
            <p className="font-bold text-sm">{m.split(' ')[1]}</p>
          </div>
        ))}
      </div>

      {/* Gemini AI Insights */}
      <section className="p-4">
        <div className="bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 p-5 rounded-2xl relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              AI PROJECT INSIGHTS
            </h3>
            <button 
              onClick={fetchInsights} 
              disabled={loadingInsights}
              className="text-[10px] font-bold text-primary hover:underline"
            >
              {loadingInsights ? 'Analysing...' : 'Regenerate'}
            </button>
          </div>
          
          <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 min-h-[60px]">
            {insights ? (
              <div className="whitespace-pre-wrap">{insights}</div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-4">
                <p className="opacity-70 italic text-xs">Analysis required for current sprint context.</p>
                <button 
                  onClick={fetchInsights}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold"
                >
                  Generate Intelligence Report
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Kanban Simulation */}
      <section className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Next Milestone</h3>
          <button onClick={() => navigate(View.PORTAL_MILESTONES)} className="text-primary text-sm font-semibold">View Roadmap</button>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
           <div className="flex items-center gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 size-12 rounded-xl flex flex-col items-center justify-center font-bold">
                 <span className="text-[9px] uppercase text-slate-400">Oct</span>
                 <span>28</span>
              </div>
              <div className="flex-1">
                 <p className="text-sm font-bold">UAT Testing Phase</p>
                 <p className="text-xs text-slate-500">Internal quality assurance</p>
              </div>
              <span className="material-symbols-outlined text-slate-300">chevron_right</span>
           </div>
        </div>
      </section>

      <section className="px-4 py-4">
        <h3 className="font-bold mb-3">System Activity</h3>
        <div className="bg-black text-emerald-500 font-mono text-[10px] p-4 rounded-xl h-40 overflow-y-auto leading-relaxed border border-slate-800">
          <p>[14:22:01] <span className="text-blue-400">INFO</span> Request received: /api/v1/query</p>
          <p>[14:22:03] <span className="text-purple-400">PROC</span> Embedding generation triggered...</p>
          <p>[14:22:05] <span className="text-green-400">SUCC</span> Vector search complete. 4 results found.</p>
          <p className="border-l-2 border-red-500 pl-2 my-1 text-red-500">[14:22:08] ERR! LLM provider timeout (status 504)</p>
          <p>[14:22:12] <span className="text-yellow-400">WARN</span> Automatic retry initiated (1/3)</p>
          <p className="animate-pulse">_</p>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
