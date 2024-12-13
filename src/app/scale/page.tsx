import Hero from '@/components/Hero'
import React from 'react'
import scale from '../../../public/images/scale.jpg';

const page = () => {
  return (
    <Hero imgSrc={scale} altText="scale page img" title="Scale" />
  )
}

export default page
