import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Subscription />
      <Features />
    </main>
    <Footer />
  </>);
}
