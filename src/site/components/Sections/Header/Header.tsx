import React from 'react'
import alpha from '../../../assets/images/alphadevking.jpg'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex flex-wrap w-full md:w-2/3 mx-auto shadow-2xl rounded-xl'>
      
      <div className='px-2 pb-5 pt-2 w-fit md:w-1/2 h-80 overflow-clip'>
        <Image src={alpha} alt='alpha' className='rounded-xl w-fit'/>
      </div>

      <div className='px-2 pb-5 pt-2 w-fit md:w-1/2'>
        <h3 className='text-2xl font-bold'>Mi amor!</h3>
        <span className='text-sm'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam dignissimos enim, amet eligendi ducimus minima. Minima ex excepturi laborum, porro reprehenderit, vel omnis, eaque nisi dolorem deleniti ipsum explicabo? Ullam?
        </span>
      </div>

    </div>
  )
}
