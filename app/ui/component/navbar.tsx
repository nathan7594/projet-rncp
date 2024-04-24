'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const array = [
  { name: 'Offre', url: '/offre' },
  { name: 'Inscription', url: '/register' },
  { name: 'Connexion', url: '/login' },
];

const listItems = array.map((person, index) => (
  <li key={index} className="cursor-pointer rounded px-3 py-2 hover:bg-sky-100">
    <Link href={person.url}>{person.name}</Link>
  </li>
));
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container relative m-auto flex items-center justify-between p-3">
      <Link href={'/'}>
        <h1 className="font-xl font-bold text-sky-800">.GoldSeller</h1>
      </Link>
      <nav className={isOpen ? 'flex' : ' hidden md:flex'}>
        <ul className="absolute left-0 top-12 flex w-full flex-col bg-white text-center shadow md:relative md:top-0 md:flex md:flex-row md:shadow-none">
          {listItems}
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          className="flex items-center justify-center"
          onClick={toggleNavbar}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? 'hidden' : 'flex'}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? 'flex' : 'hidden'}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
