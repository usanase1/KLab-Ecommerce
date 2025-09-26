import type { FC } from 'react';
import type { CardProps } from '../types';

export const Card: FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);