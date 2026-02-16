import React from 'react';
import { Link } from 'react-router-dom';
import { CURATOR, EXPERIENCES } from '../constants';
import FadeInSection from '../components/FadeInSection';

const Lobby: React.FC = () => {
  const featuredExhibits = EXPERIENCES.slice(0, 3);

  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <FadeInSection className="min-h-[70vh] flex flex-col justify-center items-center text-center space-y-12 mb-24 relative pt-12">
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl italic text-slate-500 dark:text-slate-400 font-light">Est. 2022 — Present</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight text-slate-900 dark:text-slate-200 font-display">
            The Collected<br />Works & Career
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mt-4 font-display">
            of {CURATOR.name}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center items-center">
          <Link to="/galleries" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group">
            <span>Start the Career Tour</span>
            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <Link to="/curator" className="bg-transparent border border-slate-300 dark:border-slate-600 hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary px-10 py-4 text-lg rounded transition-all duration-300 flex items-center gap-2">
            <span className="material-icons text-sm">person</span>
            <span>Meet the Curator</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <span className="material-icons text-slate-400 text-3xl">keyboard_arrow_down</span>
        </div>
      </FadeInSection>

      {/* Featured Exhibits Section */}
      <section className="py-16 border-t border-primary/10 dark:border-white/10">
        <FadeInSection>
          <div className="flex items-end justify-between mb-24">
            <h2 className="text-4xl font-light italic text-slate-800 dark:text-slate-200 relative pl-6 font-display">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></span>
              Featured Exhibits
            </h2>
            <Link className="hidden md:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors italic" to="/galleries">
              View Full Catalogue <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {featuredExhibits.map((exhibit, index) => (
            <FadeInSection key={exhibit.id} delay={`${index * 0.2}s`} className={index === 1 ? 'md:mt-24' : ''}>
              <Link to={`/galleries/${exhibit.id}`} className="group cursor-pointer block h-full flex flex-col items-center">
                
                {/* 1. Text Info First (Job Title Priority) */}
                <div className="text-center mb-6 space-y-2 px-4 w-full">
                  <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors font-display leading-tight">
                    {exhibit.role}
                  </h3>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 transition-colors group-hover:text-primary/60">
                    {exhibit.company} • {exhibit.period.split('-')[0]}
                  </p>
                </div>

                {/* 2. Image Second */}
                <div className="relative w-full aspect-[4/5] bg-slate-100 dark:bg-slate-800 mb-8 overflow-hidden rounded shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/20">
                  <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none"></div>
                  <img 
                    src={exhibit.imageUrl} 
                    alt={exhibit.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                </div>
                
                {/* 3. Description Bottom */}
                <div className="text-center mt-auto px-4 w-full">
                   <p className="text-slate-500 dark:text-slate-400 italic text-base font-light font-display line-clamp-2 leading-relaxed min-h-[3rem]">
                     "{exhibit.description}"
                   </p>
                </div>

              </Link>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection className="mt-12 text-center md:hidden">
          <Link className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors italic text-lg" to="/galleries">
             View Full Catalogue <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </FadeInSection>
      </section>

      {/* Quick Stats / Museum Info */}
      <FadeInSection delay="0.2s">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-primary/10 dark:border-white/10 bg-white/50 dark:bg-black/20 rounded-lg px-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2 font-display">3+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Years Active</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2 font-display">{EXPERIENCES.length}</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Exhibits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2 font-display">$2.5M</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Pipeline Influenced</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2 font-display">100+</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Users Impacted</div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer Lobby specific */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display font-medium text-xl text-slate-900 dark:text-slate-200 mb-2">The Lobby</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light">© 2025 {CURATOR.name}. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            {CURATOR.socials.map(s => (
                <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
                  <i className={`${s.icon} text-lg`}></i>
                  <span>{s.platform}</span>
                </a>
            ))}
            <a href={`mailto:${CURATOR.email}`} className="text-slate-500 hover:text-primary transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
               <i className="ri-mail-line text-lg"></i>
               <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lobby;