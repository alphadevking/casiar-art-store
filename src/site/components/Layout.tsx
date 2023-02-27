import React from 'react'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'
import { GlobalTypes } from '../globals/index';
import { AppWrapper } from './AppWrapper';
import ThemeSwitch from '../tools/NextJSThemeSwitch';
import Motion from '../animations/motion';
import { Variants } from '../animations/variants';
import { Prenav } from './Navigation/Prenav';

const Layout = (
        { 
            prenav, navbar, children, footer
        } : GlobalTypes
    ) => (

    <div className='min-h-screen'>

        <AppWrapper>

            <Motion variants={Variants.bounceIn} className='flex fixed z-50 right-0 top-1/3 shadow-xl bg-white/10 backdrop-blur-[3px] hover:pr-5 rounded-l-3xl p-2 align-middle duration-300 ease-in-out hover:bg-white/20 text-xl'>
                <ThemeSwitch/>
            </Motion>

            {
                prenav?
                    <Prenav />
                    :
                    null
            }

            {
                navbar ?
                    <Navbar />
                    :
                    null
            }

            <div className='px-5'>

                {children}
                
            </div>

            {
                footer ?
                    <Footer />
                    :
                    null
            }

        </AppWrapper>

    </div>

)

export default Layout