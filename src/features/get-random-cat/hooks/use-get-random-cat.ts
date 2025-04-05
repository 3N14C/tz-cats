import { useEnableRefetchState, useEnableRequestState } from '@/global-states';
import { catsService } from '@/services';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetRandomCat = () => {
  const queryClient = useQueryClient();
  const { isEnabled } = useEnableRequestState();
  const { isRefetchEnabled } = useEnableRefetchState();

  const invalidateQuery = () =>
    queryClient.invalidateQueries({ queryKey: ['random-cat'] });

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
    invalidateQuery,
  };
};
