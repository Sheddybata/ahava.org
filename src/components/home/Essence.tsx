import React from 'react';

export const Essence: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Our Essence</h2>
          <div className="text-2xl text-yellow-600 font-semibold mb-4">"Ahavah" means Love.</div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a community anchored in the love of God, transforming hearts and raising people who live with faith, excellence, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};
