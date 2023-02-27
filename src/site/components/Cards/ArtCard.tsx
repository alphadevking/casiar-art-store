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
        <div className='m-10'>
            
            {/* Card */}
            <div className="hover:-translate-y-3 duration-300 rounded-2xl mx-auto my-5 bg-base-100 shadow-2xl !h-[400px] !w-[300px]">
                <figure className='select-none h-[220px] overflow-clip relative rounded-t-2xl'>
                    <Image src={`${src}`} alt={`${alt}`} className='-z-50' width={420} height={500}/>
                </figure>
                <div className="card-body relative top-5 p-3">
                    <div className="select-none text-md font-extrabold">{title}</div>
                    <div className='text-xs select-none'>{subTitle}</div>
                    <div className="absolute my-3 -bottom-16">
                        <Button title='Mint NFT'/>
                    </div>
                    <div className='absolute right-8 top-3 select-none text-xs'>
                        <div className='flex font-bold text-sm'><SiEthereum className='text-md mt-1' /><span>{artPrice}</span></div>
                    </div>
                    <div className='absolute select-none -bottom-16 right-8 text-center'>
                        <button onClick={handleClick}>
                            {liked ? (
                                <RiHeartFill size={20} color="#004267" />
                            ) : (
                                <BiHeart size={20} />
                            )}
                        </button>
                        <label className='block text-center'>Add to wishlist</label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}