import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EXPERIENCES } from '../constants';
import FadeInSection from '../components/FadeInSection';

const Exhibit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const exhibitIndex = EXPERIENCES.findIndex(e => e.id === id);
  const exhibit = EXPERIENCES[exhibitIndex];
  
  const nextExhibit = EXPERIENCES[exhibitIndex + 1];
  const prevExhibit = EXPERIENCES[exhibitIndex - 1];

  if (!exhibit) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-2xl font-display mb-4">Exhibit Not Found</h2>
        <Link to="/galleries" className="text-primary hover:underline">Return to Galleries</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
      {/* Navigation Header */}
      <FadeInSection className="mb-8 flex items-center justify-between border-b border-primary/10 pb-4">
         <Link to="/galleries" className="text-sm font-medium tracking-wide flex items-center gap-2 hover:text-primary transition-colors text-slate-600 dark:text-slate-300">
            <span className="material-icons text-base">west</span>
            <span>Return to Gallery Entrance</span>
         </Link>
         <div className="hidden md:flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-1">Guided Tour</span>
            <div className="flex items-center gap-1">
               {EXPERIENCES.map((e, idx) => (
                  <div key={e.id} className={`w-8 h-1 rounded-full ${idx === exhibitIndex ? 'bg-primary' : 'bg-primary/20'}`}></div>
               ))}
            </div>
            <span className="text-[10px] mt-1 text-gray-400">Hall {exhibitIndex + 1} of {EXPERIENCES.length}</span>
         </div>
      </FadeInSection>

      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        {/* Left Column: The "Placard" Summary (Sticky) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
          <FadeInSection delay="0.2s">
            <div className="bg-white dark:bg-white/5 border border-primary/10 p-8 rounded shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
               {/* Decorative corner accent */}
               <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
               <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">Exhibit #{exhibitIndex + 1}</span>
                  <h2 className="text-3xl font-display italic mt-2 leading-tight text-slate-900 dark:text-slate-200">{exhibit.role}</h2>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">{exhibit.company}</p>
               </div>
               <div className="space-y-6 text-sm">
                  <div>
                     <span className="block text-xs uppercase text-gray-400 dark:text-gray-500 tracking-wider mb-1">Period</span>
                     <span className="font-medium text-slate-700 dark:text-slate-200">{exhibit.period}</span>
                  </div>
                  <div>
                     <span className="block text-xs uppercase text-gray-400 dark:text-gray-500 tracking-wider mb-1">Location</span>
                     <span className="font-medium text-slate-700 dark:text-slate-200">{exhibit.location}</span>
                  </div>
                  <div>
                     <span className="block text-xs uppercase text-gray-400 dark:text-gray-500 tracking-wider mb-1">Materials & Tools</span>
                     <div className="flex flex-wrap gap-2 mt-1">
                        {exhibit.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs">{t}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </FadeInSection>
        </aside>

        {/* Right Column: Main Exhibit Area */}
        <section className="lg:col-span-8 space-y-20">
           {/* Exhibit Header */}
           <FadeInSection delay="0.3s" className="relative">
              <h1 className="text-5xl md:text-7xl font-light italic text-gray-900 dark:text-slate-200 mb-6 font-display">
                 {exhibit.type} <br/> <span className="text-primary font-normal not-italic">Chronicles</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-light max-w-2xl font-display">
                 {exhibit.description}
              </p>
           </FadeInSection>

           {/* Achievements / Artifacts */}
           <div className="space-y-12">
              <FadeInSection delay="0.4s">
                <div className="flex items-center gap-4">
                   <h3 className="text-2xl font-light italic font-display text-slate-800 dark:text-slate-200">Artifacts on Display</h3>
                   <div className="h-px flex-grow bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </FadeInSection>

              {/* Main Image */}
              <FadeInSection delay="0.5s">
                <div className="group cursor-zoom-in">
                   <div className="relative bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-lg">
                      <div className="overflow-hidden rounded bg-gray-100 dark:bg-gray-900 aspect-video relative">
                         <img src={exhibit.imageUrl} alt={exhibit.imageAlt} className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                      </div>
                      <div className="mt-4 flex items-start gap-4 max-w-md ml-4">
                         <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">01</div>
                         <div className="text-center">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{exhibit.imageAlt}</p>
                         </div>
                      </div>
                   </div>
                </div>
              </FadeInSection>

              {/* Achievement List as "Artifacts" */}
              <div className="grid grid-cols-1 gap-8">
                 {exhibit.achievements.map((achievement, idx) => (
                    <FadeInSection key={idx} delay={`${0.6 + (idx * 0.1)}s`} className="group flex gap-4">
                       <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                          <span className="material-icons text-xl">verified</span>
                       </div>
                       <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-slate-200 mb-1 group-hover:text-primary transition-colors font-display">Artifact {idx + 1}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-transparent group-hover:border-primary/30 pl-0 group-hover:pl-4 transition-all">
                             {achievement}
                          </p>
                       </div>
                    </FadeInSection>
                 ))}
              </div>
           </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <nav className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-12">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {prevExhibit ? (
               <Link to={`/galleries/${prevExhibit.id}`} className="text-gray-400 hover:text-gray-900 dark:hover:text-slate-200 transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="material-icons text-lg">arrow_back</span>
                  Previous Hall: {prevExhibit.company}
               </Link>
            ) : (
                <div></div>
            )}
            
            {nextExhibit ? (
               <Link to={`/galleries/${nextExhibit.id}`} className="group relative inline-flex items-center gap-4 text-center">
                  <div className="text-right hidden md:block">
                     <span className="block text-xs uppercase tracking-widest text-primary font-bold">Next Exhibit</span>
                     <span className="block text-xl italic text-gray-900 dark:text-slate-200 group-hover:underline decoration-1 underline-offset-4 font-display">{nextExhibit.role}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                     <span className="material-icons">arrow_forward</span>
                  </div>
               </Link>
            ) : (
                <Link to="/galleries" className="text-primary uppercase text-sm tracking-widest">Back to Lobby</Link>
            )}
         </div>
      </nav>
    </div>
  );
};

export default Exhibit;