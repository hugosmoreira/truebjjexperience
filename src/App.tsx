/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CityTicker from './components/CityTicker';
import Experiences from './components/Experiences';
import Passport from './components/Passport';
import Culture from './components/Culture';
import AppPreview from './components/AppPreview';
import GlobalNetwork from './components/GlobalNetwork';
import Stories from './components/Stories';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CityTicker />
      <Experiences />
      <Passport />
      <Culture />
      <AppPreview />
      <GlobalNetwork />
      <Stories />
      <FinalCTA />
      <Footer />
    </>
  );
}
