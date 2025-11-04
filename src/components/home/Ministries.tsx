import React from 'react';

const ministries = [
  {
    title: 'Men of Valor',
    description: 'Building godly men who lead with faith, strength, and humility in their homes, workplaces, and communities.',
    image: '/MenofValor.jpg'
  },
  {
    title: 'Women of Grace',
    description: 'Empowering women to walk in virtue, wisdom, and purpose as daughters loved by God.',
    image: '/WomenofGrace.jpg'
  },
  {
    title: 'Youth Ignite',
    description: 'Raising passionate young believers equipped to impact their generation with creativity, excellence, and conviction.',
    image: '/youthignite.jpg'
  },
  {
    title: "Children's Corner",
    description: 'Nurturing children with the Word of God in fun, interactive, and faith-filled ways.',
    image: '/Childrenscorner.jpg'
  },
  {
    title: 'Prayer & Evangelism',
    description: 'Leading global prayer movements, evangelistic missions, and outreach to hospitals, orphanages, and communities in need.',
    image: '/Prayer&Evangelism.jpg'
  },
  {
    title: 'FaithFlow App',
    description: 'A digital companion for your faith journey — pray, track, and grow daily.',
    image: '/Faithflowapp.jpg',
    signUpLink: 'https://ahava-ministry-international.vercel.app/'
  }
];

export const Ministries: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Ministries & Resources</h2>
          <p className="text-xl text-gray-600">Equipping believers to live out God's purpose</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={ministry.image} 
                  alt={`${ministry.title} ministry at Ahavah Ministry`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-900 mb-3">{ministry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{ministry.description}</p>
                {ministry.signUpLink && (
                  <a 
                    href={ministry.signUpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                  >
                    Click here to sign up →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
