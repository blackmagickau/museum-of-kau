import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CURATOR } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme Toggle Logic
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isLobby = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply dark:mix-blend-overlay bg-plaster opacity-60"></div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-colors duration-300 ${isLobby ? 'bg-transparent' : 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-primary/10 dark:border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-sm tracking-widest uppercase font-semibold text-primary z-50">
            {CURATOR.name}
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
             <Link to="/" className={`text-xs uppercase tracking-widest hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Lobby</Link>
             <Link to="/galleries" className={`text-xs uppercase tracking-widest hover:text-primary transition-colors ${location.pathname.includes('/galleries') ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Galleries</Link>
             <Link to="/curator" className={`text-xs uppercase tracking-widest hover:text-primary transition-colors ${location.pathname === '/curator' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Curator</Link>
             
             {/* Desktop Theme Toggle */}
             <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:bg-slate-200 dark:hover:bg-slate-800" aria-label="Toggle Dark Mode">
                <span className="material-icons text-lg">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
             </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
             <button onClick={toggleTheme} className="text-slate-800 dark:text-slate-200 p-2" aria-label="Toggle Dark Mode">
                <span className="material-icons text-xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
             </button>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 dark:text-slate-200 p-2" aria-label="Open Menu">
                <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
           <div className="fixed inset-0 bg-background-light dark:bg-background-dark z-50 flex flex-col items-center justify-center space-y-8 animate-fade-in">
             <Link onClick={() => setMobileMenuOpen(false)} to="/" className="text-2xl font-display text-slate-900 dark:text-slate-200">Lobby</Link>
             <Link onClick={() => setMobileMenuOpen(false)} to="/galleries" className="text-2xl font-display text-slate-900 dark:text-slate-200">Galleries</Link>
             <Link onClick={() => setMobileMenuOpen(false)} to="/curator" className="text-2xl font-display text-slate-900 dark:text-slate-200">Curator</Link>
           </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      {!isLobby && (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-display font-medium text-xl text-slate-900 dark:text-slate-200 mb-2">Museum of Work</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">© 2025 {CURATOR.name}. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              {CURATOR.socials.map((social) => (
                <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
                  <i className={`${social.icon} text-lg`}></i>
                  <span>{social.platform}</span>
                </a>
              ))}
              <a href={`mailto:${CURATOR.email}`} className="text-slate-500 hover:text-primary transition-colors text-sm uppercase tracking-widest flex items-center gap-2">
                 <i className="ri-mail-line text-lg"></i>
                 <span>Email</span>
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;