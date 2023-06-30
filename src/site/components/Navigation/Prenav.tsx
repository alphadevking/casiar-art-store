import React from 'react'
import { DigitalClock } from '../Tools/DigitalClock'
import { GlobalTypes } from '../../globals'
import { BiCurrentLocation } from 'react-icons/bi'
import useDeviceLocation from '@/site/hooks/useDeviceLocation'
import Motion from '@/site/animations/motion'
import { Variants } from '@/site/animations/variants'

export const Prenav:React.FC<GlobalTypes> = ( { openTime, closeTime } ) => {

  const [location, error] = useDeviceLocation();

  if (error) {
    return <div>{error}</div>;
  }

  if (!location.city) {
    return <Motion variants={Variants.loadingSpinner} />;
  }

  openTime = "8am"
  closeTime = "4pm"

  return (
    <div className='bg-black/90 backdrop-blur-lg text-white flex w-full text-[11px] py-[5px] px-[5vw] fixed z-[9999]'>

      <div className='float-left'>
        <span>We are open from {openTime} to {closeTime}.</span>
      </div>

      <div className='grow' />

      <div className='flex gap-1'>
        <BiCurrentLocation className='animate-pulse w-fit text-lg' />
        <span>
          {location.city}, {location.state}, {location.country}
        </span>
      </div>

      <div className='grow'/>

      <div className='float-right'>
        <DigitalClock />
      </div>

    </div>
  )
}
