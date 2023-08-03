'use client';

import Link from 'next/link';
import React from 'react'
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Articles</Link>
      </nav>
      <Logo />
      <nav>
      <Link href='/' target='_blank'>Home</Link>
      <Link href='/' target='_blank'>About</Link>
      <Link href='/' target='_blank'>Projects</Link>
      <Link href='/' target='_blank'>Articles</Link>
      <Link href='/' target='_blank'>About</Link>
      <Link href='/' target='_blank'>Projects</Link>
      <Link href='/' target='_blank'>Articles</Link>
      </nav>
    </header>
  )
}

export default Navbar
