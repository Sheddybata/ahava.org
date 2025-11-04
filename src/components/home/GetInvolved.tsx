import React, { useState } from 'react';
import { Button } from '../shared/Button';

export const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Thank you ${formData.name}! We'll contact you about ${formData.interest}.`);
    setFormData({ name: '', email: '', interest: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600">Everyone has a part to play in spreading the message of love</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Volunteer</h3>
            <p className="text-gray-600">Serve in media, ushering, evangelism, or logistics</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Give</h3>
            <p className="text-gray-600">Support missions, outreaches, and discipleship projects</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Pray</h3>
            <p className="text-gray-600">Join our global prayer chain every Monday & Thursday</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Partner</h3>
            <p className="text-gray-600">Become a monthly financial or prayer partner</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Join Our Team</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-900 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-900 focus:outline-none"
            />
            <select
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-900 focus:outline-none"
            >
              <option value="">Select Your Interest</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Give">Give</option>
              <option value="Prayer Partner">Prayer Partner</option>
              <option value="Monthly Partner">Monthly Partner</option>
            </select>
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
