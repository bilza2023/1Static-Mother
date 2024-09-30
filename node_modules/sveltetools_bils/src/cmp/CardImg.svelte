
<script>
//@ts-nocheck
export let img="";
export let alt="Image not found";
export let title='The Title';
export let url = 'https://google.com';
export let titleCharsCount = 25;
//------------------
function firstXChars(string) {
  return string.slice(0, titleCharsCount);
}

</script>

 
<div class="min-w-[150px] bg-gray-600 rounded-md p-2 m-1 
border-4  border-blue-700 text-center 
hover:border-blue-200"><!--outer -div-->

<a  class="hover:bg-stone-600  rounded-lg" 
 href={url} >

<div class="flex flex-col"><!--inner -div-->
    <!-- //icon -->
    <div class='flex justify-center'>
    <img class="mb-2" width=200 height=300 src={img} alt={alt} />
    </div>
   <!-- title -->
   <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">{firstXChars(title)}</div>
   <!-- buttons -->
   
   <div class='flex justify-center m-0 p-0'>
   <slot ></slot>
      <hr/>
   </div>
   
</div><!--inner-div-->
</a>
</div><!--outer-div-->
