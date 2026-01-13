
import React from 'react';
import { View } from '../types';
import { MOCK_INVOICES } from '../constants';

interface Props {
  navigate: (view: View) => void;
}

const Billing: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <div className="p-4 pt-6">
        <h1 className="text-2xl font-bold tracking-tight">Billing & Invoices</h1>
      </div>

      {/* Summary Stats */}
      <div className="px-4 py-2 space-y-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
           <div className="flex justify-between items-center mb-1">
             <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Contract Value</p>
             <span className="material-symbols-outlined text-primary text-sm">contract</span>
           </div>
           <p className="text-3xl font-black tracking-tight">$125,000.00</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Paid</p>
              <p className="text-xl font-bold text-emerald-500">$85,000</p>
           </div>
           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Pending</p>
              <p className="text-xl font-bold text-amber-500">$40,000</p>
           </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 py-6">
        <button 
          onClick={() => navigate(View.PORTAL_PAYMENT_METHOD)}
          className="w-full bg-primary hover:bg-primary-hover text-white h-14 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined">lock</span>
          Pay Now ($40,000.00)
        </button>
      </div>

      {/* Invoice History */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Invoice History</h2>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-3">
          {MOCK_INVOICES.map(inv => (
            <div key={inv.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
               <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                     <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">description</span>
                     </div>
                     <div>
                        <p className="font-bold text-sm">{inv.id}</p>
                        <p className="text-[10px] text-slate-500">{inv.status === 'Paid' ? `Paid ${inv.dueDate}` : `Due ${inv.dueDate}`}</p>
                     </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider block mb-1 ${
                      inv.status === 'Overdue' ? 'bg-red-500/10 text-red-500' : 
                      inv.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>{inv.status}</span>
                    <p className="font-bold text-sm">${inv.amount.toLocaleString()}</p>
                  </div>
               </div>
               <div className="flex justify-between items-center pt-3 border-t border-slate-50 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 italic truncate max-w-[200px]">{inv.phase}</p>
                  <button className="text-primary text-[10px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">download</span>
                    PDF
                  </button>
               </div>
            </div>
          ))}
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
          <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">subscriptions</span>
            <span className="text-[10px] font-medium">Plan</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_BILLING)} className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-[10px] font-bold">Billing</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Billing;
