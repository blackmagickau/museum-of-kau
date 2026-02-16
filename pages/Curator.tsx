import React from 'react';
import { CURATOR, SKILLS, EDUCATION } from '../constants';
import FadeInSection from '../components/FadeInSection';

const Curator: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto py-12">
       {/* Hero Section: The Curator */}
       <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative group">
             <FadeInSection>
                <div className="absolute -inset-2 bg-gray-200 dark:bg-gray-800 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-white dark:bg-gray-900 p-4 shadow-xl rounded-lg">
                   <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img src="/kaushik.jpg" alt="Kaushik Yadhunath sitting on a rock with a scenic mountain background" className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
                   </div>
                </div>
                <div className="mt-4 flex justify-between items-start text-xs text-gray-500 dark:text-gray-400 font-sans tracking-wide border-l-2 border-primary pl-3 py-1">
                   <div>
                      <p className="uppercase font-bold text-gray-900 dark:text-slate-200 mb-0.5">Figure 1.1</p>
                      <p>The Curator</p>
                   </div>
                </div>
             </FadeInSection>
          </div>

          {/* Right Column: Wall Label & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-12">
             <FadeInSection delay="0.2s" className="mb-6">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Curator Profile</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-2 text-gray-900 dark:text-slate-200 font-display">
                   {CURATOR.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 italic font-light font-display">
                   {CURATOR.tagline}
                </p>
             </FadeInSection>
             <FadeInSection delay="0.4s" className="prose prose-lg dark:prose-invert font-display text-gray-600 dark:text-gray-300 max-w-xl">
                {CURATOR.bio.map((paragraph, idx) => (
                   <p key={idx} className="leading-relaxed mb-4">
                      {idx === 0 && <span className="text-6xl float-left mr-3 mt-[-10px] text-primary font-light">I</span>}
                      {paragraph}
                   </p>
                ))}
                <p className="mt-6 text-base text-gray-500 dark:text-gray-400 border-l border-gray-300 dark:border-gray-700 pl-4 font-sans">
                   Current Status: <span className="text-gray-900 dark:text-slate-200 font-medium">{CURATOR.status}</span><br/>
                   Location: <span className="text-gray-900 dark:text-slate-200 font-medium">{CURATOR.location}</span>
                </p>
             </FadeInSection>
          </div>
       </section>

       <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-12 lg:my-20"></div>

       {/* Section: Methodology & Skills */}
       <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-4 order-2 lg:order-1">
             <FadeInSection delay="0.2s">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">Education</h3>
                
                <div className="mb-8">
                   <h4 className="text-lg font-medium text-gray-900 dark:text-slate-200 mb-1 font-display">{EDUCATION.school}</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{EDUCATION.degree}</p>
                   <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{EDUCATION.period}</p>
                   <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                     {EDUCATION.details.map((d, i) => <li key={i}>{d}</li>)}
                   </ul>
                </div>

                {/* Press Card / Contact Block */}
                <div className="mt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                        <div>
                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-slate-200">Contact Card</h3>
                            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Accession No. 2025-KY</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-icons text-slate-300">qr_code_2</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3">
                        <a href={`mailto:${CURATOR.email}`} className="flex items-center w-full p-3 rounded border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5 transition-all group/btn bg-slate-50/50 dark:bg-slate-800/30">
                            <div className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 text-slate-500 group-hover/btn:text-primary flex items-center justify-center mr-3 transition-colors">
                                <span className="material-icons text-sm">mail</span>
                            </div>
                            <div className="flex-grow">
                                <span className="block text-[10px] uppercase text-slate-400 font-bold tracking-wider">Email</span>
                                <span className="block text-sm font-medium text-slate-700 dark:text-slate-200 group-hover/btn:text-primary transition-colors">Get in Touch</span>
                            </div>
                            <span className="material-icons text-slate-300 group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all text-sm">arrow_forward</span>
                        </a>

                        {CURATOR.socials.map(s => (
                            <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="flex items-center w-full p-3 rounded border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5 transition-all group/btn bg-slate-50/50 dark:bg-slate-800/30">
                                <div className="w-8 h-8 rounded bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 text-slate-500 group-hover/btn:text-primary flex items-center justify-center mr-3 transition-colors">
                                    <i className={`${s.icon} text-base`}></i>
                                </div>
                                <div className="flex-grow">
                                    <span className="block text-[10px] uppercase text-slate-400 font-bold tracking-wider">Network</span>
                                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-200 group-hover/btn:text-primary transition-colors">{s.platform}</span>
                                </div>
                                <span className="material-icons text-slate-300 group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all text-sm">north_east</span>
                            </a>
                        ))}
                    </div>
                </div>
             </FadeInSection>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
             <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-slate-200 mb-8 font-display">Technical Repository</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {SKILLS.map((category) => (
                      <div key={category.category} className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-100 dark:border-gray-800 shadow-sm">
                         <h4 className="font-medium text-lg mb-4 text-primary font-display">{category.category}</h4>
                         <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                               <span key={skill.name} className="flex items-center gap-2 text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors">
                                  {skill.icon.includes('devicon') || skill.icon.includes('ri-') ? (
                                      <i className={`${skill.icon} text-base`}></i>
                                  ) : (
                                      <span className="material-icons text-base">{skill.icon}</span>
                                  )}
                                  <span>{skill.name}</span>
                               </span>
                            ))}
                         </div>
                      </div>
                   ))}
                </div>
             </FadeInSection>
          </div>
       </section>
    </div>
  );
};

export default Curator;