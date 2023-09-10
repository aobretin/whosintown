<script lang="ts">
  import Card from "components/layout/Card.svelte";
  import Empty from "components/Empty.svelte";
  import type { EventInfo } from "models/entities";
  import { favoriteEvents } from "store/global";
  import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
  import { formatDate } from "lib/utils";
  import { handleRemoveFromFavorites } from "lib/events";

  let favorites: EventInfo[] = [];
  let clickedEvent: string | null = null;

  favoriteEvents.subscribe((events) => {
    favorites = events;
  });
</script>

<Card>
  <svelte:fragment slot="card-header">
    <div class="card variant-soft p-4 text-center font-medium">
      Favorite Events
    </div>
  </svelte:fragment>

  <svelte:fragment slot="card-content">
    {#if !favorites.length}
      <Empty>
        <svelte:fragment>No favorite events yet</svelte:fragment>
      </Empty>
    {:else}
      <ListBox class="w-full !rounded-none">
        {#each favorites as favorite}
          <ListBoxItem
            class="border-white border"
            name="event"
            bind:group={clickedEvent}
            value={favorite.id}
          >
            <div class="flex justify-between items-center">
              <a href={favorite.url} target="_blank" class="flex">
                <iconify-icon
                  class="text-yellow-300 text-[24px] mr-[5px]"
                  icon="ic:baseline-star"
                />
                <span>{favorite.title}</span>
                <span class="mx-2">-</span>
                {formatDate(favorite.datetime)}
              </a>

              <button
                data-testid={`remove-favorite-${favorite.id}-btn`}
                on:click={() =>
                  handleRemoveFromFavorites(
                    favorites,
                    favoriteEvents,
                    favorite,
                  )}
                type="button"
                class="btn-icon variant-filled"
              >
                <iconify-icon
                  class="text-red-600 text-[24px]"
                  icon="material-symbols:delete"
                />
              </button>
            </div>
          </ListBoxItem>
        {/each}
      </ListBox>
    {/if}
  </svelte:fragment>
</Card>
