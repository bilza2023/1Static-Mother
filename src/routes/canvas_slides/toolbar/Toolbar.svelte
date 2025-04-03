<script >
  //3-Apr-2025 : Every thing is important and Everything is final.
    import NavAnchor from './NavAnchor.svelte';
    import NavBtn2 from './NavBtn2.svelte';
    export let copy;
</script>
  
<div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 ' style="color:whitesmoke;">
   
    <div class='flex justify-start items-center gap-1'>          
      <NavAnchor title='Home'     icon='🏠' url="/" />
      <NavBtn2 title='Copy'  icon='💡'  clk={copy} />      
    </div> 
  
<!-- ////////////////////////////////////////right side -->
  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  <NavAnchor title='Presentations'  icon='🐑'  url= "/presentations_index" />
  </div>  

<!-- ////////////////////////////////////////End-3-apr-2025 -->
</div>
    