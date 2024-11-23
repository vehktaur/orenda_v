import { useQuery } from '@tanstack/react-query';
import { getProviderImages, getProviders } from './api';

export const useProviders = () => {
  return useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000 // Cache the data for 10 minutes
  });
};

export const useProviderImages = () => {
  return useQuery({
    queryKey: ['providerImages'],
    queryFn: getProviderImages,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000 // Cache the data for 10 minutes
  });
};
