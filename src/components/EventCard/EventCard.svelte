<script lang="ts">
  import Card from "components/layout/Card.svelte";
  import Empty from "components/Empty.svelte";
  import { favoriteEvents, selectedEvent } from "store/global";
  import type { EventInfo } from "models/entities";
  import SectionTitle from "components/SectionTitle.svelte";
  import { formatDate } from "lib/utils";
  import { handleAddToFavorites, handleRemoveFromFavorites } from "lib/events";

  let currentEvent: EventInfo | null = null;
  let favorites: EventInfo[] = [];

  selectedEvent.subscribe((event) => {
    currentEvent = event;
  });

  favoriteEvents.subscribe((events) => {
    favorites = events;
  });

  $: isAddedToFavorites = favorites.some(
    (favorite: EventInfo) => favorite.id === currentEvent?.id,
  );

  const onAddToFavorites = () => {
    handleAddToFavorites(favorites, favoriteEvents, currentEvent as EventInfo);
  };

  const onRemoveFromFavorites = () => {
    handleRemoveFromFavorites(
      favorites,
      favoriteEvents,
      currentEvent as EventInfo,
    );
  };
</script>

<Card>
  <svelte:fragment slot="card-header">
    <div class="card variant-soft p-4 text-center font-medium">
      Event Information
    </div>
  </svelte:fragment>

  <svelte:fragment slot="card-content">
    {#if !currentEvent}
      <Empty>
        <svelte:fragment>No event selected yet</svelte:fragment>
      </Empty>
    {:else}
      <div class="flex flex-col gap-8 overflow-auto h-[410px]">
        <div>
          <SectionTitle>Event info</SectionTitle>
          <div>
            <p>
              <span class="font-bold">Name:</span>
              <a class="hover:underline" href={currentEvent.url} target="_blank"
                >{currentEvent.title}</a
              >
            </p>
            <p>
              <span class="font-bold">Date:</span>
              {formatDate(currentEvent.datetime)}
            </p>
            <p>
              <span class="font-bold">Description:</span>
              {currentEvent.description || "No description available"}
            </p>
          </div>
        </div>

        <div>
          <SectionTitle>Event Venue</SectionTitle>
          <div>
            <p>
              <span class="font-bold">Location:</span>
              {currentEvent.venue.location}
            </p>
            <p>
              <span class="font-bold">Street:</span>
              {currentEvent.venue.street_address}
            </p>
            <p>
              <span class="font-bold">Location name:</span>
              {currentEvent.venue.name}
            </p>
          </div>
        </div>

        {#if currentEvent.offers}
          <div>
            <SectionTitle>Special Offers</SectionTitle>
            <div>
              <p>
                <span class="font-bold">Offers:</span>
                {#each currentEvent.offers as offer}
                  <a
                    class="chip variant-soft hover:variant-filled mr-2"
                    href={offer.url}
                    target="_blank"
                  >
                    <span>{offer.type}</span>
                  </a>
                {/each}
              </p>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="card-actions">
    {#if currentEvent}
      <div class="flex justify-center w-full">
        {#if isAddedToFavorites}
          <button on:click={onRemoveFromFavorites} class="btn variant-filled"
            >Remove from favorites</button
          >
        {:else}
          <button on:click={onAddToFavorites} class="btn variant-filled"
            >Add to favorites</button
          >
        {/if}
      </div>
    {/if}
  </svelte:fragment>
</Card>
