import React, { useState } from 'react';
import { Button } from '../shared/Button';

const events = [
  { title: 'Faith & Fire Conference', date: 'July 20-23, 2025', location: 'Lagos, Nigeria', theme: 'Manifest It – Living the Word in Power' },
  { title: 'Monthly Prayer Retreat', date: 'Every 1st Saturday', location: 'Online & Local Chapters', theme: 'Interceding for Nations' },
  { title: 'Bible in 90 Days Challenge', date: 'Starting Jan 15, 2026', location: 'Global (Online)', theme: 'Complete Bible Reading Journey' },
  { title: 'Hospital & Community Outreach', date: 'Monthly', location: 'Various Locations', theme: 'Showing Love Through Service' },
  { title: 'Youth Ignite Summit', date: 'August 10-12, 2025', location: 'Abuja, Nigeria', theme: 'Generation of Impact' },
  { title: 'Women of Grace Gathering', date: 'September 5, 2025', location: 'Port Harcourt, Nigeria', theme: 'Walking in Divine Purpose' }
];

export const Events: React.FC = () => {
  const [rsvpEvent, setRsvpEvent] = useState<string | null>(null);

  const handleRSVP = (eventTitle: string) => {
    setRsvpEvent(eventTitle);
    alert(`Thank you for your interest in ${eventTitle}! We'll send you details soon.`);
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Stay connected with our programs and conferences</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-yellow-400 font-bold">
                  {event.date.split(' ')[0].substring(0, 3)}
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-600">{event.date}</div>
                  <div className="text-sm text-gray-500">{event.location}</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 italic">"{event.theme}"</p>
              <Button onClick={() => handleRSVP(event.title)} variant="primary">RSVP Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
