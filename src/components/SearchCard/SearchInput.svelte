<script lang="ts">
  let searchValue: string = '';
  let placeholder: string = 'Search for artist...';

  const onValueInput = () => {
    console.log('asdasd');
  };
</script>

<input
  class="input p-3"
  type="text"
  name="autocomplete-search"
  bind:value={searchValue}
  on:input={onValueInput}
  {placeholder}
/>
