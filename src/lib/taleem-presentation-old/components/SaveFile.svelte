<script>
    // Props with default values
    export let content = []; // The data to be saved/loaded
    export let fileName = 'file';
    export let fileExtension = 'js';
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
  
 
  </script>
  
  
    <div class="flex items-center">
      <button class="text-[10px]" on:click={saveFile}>Save </button>
      <input 
        class="text-[10px] p-0 ml-2 text-white bg-gray-600 rounded-md text-center" 
        type="text" 
        bind:value={fileName} 
      />
    </div>
  