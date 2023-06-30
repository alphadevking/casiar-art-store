import { StaticImageData } from 'next/image';
import { GlobalTypes } from '../../globals/index';

export interface CardTypes extends GlobalTypes {
    artPrice: string | undefined,
    src?: string | StaticImageData,
    title: string | undefined,
    subTitle: string | undefined,
    alt?: string | undefined,
    image?: string,
}