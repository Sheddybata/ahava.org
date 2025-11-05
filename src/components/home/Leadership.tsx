import React from 'react';

const leaders = [
  { name: 'Hyellai Pona', role: 'Lead Coordinator / Founder', image: '/HyellaiPona.jpg' }
];

export const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-red-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600">Servants called to lead with love and purpose</p>
        </div>
        
        <div className="flex justify-center">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="relative group max-w-md w-full"
            >
              {/* Grand Profile Card */}
              <div className="bg-gradient-to-br from-white via-red-50 to-amber-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-red-900/20 hover:border-red-900/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-3">
                {/* Decorative top accent */}
                <div className="h-2 bg-gradient-to-r from-red-900 via-yellow-600 to-red-900"></div>
                
                {/* Image Section */}
                <div className="relative px-8 pt-8 pb-4">
                  <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-red-900/30 ring-offset-4 ring-offset-white group-hover:ring-yellow-600/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-yellow-600/20 z-10"></div>
                    <img 
                      src={leader.image} 
                      alt={`${leader.name}, ${leader.role} at Ahavah Ministry`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="eager"
                      decoding="async"
                    />
                    {/* Decorative corner elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-red-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="px-8 pb-8 text-center">
                  {/* Role */}
                  <p className="mb-4 text-red-900 text-sm font-semibold uppercase tracking-wide">
                    {leader.role}
                  </p>
                  
                  {/* Name */}
                  <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-3 leading-tight">
                    {leader.name}
                  </h3>
                  
                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-600"></div>
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-600"></div>
                  </div>
                  
                  {/* Quote or tagline */}
                  <p className="text-gray-600 italic text-sm">
                    "Leading with love, serving with purpose"
                  </p>
                </div>
                
                {/* Bottom decorative accent */}
                <div className="h-2 bg-gradient-to-r from-red-900 via-yellow-600 to-red-900"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/30 transition-all"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-400/20 rounded-full blur-xl group-hover:bg-red-400/30 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
