'use client';

import { useScrollHeaderColor } from '@/hooks/useScrollHeaderColor';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const isScroll = useScrollHeaderColor();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className='fixed top-0 z-50 hidden w-full md:block'>
      <nav className='wrapper '>
        <ul
          className={`text-semibold flex justify-end space-x-6 px-8 py-6 text-lg transition-all duration-200 ${
            isScroll ? 'text-black' : 'text-white'
          }`}
        >
          <li>
            <a href='#home' className='cursor-pointer'>
              Home
            </a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
