import React from "react"
import { clsx } from 'clsx'

export interface TextProps {
  children: string
  size?: 'sm' | 'md' | 'lg'
}

export const Text = ({ children, size = 'md' }: TextProps) => (
  <span className={clsx(
    'text-gray-100 font-sans',
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg'
    }
  )}>
    {children}
  </span>
)