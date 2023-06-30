import React from 'react'
import { CardTypes } from './index';
import Button from '../Buttons/Button';
import { BiHeart } from 'react-icons/bi';
import { RiHeartFill } from 'react-icons/ri';
import { SiEthereum } from 'react-icons/si'
import Image from 'next/image';

export const ArtCard: React.FC<CardTypes> = ( 
    {
        artPrice,
        src,
        title,
        subTitle,
        alt,
    }
    ) => {

    const [liked, setLiked] = React.useState(false);

    function handleClick() {
        setLiked(!liked);
    }

    return (
        <div className='px-2 h-[430px]'>
            
            {/* Card */}
            <div className="hover:-translate-y-3 duration-300 rounded-2xl shadow-xl w-full h-full grid">

                <div className='overflow-clip md:h-full h-[300px] p-3'>
                    <Image className='w-full z-0 rounded-3xl' src={`${src}`} alt={`${alt}`} width={400} height={400} />
                </div>

                <div className='-mt-16 md:-mt-20'>

                    <div className="relative p-3">
                        <div className='absolute top-5'>
                            <div className="select-none text-md font-extrabold">
                                {title}
                            </div>

                            <div className='text-xs select-none'>
                                {subTitle}
                            </div>
                        </div>

                        <div className="absolute py-5 top-14">
                            <Button title='Mint NFT' />
                        </div>

                        <div className='absolute right-8 top-2 select-none text-sm py-2 flex font-bold'>
                            <SiEthereum className='text-md my-1' />
                            <span>
                                {artPrice}
                            </span>
                        </div>

                        <button className='absolute select-none top-20 right-8' onClick={handleClick}>
                            {liked ? (
                                <RiHeartFill size={30} color="#004267" />
                            ) : (
                                <BiHeart size={30} />
                            )}
                        </button>

                    </div>

                </div>

            </div>
            
        </div>
    )
}