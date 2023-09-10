import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/svelte";

import SearchInput from "./SearchInput.svelte";

describe("Search Input", async () => {
  it("should render", () => {
    render(SearchInput);

    expect(screen.getByTestId("search-input-wrapper")).toBeTruthy();
  });

  it("should have disabled button until some value", async () => {
    render(SearchInput);

    expect(screen.getByTestId("search-input-btn")).toHaveProperty(
      "disabled",
      true,
    );

    fireEvent.input(screen.getByTestId("search-input"), {
      target: { value: "test" },
    });

    await waitFor(() => {
      expect(screen.getByTestId("search-input-btn")).toHaveProperty(
        "disabled",
        false,
      );
    });
  });

  it("should have disabled input if loading prop", async () => {
    render(SearchInput, { isLoading: true, onArtistSearch: vi.fn() });

    expect(screen.getByTestId("search-input")).toHaveProperty("disabled", true);
  });

  it("should have call method on search", async () => {
    const mockSearch = vi.fn();
    render(SearchInput, { isLoading: false, onArtistSearch: mockSearch });

    fireEvent.input(screen.getByTestId("search-input"), {
      target: { value: "test" },
    });
    fireEvent.click(screen.getByTestId("search-input-btn"));

    expect(mockSearch).toBeCalledWith("test");
  });
});
