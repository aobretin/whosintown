import { createMutation } from "@tanstack/svelte-query";
import { createFetchUrl } from "lib/utils";

export const getArtistWithEvents = () =>
  createMutation({
    mutationFn: async (artistName: string) => {
      const artistResponse = await fetch(
        createFetchUrl("artists", [artistName]),
      );
      const artist = await artistResponse.json();

      // this means the artist doesn't exist
      if (typeof artist === "string") {
        return null;
      }

      const eventsResponse = await fetch(
        createFetchUrl("artists", [artistName, "events"]),
      );
      const events = await eventsResponse.json();

      return { artist, events };
    },
  });
