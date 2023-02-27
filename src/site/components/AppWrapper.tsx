import React from 'react'
import { GlobalTypes } from '../globals/index';
import { ThemeProvider } from 'next-themes'

export const AppWrapper:React.FC<GlobalTypes> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
