import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import FadeInSection from '../components/FadeInSection';
import GalleryCard from '../components/GalleryCard';

const Galleries: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Corporate' | 'Internship'>('All');

  const filteredExperiences = filter === 'All' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.type === filter);

  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Title Section */}
        <FadeInSection className="mb-16 md:mb-24 max-w-3xl">
          <span className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Curated Collection</span>
          <h1 className="font-display text-5xl md:text-7xl font-light text-slate-900 dark:text-slate-200 mb-6 leading-tight">
            The Galleries
          </h1>
          <p className="font-display text-xl md:text-2xl text-slate-600 dark:text-slate-300 italic font-light leading-relaxed">
            An indexed retrospective of professional tenure, technical exploration, and strategic leadership.
          </p>
        </FadeInSection>

        {/* Filter Rooms */}
        <FadeInSection delay="0.1s" className="mb-12 border-y border-slate-200 dark:border-slate-800 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">Select Room:</span>
            <div className="flex flex-wrap gap-3 md:gap-6">
              {['All', 'Corporate', 'Internship'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setFilter(type as any)}
                  className={`font-sans text-sm px-4 py-2 rounded-full transition-all duration-300 ${filter === type ? 'bg-primary text-white shadow-md' : 'bg-transparent hover:bg-neutral-light dark:hover:bg-neutral-dark text-slate-600 dark:text-slate-300'}`}
                >
                  {type} Exhibits
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp, idx) => (
            <FadeInSection key={exp.id} delay={`${idx * 0.1}s`}>
              <GalleryCard 
                experience={exp} 
                index={idx} 
                total={EXPERIENCES.length} 
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galleries;