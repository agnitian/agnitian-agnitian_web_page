
import React, { useState, useEffect } from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const Usage: React.FC<Props> = ({ navigate }) => {
  // Simulated real-time metrics state
  const [metrics, setMetrics] = useState({
    apiRequests: 85240,
    apiLimit: 100000,
    compute: 42.4,
    computeLimit: 50.0,
    storage: 1.24,
    storageLimit: 5.0,
  });

  const [lastUpdate, setLastUpdate] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    // Simulate real-time updates via a "WebSocket-like" interval
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newApi = prev.apiRequests + Math.floor(Math.random() * 12);
        const newCompute = prev.compute + (Math.random() > 0.8 ? 0.01 : 0);
        const newStorage = prev.storage + (Math.random() > 0.95 ? 0.001 : 0);

        return {
          ...prev,
          apiRequests: newApi > prev.apiLimit ? prev.apiLimit : newApi,
          compute: newCompute > prev.computeLimit ? prev.computeLimit : newCompute,
          storage: newStorage > prev.storageLimit ? prev.storageLimit : newStorage,
        };
      });
      setLastUpdate(new Date().toLocaleTimeString());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getPct = (val: number, limit: number) => Math.min(Math.round((val / limit) * 100), 100);

  const apiPct = getPct(metrics.apiRequests, metrics.apiLimit);
  const computePct = getPct(metrics.compute, metrics.computeLimit);
  const storagePct = getPct(metrics.storage, metrics.storageLimit);

  return (
    <div className="flex flex-col max-w-lg mx-auto pb-24">
      <div className="p-4 pt-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Usage & Limits</h1>
          <p className="text-sm text-slate-500">Real-time performance monitoring</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* Gauges Section */}
      <section className="px-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { 
              label: 'API Requests', 
              value: `${(metrics.apiRequests / 1000).toFixed(1)}k / ${metrics.apiLimit / 1000}k`, 
              pct: apiPct, 
              color: 'text-primary' 
            },
            { 
              label: 'Compute', 
              value: `${metrics.compute.toFixed(2)}h / ${metrics.computeLimit}h`, 
              pct: computePct, 
              color: 'text-primary' 
            },
            { 
              label: 'Storage', 
              value: `${metrics.storage.toFixed(2)}GB / ${metrics.storageLimit}GB`, 
              pct: storagePct, 
              color: 'text-primary' 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-sm transition-all duration-500">
              <div className="relative flex items-center justify-center">
                <svg className="w-16 h-16">
                  <circle className="text-slate-100 dark:text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="5"></circle>
                  <circle 
                    className={`${item.color} transition-all duration-700 ease-out`} 
                    cx="32" 
                    cy="32" 
                    fill="transparent" 
                    r="28" 
                    stroke="currentColor" 
                    strokeDasharray="175.9" 
                    strokeDashoffset={175.9 - (175.9 * item.pct / 100)} 
                    strokeLinecap="round" 
                    strokeWidth="5" 
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                  ></circle>
                </svg>
                <span className="absolute text-[10px] font-bold">{item.pct}%</span>
              </div>
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-wider font-bold text-slate-500">{item.label}</p>
                <p className="text-[10px] font-bold mt-0.5 whitespace-nowrap">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connection Metadata */}
      <div className="px-6 py-2">
        <p className="text-[9px] text-slate-400 font-mono text-center">Last state sync: {lastUpdate} via edge-ws-sf-01</p>
      </div>

      {/* Usage Trends */}
      <section className="p-4 mt-2">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-tight">Usage Trends (7 Days)</h2>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold">127.4k</p>
                <span className="text-emerald-500 text-sm font-bold">+12%</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between h-32 gap-3 px-1">
            {[30, 45, 60, 90, 40, 25, 15].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-1000 ${i === 3 ? 'bg-primary' : 'bg-primary/20'} group-hover:bg-primary/40`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[8px] font-bold text-slate-500">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Limits */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-bold mb-4">System Limits</h2>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <div className="size-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Concurrent Agents</h3>
                  <p className="text-xs text-slate-500">8 / 10 active slots</p>
                </div>
              </div>
              <button 
                onClick={() => navigate(View.PORTAL_SUBSCRIPTION)}
                className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase hover:bg-primary-hover active:scale-95 transition-all"
              >
                Upgrade
              </button>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full rounded-full transition-all duration-1000 ease-in-out" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          <button onClick={() => navigate(View.PORTAL_DASHBOARD)} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button onClick={() => navigate(View.PORTAL_USAGE)} className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-bold">Usage</span>
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

export default Usage;
