import React from 'react';
import { Button } from '../shared/Button';

export const Hero: React.FC = () => {
  const handleJoinService = () => window.scrollTo({ top: document.getElementById('events')?.offsetTop || 0, behavior: 'smooth' });
  const handleWatchLive = () => window.open('https://www.youtube.com/@ahava911/featured', '_blank');
  const handlePrayerRequest = () => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' });
  const handleGive = () => window.open('https://paypal.com', '_blank');

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/Herobackgroundimage.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 via-red-900/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <div className="mb-6 text-yellow-400 text-xl font-light tracking-widest animate-pulse">
          Luke 1:30
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          LOVED BY GOD
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the transforming love of God that finds, fixes, and furnishes lives for divine purpose.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={handleJoinService}>Join Our Service</Button>
          <Button onClick={handleWatchLive} variant="secondary">Watch Live</Button>
          <Button onClick={handlePrayerRequest} variant="outline">Send Prayer Request</Button>
          <Button onClick={handleGive} variant="secondary">Give Online</Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
