
<script>
 
        import EqPanel from './EqPanel.svelte';
        import SidePanel from './sp/SidePanel.svelte';
      
        export let currentTime;
        export let slideExtra;
        export let setPulse;

      </script>
      
      <div class="bg-gray-800 w-full text-white min-h-screen p-0 m-0">
        <div class="flex px-2 rounded-md bg-gray-900">
          <!-- Main content with EqPanel -->
          <div class="w-8/12 min-h-screen max-h-screen p-2 m-0 overflow-x-auto">
            <EqPanel  {setPulse} {currentTime}/>
          </div>
      
     
          <div class="w-4/12 min-h-screen p-2 m-0 mt-2 bg-yellow-950 text-yellow-300b">
            <SidePanel {currentTime} {slideExtra}/>
          </div>
   
      
        </div>
      </div>
      