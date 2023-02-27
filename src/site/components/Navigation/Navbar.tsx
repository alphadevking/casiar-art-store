import * as React from 'react'
import Link from 'next/link';
import { LogoImage } from '../common/styled';
import { topNavItems } from '.';

export const Navbar = () => {

  return (

    <div className='px-[10vw] py-2 shadow-md sticky top-4 z-50 bg-inherit/30 backdrop-blur-lg flex'>

      <LogoImage logoName='Casiar'/>

      <div className='grow' />

      <nav className='flex gap-5'>
        
        {topNavItems.map((val, key) => {
          return (
            <div key={key} className='p-3 md:block hidden'>
              <Link href={`${val.to}`}>{val.title}</Link>
            </div>
          );
        })}
        
      </nav>

    </div>
  )
}
