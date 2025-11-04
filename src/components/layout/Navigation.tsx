import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-red-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-md"
              aria-label="Go to home"
            >
              <img 
                src="/ahavalogo.jpg" 
                alt="Ahavah Ministry Logo" 
                className="h-12 w-auto object-contain"
                loading="eager"
              />
              <div className="ml-3">
                <div className="text-red-900 font-bold text-xl">Ahavah Ministry</div>
                <div className="text-yellow-600 text-xs">Loved by God</div>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-red-900 hover:text-yellow-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-red-900 hover:text-yellow-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
                aria-label="Navigate to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('ministries')} 
                className="text-red-900 hover:text-yellow-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
                aria-label="Navigate to ministries section"
              >
                Ministries
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="text-red-900 hover:text-yellow-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
                aria-label="Navigate to events section"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px]"
                aria-label="Get involved with Ahavah Ministry"
              >
                Get Involved
              </button>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-red-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile menu with smooth animation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            role="menu"
            aria-hidden={!isOpen}
          >
            <div className="pb-4 space-y-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left py-3 px-4 text-red-900 hover:text-yellow-600 hover:bg-red-50 font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px]"
                role="menuitem"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left py-3 px-4 text-red-900 hover:text-yellow-600 hover:bg-red-50 font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px]"
                role="menuitem"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('ministries')} 
                className="block w-full text-left py-3 px-4 text-red-900 hover:text-yellow-600 hover:bg-red-50 font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px]"
                role="menuitem"
              >
                Ministries
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="block w-full text-left py-3 px-4 text-red-900 hover:text-yellow-600 hover:bg-red-50 font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px]"
                role="menuitem"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left py-3 px-4 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 min-h-[44px] font-semibold"
                role="menuitem"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
