
import React from 'react';
import { View } from '../types';
import { MOCK_PROJECTS } from '../constants';

interface Props {
  navigate: (view: View) => void;
}

const PortalDashboard: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      {/* Client SubNav */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-sm font-medium text-primary">Good Morning, Sarah</p>
        <h1 className="text-2xl font-bold tracking-tight">Project Overview</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 px-4">
        <div className="col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-1">
            <p className="text-slate-500 text-sm font-medium">System ROI</p>
            <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">+5.2%</span>
          </div>
          <p className="text-3xl font-bold tracking-tight">$12,450</p>
          <p className="text-slate-400 text-xs mt-1">Accumulated value generated</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
          <p className="text-slate-500 text-xs font-medium">Efficiency</p>
          <p className="text-xl font-bold">+24%</p>
          <div className="h-1 w-12 bg-primary rounded-full mt-2"></div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
          <p className="text-slate-500 text-xs font-medium">Active Agents</p>
          <p className="text-xl font-bold">12</p>
          <div className="h-1 w-12 bg-primary/30 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Projects</h2>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-3">
          {MOCK_PROJECTS.map(project => (
            <div 
              key={project.id} 
              onClick={() => navigate(View.PORTAL_PROJECT_DETAIL)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm cursor-pointer hover:border-primary transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-base">{project.name}</h3>
                  <p className="text-slate-500 text-xs">Client: {project.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                  project.status === 'Testing' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${project.health > 90 ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                  <span className="text-slate-500 text-xs">{project.health}% Health</span>
                </div>
                <div className="flex -space-x-2">
                  {project.team.map((t, idx) => (
                    <div key={idx} className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[8px] font-bold">
                      {t[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portal Bottom Nav (Mobile Only style simulated) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_USAGE)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-medium">Usage</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">subscriptions</span>
            <span className="text-[10px] font-medium">Plan</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_BILLING)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-[10px] font-medium">Billing</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default PortalDashboard;
