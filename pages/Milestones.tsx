
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const Milestones: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <header className="p-4 flex items-center gap-4">
        <button onClick={() => navigate(View.PORTAL_PROJECT_DETAIL)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <h1 className="font-bold text-lg">Project Roadmap</h1>
      </header>

      <div className="px-5 py-4">
         <div className="flex justify-between items-end mb-2">
            <div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Overall Progress</p>
               <h2 className="text-2xl font-black">Architecture Phase</h2>
            </div>
            <p className="text-xl font-black text-primary">45%</p>
         </div>
         <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[45%] rounded-full"></div>
         </div>
      </div>

      <div className="p-5 space-y-0 relative">
         {/* Connector Line */}
         <div className="absolute left-9 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

         {/* Phase 1 */}
         <div className="relative flex gap-4 pb-10">
            <div className="z-10 size-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg mt-1">
               <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Phase 1</p>
                    <h4 className="font-bold">Discovery Phase</h4>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded uppercase">Completed</span>
               </div>
               <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border dark:border-slate-700">
                     <span className="material-symbols-outlined text-slate-400 text-sm">description</span>
                     <span className="text-xs font-medium">Project_Roadmap.pdf</span>
                     <span className="material-symbols-outlined text-primary text-sm ml-auto">download</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Phase 2 */}
         <div className="relative flex gap-4 pb-10">
            <div className="z-10 size-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0 shadow-lg mt-1 ring-4 ring-primary/20">
               <span className="material-symbols-outlined text-sm">pending</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-primary p-5 rounded-2xl shadow-lg">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase">Phase 2</p>
                    <h4 className="font-bold">Architecture</h4>
                  </div>
                  <span className="text-[9px] font-bold bg-primary text-white px-2 py-0.5 rounded uppercase">In Progress</span>
               </div>
               <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-primary/5 rounded-lg border border-primary/20">
                     <span className="material-symbols-outlined text-primary text-sm">architecture</span>
                     <span className="text-xs font-bold">System_Architecture.pdf</span>
                     <span className="material-symbols-outlined text-primary text-sm ml-auto">open_in_new</span>
                  </div>
               </div>
               <button className="w-full bg-primary text-white font-bold py-3 text-xs rounded-xl mt-4 shadow-lg shadow-primary/20">Submit Feedback</button>
            </div>
         </div>

         {/* Phase 3 */}
         <div className="relative flex gap-4">
            <div className="z-10 size-8 bg-slate-200 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center shrink-0 mt-1">
               <span className="material-symbols-outlined text-sm">schedule</span>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm opacity-50">
               <p className="text-[10px] font-bold text-slate-400 uppercase">Phase 3</p>
               <h4 className="font-bold">Beta Phase</h4>
               <p className="text-[10px] text-slate-400 italic mt-2">Scheduled for Nov 2023</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Milestones;
