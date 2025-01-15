<script>
  // Props with default values
  export let importAccept = '.js';
  export let title = 'OpenFile';
  export let style = 'text-[10px] ml-2 cursor-pointer text-white';
  export let callback = ()=>{};
  export let regexReplaceFilter = /export\s+const\s+\w+\s*=\s*/;
  


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
        callback(parsedContent);
      } catch (error) {
        console.error('Error loading file:', error);
        alert('Error loading file. Please ensure it is a valid file.');
      }
    }
  }
</script>

  <!-- Import file button -->
  <label class={style}>
    {title} 📂
    <input 
      type="file" 
      accept={importAccept}
      on:change={importFile}
      class="hidden"
    />
  </label>
