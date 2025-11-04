import React, { useState } from 'react';

const testimonies = [
  { name: 'Grace Okafor', text: 'God found me when I was broken and restored my hope. Through Ahavah, I discovered my purpose and now serve with joy.', location: 'Lagos, Nigeria' },
  { name: 'David Mensah', text: 'The Men of Valor ministry transformed my life. I learned what it means to be a godly leader in my home and workplace.', location: 'Accra, Ghana' },
  { name: 'Sarah Johnson', text: 'The Bible in 90 Days challenge changed everything. I now understand God\'s Word in ways I never imagined possible.', location: 'London, UK' },
  { name: 'Emmanuel Eze', text: 'Through prayer and fellowship at Ahavah, I found healing from years of pain. God\'s love truly transforms.', location: 'Abuja, Nigeria' },
  { name: 'Ruth Kamau', text: 'Women of Grace helped me embrace my identity as a daughter of God. I walk in confidence and purpose now.', location: 'Nairobi, Kenya' },
  { name: 'Michael Adeyemi', text: 'The FaithFlow app keeps me connected to God daily. My prayer life has never been stronger!', location: 'Ibadan, Nigeria' }
];

export const Testimonies: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonies.length);
  const prev = () => setCurrent((current - 1 + testimonies.length) % testimonies.length);

  return (
    <section className="py-20 bg-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonies</h2>
          <p className="text-xl text-yellow-400">Lives transformed by God's love</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-6xl text-yellow-400 mb-4">"</div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">{testimonies[current].text}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-yellow-400 text-lg">{testimonies[current].name}</div>
                <div className="text-sm text-gray-300">{testimonies[current].location}</div>
              </div>
              <div className="flex gap-4">
                <button onClick={prev} className="w-12 h-12 bg-yellow-600 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={next} className="w-12 h-12 bg-yellow-600 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
