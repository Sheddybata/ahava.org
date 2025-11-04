import React from 'react';

const values = [
  { title: 'Love', description: 'We lead with love — serving others selflessly, as a reflection of God\'s heart.' },
  { title: 'Faith', description: 'We walk by faith and live by the Word of God, trusting His promises in every season.' },
  { title: 'Integrity', description: 'We honor God through transparency, humility, and truth in all we do.' },
  { title: 'Excellence', description: 'We pursue quality and growth in ministry, leadership, and service — because God deserves our best.' },
  { title: 'Service', description: 'We exist to serve, reaching out with compassion to meet both spiritual and practical needs.' },
  { title: 'Unity', description: 'We are one family in Christ, celebrating diversity and working together to advance the Kingdom.' }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 text-center">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ahavah Ministry International (AMI) is a faith-based, non-denominational movement established to reveal God's unconditional love to the world. We are a family of believers passionate about building lives that reflect Christ through faith, service, and purpose.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rooted in Luke 1:30 — 'You are loved by God', we exist to help people everywhere discover their divine identity, walk in purpose, and manifest God's love in every area of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">Vision</h3>
            <p className="text-lg leading-relaxed">
              To elevate every human capacity — spiritual, emotional, academic, and physical — through the transforming love of God.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              To reach, restore, and equip people to live out God's purpose — formed, filled, and fitted for the Master's use. (Ephesians 2:10)
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-red-900 mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <h4 className="text-xl font-bold text-red-900 mb-3">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-red-900 mb-4 text-center">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ahavah began as a vision inspired by Luke 1:30 — 'Fear not… you have found favor with God.' Initially focused on empowering women to rediscover their worth and divine purpose, Ahavah has now evolved into a global ministry that embraces everyone — men, women, and youth — under one banner: the love of God. From Bible studies and prayer movements to evangelism and skill empowerment, Ahavah continues to be a platform where lives are found, restored, and furnished for the Master's use.
          </p>
        </div>
      </div>
    </section>
  );
};
