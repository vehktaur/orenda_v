import { useQuery } from '@tanstack/react-query';
import { getProviderImages, getProviders } from './api';

export const useProviders = () => {
  return useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
    refetchOnWindowFocus: false,
  });
};

export const useProviderImages = () => {
  return useQuery({
    queryKey: ['providerImages'],
    queryFn: getProviderImages,
    refetchOnWindowFocus: false,
  });
};
