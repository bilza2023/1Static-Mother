<script>
  import InputNumber from './InputNumber.svelte';
  import InputFloat from './InputFloat.svelte';
  import InputText from './InputText.svelte';
  import InputTextArea from './InputTextArea.svelte';
  import InputCheckbox from './InputCheckbox.svelte';
  import InputColor from './InputColor.svelte';
  import FontFamilyDD from './FontFamilyDD.svelte';
  import PresnetationStatus from './PresnetationStatus.svelte';
  import PresnetationType from './PresnetationType.svelte';

  export let item;
  export let dialogueBox;

  const componentMap = {
    number: InputNumber,
    float: InputFloat,
    textArea: InputTextArea,
    text: InputText,
    boolean: InputCheckbox,
    color: InputColor,
    fontFamily: FontFamilyDD,
    presnetationType: PresnetationType,
    presnetationStatus: PresnetationStatus,
  };

  const isValidType = (type) => Object.keys(componentMap).includes(type);
</script>

{#if item}
<div class="flex flex-col overflow-y-auto max-h-[70vh] rounded-lg shadow mx-2 my-2">
  <div class="border-b border-gray-700">
    {#each dialogueBox as dialogueItem}
      {#if isValidType(dialogueItem.type) && item.hasOwnProperty(dialogueItem.fieldName)}
        <div class="border border-gray-700 px-2 text-[10px] text-yellow-200 text-left">
          {dialogueItem.title}
        </div>
        
        <div class="border border-gray-700 px-2 py-1">
          <svelte:component
            this={componentMap[dialogueItem.type]}
            bind:value={item[dialogueItem.fieldName]}
            config={dialogueItem.config || {}}
          />
        </div>
      {:else if !isValidType(dialogueItem.type)}
        <div class="text-red-500 text-xs px-2">Invalid type: {dialogueItem.type}</div>
      {:else}
        <div class="text-red-500 text-xs px-2">Missing field: {dialogueItem.fieldName}</div>
      {/if}
    {/each}
  </div>    
</div>
{:else}
<h6 class="text-sm text-gray-400">No item selected</h6>
{/if}