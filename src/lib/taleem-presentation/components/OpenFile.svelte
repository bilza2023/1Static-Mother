<script>
  // Props with default values
  export let importAccept = '.js';
  export let title = 'Open File';
  export let regexReplaceFilter = /export\s+const\s+\w+\s*=\s*/;
  export let callback=()=>{};


  // Function to import content
  async function importFile(event) {
    // debugger;
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
  <label class="text-[10px] ml-2 cursor-pointer">
    {title} 📂
    <input 
      type="file" 
      accept={importAccept}
      on:change={importFile}
      class="hidden"
    />
  </label>
