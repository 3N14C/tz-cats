'use client';

import { FC } from 'react';
import { ReactQueryProvider } from './react-query.provider';

interface IProps {
  children: React.ReactNode;
}

export const MainProvider: FC<IProps> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
