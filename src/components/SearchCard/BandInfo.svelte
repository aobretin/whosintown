<script lang="ts">
  import Empty from 'components/Empty.svelte';
  import type { SelectedArtist } from 'models/entities';
  import { selectedArtist } from 'store/global';

  let artistWithEvents: SelectedArtist | null;

  selectedArtist.subscribe((value) => {
    artistWithEvents = value;
  });
</script>

{#if !artistWithEvents}
  <Empty>
    <svelte:fragment>No artist selected yet</svelte:fragment>
  </Empty>
{:else}
  yeee band
{/if}
