<script lang="ts">
  import Card from 'components/layout/Card.svelte';
  import Empty from 'components/Empty.svelte';
</script>

<Card>
  <svelte:fragment slot="card-header">
    <div class="card variant-soft p-4 text-center font-medium">
      Event Information
    </div>
  </svelte:fragment>

  <svelte:fragment slot="card-content">
    <Empty>
      <svelte:fragment>No event selected yet</svelte:fragment>
    </Empty>
  </svelte:fragment>
</Card>
