import { mockEvent } from "testing/mocks";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";

import EventCard from "./EventCard.svelte";
import { selectedEvent, favoriteEvents } from "store/global";

describe("Event Card", async () => {
  it("should render with 0 results", () => {
    render(EventCard);

    expect(screen.getByText("No event selected yet")).toBeTruthy();
  });

  it("should render with results", () => {
    selectedEvent.set(mockEvent);

    render(EventCard);

    expect(screen.getByText("Event info")).toBeTruthy();
    expect(screen.getByText(mockEvent.title)).toBeTruthy();
    expect(screen.getByText("Add to favorites")).toBeTruthy();
  });

  it("should render with results -- remove from favorites", () => {
    selectedEvent.set(mockEvent);
    favoriteEvents.set([mockEvent]);

    render(EventCard);

    expect(screen.getByText("Event info")).toBeTruthy();
    expect(screen.getByText(mockEvent.title)).toBeTruthy();
    expect(screen.getByText("Remove from favorites")).toBeTruthy();
  });
});
