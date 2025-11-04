import React from 'react';

const leaders = [
  { name: 'Hyellai Pona', role: 'Lead Coordinator / Founder', image: '/HyellaiPona.jpg' },
  { name: 'Monica Charles', role: 'Assistant Coordinator & Media', image: '/MonicaCharles.jpg' },
  { name: 'Darlington Eyamu', role: 'Prayer Lead', image: '/DarlingtonEyamu.jpg' }
];

export const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600">Servants called to lead with love and purpose</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={`${leader.name}, ${leader.role} at Ahavah Ministry`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-900 mb-2">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
