<script lang="ts">
  import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
  import Empty from "components/Empty.svelte";
  import SectionTitle from "components/SectionTitle.svelte";
  import { formatDate } from "lib/utils";
  import type { EventInfo, SelectedArtist } from "models/entities";
  import { selectedEvent } from "store/global";

  export let artistWithEvents: SelectedArtist | null;

  let clickedEvent: string | null = null;

  const handleEventSelect = (event: EventInfo, i: number) => {
    selectedEvent.set({
      ...event,
      title: event.title.length
        ? event.title
        : `${artistWithEvents?.artist.name} Event ${i + 1}`,
    });
  };
</script>

{#if !artistWithEvents}
  <Empty>
    <svelte:fragment>No artist found yet</svelte:fragment>
  </Empty>
{:else}
  {@const artist = artistWithEvents.artist}
  {@const events = artistWithEvents.events}

  <div class="flex flex-col gap-10 h-full">
    <div class="flex flex-col">
      <SectionTitle>Artist Info</SectionTitle>
      <div class="flex gap-4">
        <div class="w-[150px]">
          <img
            class="h-auto max-w-full rounded-lg"
            src={artist.image_url}
            alt={artist.name}
          />
        </div>

        <div>
          <p><span class="font-bold">Name:</span> {artist.name}</p>
          <p>
            <span class="font-bold">Socials:</span>
            {#each artist.links as link}
              <a
                class="chip variant-soft hover:variant-filled mr-2"
                href={link.url}
                target="_blank"
              >
                <span>{link.type}</span>
              </a>
            {/each}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-full">
      <SectionTitle>Artist Events</SectionTitle>
      <div class="h-full">
        {#if !events.length}
          <Empty>
            <svelte:fragment>No events found</svelte:fragment>
          </Empty>
        {:else}
          <ListBox
            class="w-full overflow-y-auto overscroll-contain h-[410px] !rounded-none"
          >
            {#each events as event, i}
              <ListBoxItem
                bind:group={clickedEvent}
                on:click={() => handleEventSelect(event, i)}
                class="border-white border"
                name="event"
                value={event.id}
              >
                {event.title.length
                  ? event.title
                  : `${artist.name} Event ${i + 1}`} - {formatDate(
                  event.datetime,
                )}
              </ListBoxItem>
            {/each}
          </ListBox>
        {/if}
      </div>
    </div>
  </div>
{/if}
