import * as React from 'react'
import { FC } from "react";
import clsx from "clsx";
import { BiLoaderAlt } from "react-icons/bi";
import { ButtonProps, buttonSizeClasses, buttonVariantClasses } from '.';

const Button: FC<ButtonProps> = ({
  children,
  className,
  loading = false,
  title,
  size = "small",
  variant = "primary",
  onClick,
}) => (
  <button
    className={clsx(buttonSizeClasses[size], buttonVariantClasses[variant], className)} 
    onClick={onClick}
  >
    {loading && <BiLoaderAlt className="animate-spin !w-4 !h-4 inline-block mr-1" />}
    {title}{children}
  </button>
);

export default Button