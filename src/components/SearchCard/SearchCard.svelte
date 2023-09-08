<script lang="ts">
  import Card from 'components/layout/Card.svelte';
  import BandInfo from './BandInfo.svelte';
  import SearchInput from './SearchInput.svelte';
</script>

<Card>
  <svelte:fragment slot="card-header">
    <SearchInput />
  </svelte:fragment>

  <svelte:fragment slot="card-content">
    <BandInfo />
  </svelte:fragment>
</Card>
