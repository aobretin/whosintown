<script lang="ts">
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
  import Root from "./components/Root/Root.svelte";
  import "iconify-icon";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Root />
</QueryClientProvider>
