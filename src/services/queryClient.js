import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000  // 5 mins
    }
  }
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage
});

export default queryClient;
