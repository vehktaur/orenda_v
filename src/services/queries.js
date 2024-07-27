import { useQuery } from '@tanstack/react-query';
import { getProviders } from './api';

export const useProviders = () => {
  return useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
    refetchOnWindowFocus: false
  });
};
