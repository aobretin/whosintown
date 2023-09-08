import { writable } from 'svelte/store';
import type { EventInfo, SelectedArtist } from 'models/entities';

export const selectedArtist = writable<SelectedArtist | null>(null);
export const selectedEvent = writable<EventInfo | null>(null);