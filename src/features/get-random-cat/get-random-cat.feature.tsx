'use client';

import { CatsOptionsRequest } from '@/shared/components/cats-options-request';
import Image from 'next/image';
import { FC } from 'react';
import styles from './get-random-cat.module.scss';
import { useGetRandomCat } from './hooks';
import { useEnableRequestState } from '@/global-states';
import { Button } from '@/shared/components/ui';

export const GetRandomCatFeature: FC = ({}) => {
  const { isEnabled } = useEnableRequestState();
  const {
    randomCat,
    isLoadingRandomCat,
    isFetchingRandomCat,
    invalidateQuery,
  } = useGetRandomCat();

  return (
    <div className={styles['feature-container']}>
      <CatsOptionsRequest />
      {!isEnabled ? (
        'Please enable the request'
      ) : (
        <Button onClick={invalidateQuery}>
          <p>Get random cat</p>
        </Button>
      )}
      <div className={styles['random-cat-image-container']}>
        {isLoadingRandomCat || isFetchingRandomCat
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
