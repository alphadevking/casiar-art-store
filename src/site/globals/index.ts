import { MouseEventHandler, ReactNode } from 'react';

export interface GlobalTypes {
    text?: string | undefined,
    children?: ReactNode | undefined,
    href?: string | undefined;
    className?: string | undefined;
    name?: ReactNode | string | undefined,
    target?: string | undefined,
    success?: boolean | undefined,
    danger?: boolean | undefined,
    info?: boolean | undefined,
    warning?: boolean | undefined,
    onClick?: MouseEventHandler,
    navbar?: boolean,
    footer?: boolean,
    props?: any,
    openTime?: string | undefined,
    closeTime?: string | undefined,
    prenav?: boolean | undefined,
    logoName?: string | undefined,
}