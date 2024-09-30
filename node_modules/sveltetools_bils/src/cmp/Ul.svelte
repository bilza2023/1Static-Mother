<script>
export let bgColor = 'bg-gray-700';
export let hdgBgColor = 'bg-gray-900';
export let title = 'Title';

</script>


<div 
class= {` ${bgColor} border-white border-2 p-1 m-1 rounded-md mx-4 pb-2
`} >

<div 
class= {` mx-4 inline-block ${hdgBgColor}  p-2 m-2 rounded-md
`}>

{title}
</div>

<slot></slot>

</div>

