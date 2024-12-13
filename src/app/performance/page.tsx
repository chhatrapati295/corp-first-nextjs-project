import Hero from '@/components/Hero'
import React from 'react'
import performance from '../../../public/images/performance.jpg';

const page = () => {
  return (
    <Hero imgSrc={performance} altText="home page img" title="Performance" />
  )
}

export default page;
