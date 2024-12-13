import Hero from '@/components/Hero'
import React from 'react'
import reliability from '../../../public/images/reliability.jpg';

const page = () => {
  return (
    <Hero imgSrc={reliability} altText="reliability page img" title="Reliability" />
  )
}

export default page
