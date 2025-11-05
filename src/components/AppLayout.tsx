import React from 'react';
import { Navigation } from './layout/Navigation';
import { Hero } from './home/Hero';
import { Essence } from './home/Essence';
import { About } from './home/About';
import { Ministries } from './home/Ministries';
import { Leadership } from './home/Leadership';
import { Facilitators } from './home/Facilitators';
import { Sermons } from './home/Sermons';
import { Events } from './home/Events';
import { Testimonies } from './home/Testimonies';
import { GetInvolved } from './home/GetInvolved';
import { WhatsAppConnect } from './home/WhatsAppConnect';
import { ScriptureBanner } from './home/ScriptureBanner';
import { Footer } from './layout/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <ScriptureBanner />
      <Essence />
      <About />
      <div id="ministries">
        <Ministries />
      </div>
      <Leadership />
      <Facilitators />
      <Sermons />
      <Events />
      <Testimonies />
      <GetInvolved />
      <WhatsAppConnect />
      <Footer />
    </div>
  );
};

export default AppLayout;

