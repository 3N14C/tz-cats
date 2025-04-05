'use client';

import { FC } from 'react';
import styles from './cats-options-request.module.scss';
import { useEnableRefetchState, useEnableRequestState } from '@/global-states';
import { Checkbox } from '../ui';

export const CatsOptionsRequest: FC = ({}) => {
  const { isEnabled, setEnabled } = useEnableRequestState();
  const { isRefetchEnabled, setRefetchEnabled } = useEnableRefetchState();

  return (
    <div className={styles['options-container']}>
      <Checkbox
        label="Enable"
        checked={isEnabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />

      <Checkbox
        label="Auto-refresh every 5 second"
        checked={isRefetchEnabled}
        onChange={(e) => setRefetchEnabled(e.target.checked)}
      />
    </div>
  );
};
