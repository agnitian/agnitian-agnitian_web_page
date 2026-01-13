
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const PaymentMethod: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex items-end sm:items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm fixed inset-0 z-50 p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
         <header className="p-4 border-b dark:border-slate-800 flex items-center justify-between">
            <button onClick={() => navigate(View.PORTAL_BILLING)} className="material-symbols-outlined text-slate-400">close</button>
            <h2 className="font-bold text-lg">Add Payment Method</h2>
            <span className="material-symbols-outlined text-primary">help_outline</span>
         </header>

         <div className="p-6 space-y-6">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
               <button className="flex-1 bg-white dark:bg-slate-900 shadow rounded-lg py-2 text-sm font-bold text-primary">Credit Card</button>
               <button className="flex-1 text-slate-500 text-sm font-semibold">Bank Account</button>
            </div>

            <div className="space-y-4">
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-1.5">Cardholder Name</label>
                  <input type="text" placeholder="Full name as it appears on card" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-primary focus:border-primary transition-all" />
               </div>
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-1.5">Card Number</label>
                  <div className="relative">
                     <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 pr-12 focus:ring-primary focus:border-primary transition-all" />
                     <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">credit_card</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-1.5">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-primary focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-1.5">CVV</label>
                    <input type="password" placeholder="***" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-primary focus:border-primary transition-all" />
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between py-4 border-t dark:border-slate-800">
               <div>
                  <p className="font-bold text-sm">Set as default</p>
                  <p className="text-[10px] text-slate-500">Used for all future invoices</p>
               </div>
               <button className="w-12 h-6 bg-primary rounded-full relative px-1 flex items-center">
                  <div className="size-4 bg-white rounded-full absolute right-1"></div>
               </button>
            </div>

            <button onClick={() => navigate(View.PORTAL_BILLING)} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-all">
               Save Method
               <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <div className="flex flex-col items-center gap-4 py-2">
               <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                  <span className="material-symbols-outlined text-sm text-emerald-500">lock</span>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Security & Privacy Secure</span>
               </div>
               <p className="text-[9px] text-center text-slate-400 leading-relaxed max-w-[80%]">AGNITIAN uses industry-standard 256-bit SSL encryption to protect your data. We do not store full card numbers on our servers.</p>
            </div>
         </div>
         <div className="h-6 w-full flex items-center justify-center pb-2 bg-white dark:bg-slate-900">
            <div className="h-1.5 w-32 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
         </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
