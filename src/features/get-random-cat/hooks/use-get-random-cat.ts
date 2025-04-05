import { useEnableRefetchState, useEnableRequestState } from '@/global-states';
import { catsService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useGetRandomCat = () => {
  const { isEnabled } = useEnableRequestState();
  const { isRefetchEnabled } = useEnableRefetchState();

  const {
    data: randomCat,
    isLoading: isLoadingRandomCat,
    isFetching: isFetchingRandomCat,
  } = useQuery({
    queryKey: ['random-cat'],
    queryFn: catsService.getRandomCat,
    enabled: isEnabled,
    refetchInterval: isRefetchEnabled ? 5000 : false,
  });

  return {
    randomCat,
    isLoadingRandomCat,
    isFetchingRandomCat,
  };
};
