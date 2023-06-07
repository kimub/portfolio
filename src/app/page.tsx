import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Parallax from '@/components/Parallax';

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
