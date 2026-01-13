
import React, { useState } from 'react';
import { View } from '../types';
import { MOCK_ADDONS } from '../constants';

interface Props {
  navigate: (view: View) => void;
}

const Addons: React.FC<Props> = ({ navigate }) => {
  const [addons, setAddons] = useState(MOCK_ADDONS);

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const totalMonthly = 499 + addons.reduce((acc, curr) => curr.enabled ? acc + curr.price : acc, 0);

  return (
    <div className="flex flex-col max-w-lg mx-auto pb-40">
      <header className="p-4 flex items-center justify-between border-b dark:border-slate-800">
         <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="material-symbols-outlined text-primary">arrow_back_ios_new</button>
         <h1 className="font-bold text-lg">Manage Add-ons</h1>
         <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="text-primary font-bold">Save</button>
      </header>

      <div className="p-4">
         <div className="bg-primary/10 p-4 rounded-xl">
           <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Current Plan</p>
           <div className="flex justify-between items-baseline mt-1">
              <h2 className="font-bold text-lg">Pro Enterprise Plan</h2>
              <p className="font-bold">$499<span className="text-xs font-normal">/mo</span></p>
           </div>
         </div>
      </div>

      <section className="px-4 py-4 space-y-8">
         {['Capacity', 'Service'].map(cat => (
           <div key={cat}>
              <h3 className="font-bold mb-4 text-slate-500 uppercase text-xs tracking-widest">{cat} Add-ons</h3>
              <div className="space-y-4">
                 {addons.filter(a => a.category === cat).map(addon => (
                   <div key={addon.id} className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
                      <div className="flex-1 pr-4">
                         <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-sm">{addon.name}</h4>
                            <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">+${addon.price}</span>
                         </div>
                         <p className="text-xs text-slate-500 leading-relaxed">{addon.description}</p>
                      </div>
                      <button 
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-12 h-7 rounded-full transition-colors relative flex items-center px-1 ${addon.enabled ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}
                      >
                         <div className={`size-5 bg-white rounded-full shadow transition-transform ${addon.enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </button>
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 glass-panel p-4 shadow-2xl border-t">
        <div className="max-w-lg mx-auto flex flex-col gap-1 mb-4">
           <div className="flex justify-between text-xs text-slate-500">
             <span>Base Plan</span>
             <span>$499.00</span>
           </div>
           <div className="flex justify-between text-xs text-primary font-bold">
             <span>Add-ons Selected</span>
             <span>+${totalMonthly - 499}.00</span>
           </div>
           <div className="flex justify-between items-center mt-2 pt-2 border-t dark:border-slate-800">
             <span className="font-bold">New Monthly Total</span>
             <span className="text-2xl font-black text-primary">${totalMonthly}.00</span>
           </div>
        </div>
        <button onClick={() => navigate(View.PORTAL_SUBSCRIPTION)} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
           Update Plan & Pay
        </button>
      </footer>
    </div>
  );
};

export default Addons;
