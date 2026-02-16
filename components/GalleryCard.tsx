import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Experience } from '../types';

interface GalleryCardProps {
  experience: Experience;
  index: number;
  total: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ experience: exp, index, total }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || !imgRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Shift opposite to cursor, max ~4-5px
    // Assuming card width ~300-400px, x range -150 to 150.
    // -150 / 40 = -3.75.
    const xOffset = -(x / 40);
    const yOffset = -(y / 40);
    
    imgRef.current.style.transform = `scale(1.05) translate(${xOffset}px, ${yOffset}px)`;
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = `scale(1.05) translate(0px, 0px)`;
  };

  return (
    <Link 
      to={`/galleries/${exp.id}`}
      className="group relative flex flex-col h-[420px] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-200 dark:border-slate-800 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
        {/* Image Layer with Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-200 dark:bg-slate-800">
             <img 
                ref={imgRef}
                src={exp.imageUrl} 
                alt={exp.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform scale-[1.05] filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                style={{ transform: 'scale(1.05)' }}
             />
             {/* Gradient Overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
        </div>

        {/* Top Right ID Badge */}
        <div className="absolute top-4 right-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-mono text-[10px] text-white bg-black/30 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                EXP-{String(total - index).padStart(2, '0')}
            </span>
        </div>

        {/* Content Layer (Visible Default) */}
        {/* Moves up on hover to clear the incoming placard */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end items-start text-white pointer-events-none transition-transform duration-700">
             <div className="transform translate-y-0 group-hover:-translate-y-[15.5rem] transition-transform duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] text-primary bg-primary/20 px-2 py-0.5 rounded backdrop-blur-sm border border-primary/30">{exp.period.split(' - ')[0]}</span>
                    <span className="font-mono text-[10px] text-white/70 uppercase tracking-widest">{exp.type}</span>
                </div>
                <h3 className="font-display text-3xl font-medium leading-tight mb-2 text-white drop-shadow-md">{exp.role}</h3>
                <p className="font-display text-lg italic text-white/80 drop-shadow-sm">{exp.company}</p>
             </div>
        </div>

        {/* Floating Placard Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-white/95 dark:bg-[#152028]/95 backdrop-blur-md border-t border-primary/20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.3)]">
           <div className="flex flex-col space-y-4">
               {/* Tools */}
               <div>
                   <h5 className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Tools & Mediums</h5>
                   <div className="flex flex-wrap gap-1">
                       {exp.tech.slice(0, 3).map(t => (
                           <span key={t} className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">{t}</span>
                       ))}
                       {exp.tech.length > 3 && <span className="text-xs text-slate-400 self-center pl-1">+{exp.tech.length - 3}</span>}
                   </div>
               </div>
               
               {/* Room Tags */}
               <div>
                   <h5 className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Classification</h5>
                   <div className="flex gap-2">
                        <span className="text-xs font-medium text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full inline-block">{exp.type}</span>
                        <span className="text-xs font-medium text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full inline-block">{exp.location}</span>
                   </div>
               </div>

               {/* Outcome Line */}
               <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                   <h5 className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Key Outcome</h5>
                   <p className="font-display italic text-sm text-slate-800 dark:text-slate-200 leading-snug line-clamp-2">
                       "{exp.achievements[0]}"
                   </p>
               </div>
           </div>
        </div>
    </Link>
  );
};

export default GalleryCard;