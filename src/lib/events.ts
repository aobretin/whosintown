import type { EventInfo } from "models/entities";
import type { Writable } from "svelte/store";

export const handleAddToFavorites = (
  favorites: EventInfo[],
  storeFavorites: Writable<EventInfo[]>,
  event: EventInfo,
) => {
  const newFavorites = [...favorites, event as EventInfo];

  storeFavorites.update(() => newFavorites);
};

export const handleRemoveFromFavorites = (
  favorites: EventInfo[],
  storeFavorites: Writable<EventInfo[]>,
  event: EventInfo,
) => {
  const favoritesClone = [...favorites];
  const favoriteIndex = favoritesClone.findIndex(
    (favorite: EventInfo) => favorite.id === event.id,
  );

  favoritesClone.splice(favoriteIndex, 1);

  storeFavorites.update(() => favoritesClone);
};
