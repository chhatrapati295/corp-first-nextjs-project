import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center fixed z-50 max-h-20 inset-0  py-5 px-20 bg-white text-black'>
      <Link href={'/'}><h2 className='text-xl font-bold'>CORP</h2></Link>
      <ul className="flex items-center gap-12 font-semibold text-blue-900">
        <Link href={'/performance'}><li>Performance</li></Link>
        <Link href={'/scale'}><li>Scale</li></Link>
        <Link href={'/reliability'}><li>Reliability</li></Link>
      </ul>
    </div>
  )
}

export default Header
