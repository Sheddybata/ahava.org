import React from 'react';

export const ScriptureBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-8 overflow-hidden">
      <div className="animate-pulse">
        <div className="text-center text-white">
          <p className="text-2xl md:text-3xl font-bold italic">
            "Fear not, for you have found favor with God."
          </p>
          <p className="text-lg mt-2 font-semibold">— Luke 1:30</p>
        </div>
      </div>
    </div>
  );
};
