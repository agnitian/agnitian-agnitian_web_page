
import React from 'react';
import { View } from '../types';

interface Props {
  navigate: (view: View) => void;
}

const About: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto pb-20">
      <div className="p-4">
        <div className="bg-cover bg-center min-h-[260px] rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 border dark:border-slate-800 shadow-xl" 
             style={{backgroundImage: 'linear-gradient(to top, rgba(18, 25, 32, 0.9) 0%, rgba(18, 25, 32, 0.2) 60%), url("https://picsum.photos/seed/vision/800/600?grayscale")'}}>
           <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-2">Since 2024</span>
           <h1 className="text-white text-3xl font-black tracking-tight leading-tight">Innovating the AI Frontier</h1>
        </div>
      </div>

      <section className="px-4 mt-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              <h3 className="text-xl font-bold">Our Vision</h3>
           </div>
           <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Building the backbone of the AI-driven future through impactful digital engineering and human-centric solutions. We bridge the gap between complex neural architectures and real-world utility.
           </p>
        </div>
      </section>

      <section className="mt-10 px-4">
         <h2 className="text-xl font-bold mb-6 px-2">Core Beliefs</h2>
         <div className="space-y-4">
            {[
              { title: 'Engineering Excellence', icon: 'engineering', desc: 'We prioritize robust, scalable code and architectural integrity above all else.' },
              { title: 'Human-Centric AI', icon: 'diversity_3', desc: 'AI should empower humanity, not replace it. We build with empathy at the core.' },
              { title: 'Radical Transparency', icon: 'shield', desc: 'Trust is earned through open communication and ethical data practices.' }
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-primary/20 transition-all">
                 <div className="bg-primary/10 p-3 rounded-xl text-primary"><span className="material-symbols-outlined">{b.icon}</span></div>
                 <div>
                    <h4 className="font-bold text-base">{b.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{b.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <section className="mt-12 px-4">
         <div className="relative overflow-hidden bg-primary p-10 rounded-3xl text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4 relative z-10">Responsibility & Impact</h2>
            <p className="text-blue-100 mb-8 relative z-10">10% of our R&D bandwidth is dedicated to open-source projects that address global challenges.</p>
            <div className="flex justify-center gap-10 relative z-10">
               <div><p className="text-3xl font-black">50+</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Projects</p></div>
               <div className="w-px h-10 bg-white/20"></div>
               <div><p className="text-3xl font-black">12k</p><p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Lives Impacted</p></div>
            </div>
         </div>
      </section>

      <div className="mt-12 px-6 text-center">
         <button onClick={() => navigate(View.CONTACT)} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all">Contact Our Team</button>
         <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest">© 2024 AGNITIAN SYSTEMS ENGINEERING</p>
      </div>
    </div>
  );
};

export default About;
