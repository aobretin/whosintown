import { mockEvent } from "testing/mocks";

import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";

import FavoritesCard from "./FavoritesCard.svelte";
import { favoriteEvents } from "store/global";

const multiMockEvents = [
  mockEvent,
  { ...mockEvent, id: 2, title: "test event 2" },
];

describe("FavoritesCard Card", async () => {
  it("should render with 0 results", () => {
    render(FavoritesCard);

    expect(screen.getByText("No favorite events yet")).toBeTruthy();
  });

  it("should render with results", () => {
    favoriteEvents.set(multiMockEvents);

    render(FavoritesCard);

    expect(screen.getByText(multiMockEvents[0].title)).toBeTruthy();
    expect(screen.getByText(multiMockEvents[1].title)).toBeTruthy();
  });

  it("should remove from favorites", async () => {
    favoriteEvents.set(multiMockEvents);

    render(FavoritesCard);

    expect(screen.getByText(multiMockEvents[0].title)).toBeTruthy();
    expect(screen.getByText(multiMockEvents[1].title)).toBeTruthy();

    fireEvent.click(
      screen.getByTestId(`remove-favorite-${multiMockEvents[0].id}-btn`),
    );

    await waitFor(() => {
      expect(screen.queryByText(multiMockEvents[0].title)).toBeFalsy();
    });
  });
});
