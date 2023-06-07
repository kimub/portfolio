'use client';

import { useScrollHeaderColor } from '@/hooks/useScrollHeaderColor';

export default function Header() {
  useScrollHeaderColor();

  return (
    <header className='fixed top-0 z-50 w-full'>
      <nav className='wrapper'>
        <ul className='text-semibold flex justify-end space-x-6 px-8 py-6 text-lg text-white'>
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
