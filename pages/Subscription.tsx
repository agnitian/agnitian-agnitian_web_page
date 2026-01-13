
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const Subscription: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <div className="p-4 pt-6">
        <h1 className="text-2xl font-bold tracking-tight">Subscription</h1>
      </div>

      {/* Current Plan Card */}
      <div className="p-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-primary p-6 relative">
             <span className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-widest">Active</span>
             <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">Current Plan</p>
             <h3 className="text-white text-2xl font-bold mt-1">Enterprise AI Maintenance</h3>
          </div>
          <div className="p-6 flex justify-between items-end">
            <div>
              <p className="text-slate-500 text-xs mb-1">Monthly Investment</p>
              <p className="text-2xl font-black">$1,200.00</p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-[10px]">Next Renewal</p>
              <p className="text-sm font-semibold">Oct 24, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Add-ons Entry */}
      <div className="px-4 py-4">
        <button 
          onClick={() => navigate(View.PORTAL_ADDONS)}
          className="w-full flex items-center justify-between p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-primary transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">add_circle</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-sm">Manage Plan Add-ons</h4>
              <p className="text-xs text-slate-500">Configure capacity and features</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400">chevron_right</span>
        </button>
      </div>

      {/* Comparison Section */}
      <div className="px-4 py-4">
         <h3 className="font-bold text-lg mb-4">Plan Comparison</h3>
         <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
            <div className="min-w-[280px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
               <h4 className="text-xl font-bold">Scale</h4>
               <p className="text-primary font-bold text-lg mt-1">$2,500<span className="text-xs font-normal text-slate-500">/mo</span></p>
               <ul className="mt-6 space-y-3">
                  {['Advanced Analytics Dashboard', '24/7 Priority Support', '500,000 API Calls/mo', '10TB Cloud Storage'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
               </ul>
               <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-6">Upgrade to Scale</button>
            </div>

            <div className="min-w-[280px] bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
               <h4 className="text-xl font-bold">Custom</h4>
               <p className="text-slate-400 text-sm mt-1">Tailored for Enterprise</p>
               <ul className="mt-6 space-y-3">
                  {['Dedicated Infrastructure', '99.99% SLA Guarantee', 'Custom API Limits', 'Personal Account Manager'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                      {f}
                    </li>
                  ))}
               </ul>
               <button className="w-full bg-white/10 text-white border border-white/20 font-bold py-3 rounded-xl mt-6">Contact Sales</button>
            </div>
         </div>
      </div>

      {/* Portal Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_USAGE)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-medium">Usage</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">subscriptions</span>
            <span className="text-[10px] font-bold">Plan</span>
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

export default Subscription;
