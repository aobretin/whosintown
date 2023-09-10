import { writable } from "svelte/store";
import type { EventInfo } from "models/entities";
import { FAVORITES_LOCAL_STORAGE_KEY } from "constants/global";
import { localStorageStore } from "@skeletonlabs/skeleton";

const storedEvents = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
const parsedStoredEvents = storedEvents ? JSON.parse(storedEvents) : [];

export const selectedEvent = writable<EventInfo | null>(null);
export const favoriteEvents = localStorageStore(
  FAVORITES_LOCAL_STORAGE_KEY,
  parsedStoredEvents,
);
