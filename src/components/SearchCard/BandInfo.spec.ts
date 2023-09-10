import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";

import BandInfo from "./BandInfo.svelte";
import { mockArtistWithEvent, mockArtist } from "testing/mocks";

describe("Band Info", async () => {
  it("should render with empty results", () => {
    render(BandInfo);

    expect(screen.getByText("No artist found yet")).toBeTruthy();
  });

  it("should render with artist result", () => {
    render(BandInfo, { artistWithEvents: mockArtistWithEvent });

    expect(screen.getByText("Artist Info")).toBeTruthy();
    expect(screen.getByText("test artist")).toBeTruthy();

    expect(screen.getByText("Artist Events")).toBeTruthy();
    expect(screen.getByText(/test event/i)).toBeTruthy();
  });

  it("should render with artist result but no events", () => {
    render(BandInfo, { artistWithEvents: { artist: mockArtist, events: [] } });

    expect(screen.getByText("Artist Info")).toBeTruthy();
    expect(screen.getByText("test artist")).toBeTruthy();

    expect(screen.getByText("Artist Events")).toBeTruthy();
    expect(screen.getByText("No events found")).toBeTruthy();
  });
});
