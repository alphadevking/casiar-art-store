import * as React from 'react'
import { GlobalTypes } from '../../globals';
import styled from 'styled-components';
import { RiFileCopy2Fill } from 'react-icons/ri'
import Image from 'next/image';
import Err404 from '../../assets/images/Err404.png'
import Link from 'next/link';

export const Error404Image = () => {

    const style404 = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "550px",
        maxHeight: "550px",
    }

    return(
        <Image src={Err404} alt='' style={style404}></Image>
    )
};


export const LogoImage:React.FC<GlobalTypes> = ({logoName}) => {

    const logoStyle = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "50px",
        maxHeight: "50px",
        padding: '5px',
    }

    return(
        <div className='w-fit'>
            <Link href='/' className='relative'>
                <Image src='/logo.png' alt='logo' style={logoStyle} width={50} height={50} />
                <span className='absolute top-3 left-10 mx-3 text-xl font-extrabold text-inherit tracking-wider opacity-50'>
                    {logoName}
                </span>
            </Link>
        </div>
    )
};

const MediaButton = styled.button`
    text-decoration: none;
    padding: 8px;
    border-radius: 50px;
    margin: 5px;
`

export const MediaIcon: React.FC<GlobalTypes> = (
    {
        children,
        text,
        href,
        className,
        name,
        target,
    }
) => {

    return(
        <MediaButton className={className}>
            <a href={href} target={target}>
                {children}{name}{text}
            </a>
        </MediaButton>
    )
}

export const CopyButton:React.FC<GlobalTypes> = ({
    onClick
}) => {

    return(
        <main>
            <button onClick={onClick}><RiFileCopy2Fill className='absolute top-3 left-auto ml-3 text-xl' /></button>
            <div id='alert' className='hidden'>Hello</div>
        </main>
    )

}
