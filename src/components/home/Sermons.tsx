import React from 'react';

// YouTube video IDs from @ahava911 channel
const youtubeVideos = [
  { id: 'X57cGlRAaJM', title: 'Faith Journey', description: '' },
  { id: '4WHEYzdDTMw', title: 'Amazing Grace', description: '' },
  { id: 'Bdi6givPL5A', title: 'Right to Light (Integrity)', description: '' },
  { id: 'gBgzIW1fV2c', title: "God's Perfect Timing", description: '' },
  { id: 'MG-2f2eE5Eo', title: 'Power of Forgiveness', description: '' },
  { id: 'BqwdoaxXg_0', title: 'Echos Of Kindness', description: '' },
  { id: 'Sft3Smkz4P4', title: 'Faith in Action', description: '' },
  { id: 'XMbBKAtOjkc', title: 'Ripple Effect Kindness', description: '' },
  { id: 'wZ7OSdv4sLU', title: 'Stewardship', description: '' },
  { id: 'VNPtkkUcFi4', title: 'Faith Walk', description: '' },
  { id: 'csKAmgwKebg', title: 'Even When Right is Hard', description: '' },
  { id: '9ntv5-MjkOc', title: 'Real Service', description: '' },
  { id: 'F7doUNAGvRc', title: 'The Line', description: '' },
  { id: '0DwS8h7LC38', title: 'The Healing Needed', description: '' },
  { id: '1Uc3DrZjr_w', title: 'John 15:13 - Greater Love Has No One Than This', description: '' },
  { id: 'WlxftV2jzrA', title: 'Prayer Works', description: '' },
  { id: 'GaWrP6QndQc', title: 'The Heart of the Harvest', description: '' },
  { id: '44HelWW7zdY', title: 'The Last Coffee Note', description: '' },
  { id: '6AvCsEEGwNY', title: 'Great Purpose', description: '' },
  { id: '8Nor5d_ApJQ', title: 'Broken Healers', description: '' },
  { id: 'EgIa8roV2xc', title: 'Unconventional Review - Matthew 12-15', description: '' },
  { id: 'l7pC-vOUZu4', title: 'Unconventional Review - Matthew 21-24', description: '' },
  { id: '7icLFGfIEEE', title: 'Unconventional Review - Matthew 25-28', description: '' },
  { id: 'Thkxw1faBFo', title: 'Unconventional Review - Mark 1-6', description: '' },
  { id: '79EUOw7noNc', title: 'Unconventional Review - Mark 7-11', description: '' },
  { id: 'QmorHngiaAs', title: 'Unconventional Review - Mark 12-16', description: '' },
  { id: '0dIfP6HoLag', title: 'Unconventional Review - Matthew 16-20', description: '' },
  { id: 'AhTdRX6c-ds', title: 'Unconventional Review - Matthew 7-11', description: '' },
  { id: '5Y7fsBKV2BE', title: 'Unconventional Review - Matthew 1-6', description: '' },
];

// Helper function to get YouTube embed URL
const getEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const Sermons: React.FC = () => {
  // If no videos are added yet, show a message
  if (youtubeVideos.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Sermons & Media</h2>
            <p className="text-xl text-gray-600 mb-2">"Faith comes by hearing — and hearing by the Word of God."</p>
            <p className="text-sm text-gray-500">Romans 10:17</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-4">YouTube videos will be embedded here.</p>
              <a 
                href="https://www.youtube.com/@ahava911/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Sermons & Media</h2>
          <p className="text-xl text-gray-600 mb-2">"Faith comes by hearing — and hearing by the Word of God."</p>
          <p className="text-sm text-gray-500">Romans 10:17</p>
        </div>

        {/* Video Grid - Videos play directly in each box */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Embedded YouTube Video - Optimized for mobile */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getEmbedUrl(video.id)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{ 
                    maxWidth: '100%',
                    touchAction: 'manipulation'
                  }}
                />
              </div>
              
              {/* Video Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-red-900 mb-1 line-clamp-2">{video.title}</h3>
                {video.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@ahava911/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-900 hover:text-red-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};
