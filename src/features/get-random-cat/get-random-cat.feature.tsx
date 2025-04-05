'use client';

import { CatsOptionsRequest } from '@/shared/components/cats-options-request';
import Image from 'next/image';
import { FC } from 'react';
import styles from './get-random-cat.module.scss';
import { useGetRandomCat } from './hooks';
import { useEnableRequestState } from '@/global-states';

interface IProps {}

export const GetRandomCatFeature: FC<IProps> = ({}) => {
  const { isEnabled } = useEnableRequestState();
  const { randomCat, isLoadingRandomCat, isFetchingRandomCat } =
    useGetRandomCat();

  return (
    <div className="">
      <CatsOptionsRequest />

      <div className="">
        {!isEnabled
          ? 'Please enable the request'
          : isLoadingRandomCat || isFetchingRandomCat
          ? 'Loading...'
          : randomCat?.map((cat) => (
              <Image
                key={cat.id}
                src={cat.url}
                alt="cat"
                width={cat.width}
                height={cat.height}
                className={styles['random-cat-image']}
              />
            ))}
      </div>
    </div>
  );
};
