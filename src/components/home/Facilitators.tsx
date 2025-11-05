import React from 'react';

const facilitators = [
  { name: 'Monica Charles', image: '/MonicaCharles.jpg' },
  { name: 'Darlington Eyamu', image: '/DarlingtonEyamu.jpg' },
  { name: 'Maryamu Emmanual', image: '/facilitators/maryamuemmanuel.jpg' },
  { name: 'Mercy Paul Waziri', image: '/facilitators/mercypaulwaziri.jpg' },
  { name: 'Blessing Edienme', image: '/facilitators/Blessingedienme.jpg' },
  { name: 'Ladi Ujah', image: '/facilitators/Ladiujah.jpg' },
  { name: 'Enoch Ijabani', image: '/facilitators/Enochijabani.jpg' },
  { name: 'Sylvanus Ahunzo', image: '/facilitators/Sylvanusahunzo.jpg' },
  { name: 'Ladi Hyeni', image: '/facilitators/LadiHyelni.jpg' },
  { name: 'Adeola Adebakers Ashiru', image: '/facilitators/adeolaadebakersashiru.jpg' },
  { name: 'Gaius Samuel Yubuin', image: '/facilitators/gaiussamuelyubuin.jpg' }
];

export const Facilitators: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Reading Plan Facilitators</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Our dedicated facilitators guide and support our community through transformative Bible reading journeys. 
            They facilitate our 40-day reading plan and 90-day chronological and non-chronological reading plans, 
            helping believers deepen their understanding of God's Word and grow in their faith journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {facilitators.map((facilitator, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={facilitator.image} 
                  alt={`${facilitator.name}, Reading Plan Facilitator at Ahavah Ministry`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-red-900 mb-1">{facilitator.name}</h3>
                <p className="text-sm text-gray-600">Reading Plan Facilitator</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

