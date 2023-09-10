<script lang="ts">
  import Card from "components/layout/Card.svelte";
  import BandInfo from "./BandInfo.svelte";
  import SearchInput from "./SearchInput.svelte";
  import { getArtistWithEvents } from "query/artist/mutations";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { selectedEvent } from "store/global";

  const fetchArtistWithEvents = getArtistWithEvents();
  const { mutate: callArtistWithEvents } = $fetchArtistWithEvents;

  const handleArtistSearch = (artistName: string) => {
    callArtistWithEvents(artistName);
    selectedEvent.set(null);
  };

  $: isFetching = $fetchArtistWithEvents.status === "loading";
  $: artistWithEvents = $fetchArtistWithEvents.data ?? null;
</script>

<Card>
  <svelte:fragment slot="card-header">
    {#if isFetching}<ProgressBar class="absolute top-0 left-0" />{/if}
    <SearchInput onArtistSearch={handleArtistSearch} isLoading={isFetching} />
  </svelte:fragment>

  <svelte:fragment slot="card-content">
    <BandInfo {artistWithEvents} />
  </svelte:fragment>
</Card>
