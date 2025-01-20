<script>
  // Props with default values
  export let content = []; // The data to be saved/loaded
  export let fileName = 'file';
  export let fileExtension = 'js';
  export let importAccept = '.js';
  export let regexReplaceFilter = /export\s+const\s+\w+\s*=\s*/;
  export let PreTextToAdd = 'export const Content';
  

  // Function to save content
  function saveFile() {
    // const jsonString = `export const Content = ${JSON.stringify(content, null, 2)}`;
    const jsonString = `${PreTextToAdd} = ${JSON.stringify(content, null, 2)}`;
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.${fileExtension}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Function to import content
  async function importFile(event) {
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await file.text();
        // Remove export statement based on the provided pattern
        const cleanedText = text.replace(regexReplaceFilter, '');
        // Using Function constructor to parse the content
        const parsedContent = (new Function(`return ${cleanedText}`))();
        // Update the content
        content = parsedContent;
      } catch (error) {
        console.error('Error loading file:', error);
        alert('Error loading file. Please ensure it is a valid file.');
      }
    }
  }
</script>

<div class="flex p-0 m-0 bg-gray-900 text-white gap-2 py-1">
  <!-- Import file button -->
  <label class="text-[10px] ml-2 cursor-pointer">
    Import 📂
    <input 
      type="file" 
      accept={importAccept}
      on:change={importFile}
      class="hidden"
    />
  </label>

  <!-- Save button -->
  <button class="text-[10px]" on:click={saveFile}>Save 💾</button>

  <!-- Filename input -->
  <input 
    class="text-[10px] p-0 text-white bg-gray-600 rounded-md text-center" 
    type="text" 
    bind:value={fileName} 
  />
</div>