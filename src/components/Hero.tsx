import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface HeroProps {
    imgSrc : string | StaticImageData,
    altText : string,
    title : string,
}

const Hero = ({imgSrc , altText , title}:HeroProps) => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center relative'>
      <Image className='absolute inset-0' fill src={imgSrc} alt={altText} />
      <h2 className='z-20 text-4xl text-white font-bold'>{title}</h2>
    </div>
  )
}

export default Hero
