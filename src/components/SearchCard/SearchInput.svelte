<script lang="ts">
  export let onArtistSearch: (artistName: string) => void;
  export let isLoading: boolean;

  let searchValue: string = "";

  $: disabled = !searchValue.length || isLoading;
</script>

<div class="flex">
  <input
    class="input p-3 rounded-r-none text-white"
    type="text"
    name="autocomplete-search"
    bind:value={searchValue}
    placeholder="Type an artist's name..."
    disabled={isLoading}
    tabindex="0"
    on:keyup={(e) => {
      if (e.key === "Enter") {
        onArtistSearch(searchValue);
      }
    }}
  />
  <button
    class="btn bg-gradient-to-br variant-gradient-secondary-tertiary rounded-l-none"
    on:click={() => onArtistSearch(searchValue)}
    {disabled}>Search</button
  >
</div>
