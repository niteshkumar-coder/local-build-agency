
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebaseMock';
import { Service } from '../types';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  
  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';
  const FOUNDER_IMAGE_URL = 'https://i.ibb.co/4ntzNcw5/me.png';

  useEffect(() => {
    db.getServices().then(setServices);
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-inter overflow-x-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#083344_0%,_#020617_100%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* HERO SECTION - DIGITAL INTERFACE */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Main Digital Hub Container */}
          <div className="relative w-full max-w-3xl mb-12 animate-[fadeIn_0.8s_ease-out]">
            
            {/* 4 Floating Digital Nodes (Pahale jaisa concept) */}
            <div className="absolute -top-12 -left-6 md:-top-16 md:-left-12 z-20 animate-bounce-slow">
               <div className="px-5 py-2.5 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/40 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">NODE_01: YT_SYNC</span>
               </div>
            </div>
            <div className="absolute -top-12 -right-6 md:-top-16 md:-right-12 z-20 animate-bounce-slow delay-300">
               <div className="px-5 py-2.5 bg-slate-900/95 backdrop-blur-xl border border-red-400/40 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></div>
                  <span className="text-[10px] font-black text-red-400 tracking-widest uppercase">NODE_02: AI_CORE</span>
               </div>
            </div>
            <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-12 z-20 animate-bounce-slow delay-700">
               <div className="px-5 py-2.5 bg-slate-900/95 backdrop-blur-xl border border-green-400/40 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
                  <span className="text-[10px] font-black text-green-400 tracking-widest uppercase">NODE_03: SEO_GRID</span>
               </div>
            </div>
            <div className="absolute -bottom-8 -right-6 md:-bottom-12 md:-right-12 z-20 animate-bounce-slow delay-1000">
               <div className="px-5 py-2.5 bg-slate-900/95 backdrop-blur-xl border border-blue-400/40 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></div>
                  <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">NODE_04: LEAD_GEN</span>
               </div>
            </div>

            {/* Central Glass Terminal Frame */}
            <div className="relative group overflow-hidden rounded-[3.5rem] border border-white/10 bg-slate-950/50 backdrop-blur-3xl p-1 shadow-[0_0_120px_-20px_rgba(34,211,238,0.5)]">
              {/* Scan Line Animation */}
              <div className="absolute inset-0 scanner-line bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-10 pointer-events-none"></div>
              
              <div className="relative bg-[#020617]/90 rounded-[3.4rem] p-16 md:p-28 flex flex-col items-center text-center border border-white/5">
                <div className="relative mb-12">
                  <div className="absolute -inset-10 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute -inset-4 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-4 shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-110">
                    <img src={LOGO_URL} alt="LB Logo" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                  Local <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">build</span>
                </h1>

                <div className="flex items-center space-x-3 px-10 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full shadow-[inset_0_0_10px_rgba(34,211,238,0.2)]">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
                  <span className="text-xs font-black tracking-[0.5em] text-cyan-400 uppercase">CORE:ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-2xl text-center mb-14 animate-[fadeIn_1s_ease-out_0.2s_both]">
            Autonomous marketing systems for the digital-first local business. Growth powered by proprietary AI intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 animate-[fadeIn_1.2s_ease-out_0.4s_both]">
            <Link to="/contact" className="px-14 py-6 bg-cyan-500 text-slate-950 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(34,211,238,0.5)] active:scale-95">
              Initialize Operations
            </Link>
            <Link to="/ai-tools" className="px-14 py-6 bg-slate-900 border border-white/10 text-white rounded-3xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center">
              [ ACCESS_SYSTEM_DEMO ]
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES DISPLAY SECTION */}
      <section className="relative py-40 px-4 border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
            <div className="space-y-4">
              <div className="text-cyan-500 text-xs font-black uppercase tracking-[0.6em]">SYSTEM_MODULARITY</div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">Full Service <br /> <span className="text-slate-500">Intelligence.</span></h2>
            </div>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed font-medium">
              Every service is an integrated module within the Local build Ecosystem, designed to feed data back into your core growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={service.id} className="group relative p-12 bg-slate-900/40 border border-white/5 rounded-[3.5rem] hover:bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl font-black text-white">0{idx + 1}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-5xl mb-12 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.2em] block mb-6">MOD_{service.category.toUpperCase()}</span>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-tight">{service.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-12">{service.description}</p>
                  
                  <Link to="/contact" className="inline-flex items-center text-xs font-black text-white uppercase tracking-widest hover:text-cyan-400 transition-colors">
                    Deploy Service
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER_DATA SECTION */}
      <section className="relative py-40 px-4 border-t border-white/5 bg-slate-950 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <div className="relative group w-full md:w-auto flex justify-center">
              <div className="absolute -inset-12 border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.4)] bg-slate-900">
                <img 
                  src={FOUNDER_IMAGE_URL} 
                  alt="Rishabh Singh" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-8 right-4 md:right-16 bg-[#020617] border border-cyan-500/40 text-cyan-400 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
                IDENTITY_VERIFIED: RISHABH_S
              </div>
            </div>

            <div className="flex-grow text-center md:text-left space-y-12">
              <div className="inline-flex items-center space-x-3 text-[11px] font-black uppercase tracking-[0.5em] text-cyan-500 px-8 py-2.5 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></span>
                <span>System_Architect</span>
              </div>
              
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                Engineering <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Social Capital.</span>
              </h3>
              
              <p className="text-slate-400 text-2xl leading-relaxed italic font-medium max-w-xl">
                "Growth today depends on your ability to integrate intelligent automated feedback loops into your marketing stack."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative py-48 bg-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-16">
          <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8]">
            READY TO DEPLOY <br /> YOUR GROWTH OS?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <Link to="/contact" className="bg-slate-950 text-white px-16 py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95">
              Initialize Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .scanner-line {
          animation: scan 5s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(450%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
