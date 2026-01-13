
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const InvoiceDetail: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <header className="p-4 flex items-center justify-between border-b dark:border-slate-800">
         <button onClick={() => navigate(View.PORTAL_BILLING)} className="material-symbols-outlined">arrow_back_ios_new</button>
         <h1 className="font-bold text-lg">INV-2023-001</h1>
         <div className="flex gap-4"><span className="material-symbols-outlined text-primary">print</span></div>
      </header>

      <section className="p-4 mt-4">
         <div className="flex gap-5 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
            <div className="bg-primary/10 size-16 rounded-2xl flex items-center justify-center text-primary">
               <span className="material-symbols-outlined text-3xl">developer_board</span>
            </div>
            <div>
               <h2 className="text-xl font-bold">AGNITIAN Services</h2>
               <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Development & Consulting</p>
            </div>
         </div>
      </section>

      <section className="px-4 grid grid-cols-2 gap-3">
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Amount</p>
            <p className="text-2xl font-black tracking-tight">$5,245.50</p>
            <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider mt-1">NET 30</p>
         </div>
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Status</p>
            <p className="text-2xl font-black text-amber-500">PARTIAL</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">Due Nov 15</p>
         </div>
      </section>

      <section className="mt-8 px-4">
         <h3 className="font-bold text-lg mb-4 ml-1">Invoice Items</h3>
         <div className="space-y-4">
            {[
              { title: 'Custom Software Development', sub: 'Mobile UI Kit & Integration', rate: '40 hrs @ $100/hr', price: 4000 },
              { title: 'Consulting Services', sub: 'Architecture Planning', rate: '8 hrs @ $125/hr', price: 1000 },
              { title: 'Cloud Hosting Premium', sub: 'AWS Management', rate: '1 Month', price: 125 }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
                 <div className="flex-1 pr-4">
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{item.sub}</p>
                    <p className="text-[10px] font-bold text-primary uppercase mt-1">{item.rate}</p>
                 </div>
                 <div className="text-right">
                    <p className="font-bold text-sm">${item.price.toFixed(2)}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <section className="mt-8 p-6 bg-slate-100 dark:bg-slate-900/50 space-y-3">
         <div className="flex justify-between text-sm"><span className="text-slate-500">Subtotal</span><span className="font-bold">$5,125.00</span></div>
         <div className="flex justify-between text-sm"><span className="text-slate-500">Tax (2.35%)</span><span className="font-bold">$120.50</span></div>
         <div className="flex justify-between items-center pt-3 border-t dark:border-slate-800">
            <span className="font-bold">Total Balance</span>
            <span className="text-2xl font-black text-primary">$5,245.50</span>
         </div>
      </section>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pointer-events-none">
         <button onClick={() => navigate(View.PORTAL_PAYMENT_METHOD)} className="pointer-events-auto w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            Pay Remaining $4,000.00
         </button>
      </div>
    </div>
  );
};

export default InvoiceDetail;
