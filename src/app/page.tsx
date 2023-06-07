'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Parallax from '@/components/Parallax';

AOS.init();

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Parallax />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
