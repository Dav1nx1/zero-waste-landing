import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link href='/' className='w-24 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'>ZW</Link>
    </div>
  )
}

export default Logo