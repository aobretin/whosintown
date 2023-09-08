<script lang="ts">
  import EventCard from 'components/EventCard/EventCard.svelte';
  import FavoritesCard from 'components/FavoritesCard/FavoritesCard.svelte';
  import Nav from 'components/layout/Nav.svelte';
  import SearchCard from 'components/SearchCard/SearchCard.svelte';
</script>

<div class="flex flex-col h-full">
  <Nav />
  <div class="flex p-4 gap-4 h-full">
    <SearchCard />
    <EventCard />
    <FavoritesCard />
  </div>
</div>
