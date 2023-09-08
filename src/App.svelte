<script lang="ts">
  import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
  import Root from './components/Root/Root.svelte';
  import { defaultQueryFn } from './query/settings';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });
</script>

<QueryClientProvider client={queryClient}>
  <Root />
</QueryClientProvider>
