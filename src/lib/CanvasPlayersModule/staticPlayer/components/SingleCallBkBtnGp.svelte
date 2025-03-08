<script>
    import SmallBtnToolbar from './SmallBtnToolbar.svelte';
    
    import Icons from '$lib/taleem-canvas/assets/Icons';

    // export let Icons = {};
    export let callBack = () => {};
    export let containerClass = 'flex text-white';

    // Payload-based toolbar items
    export let  items = [
        {icon: Icons.RECTANGLE,payload: 'rectangle',title: 'Rect'},
        {icon: Icons.ELLIPSE,payload:  'ellipse' ,title: 'Ellipse'},
        {icon: Icons.ELLIPSE,payload:'circle' ,title: 'Circle'},
        {icon: Icons.TEXT,   payload:'text' ,title: 'Text'},
        {icon: Icons.TEMPLATE,   payload:'list' ,title: 'List'},
        {icon: Icons.LINE,   payload:'line' ,title: 'Line'},
        {icon: Icons.TRIANGE,   payload:'triangle' ,title: 'Tri'},
        {icon: Icons.SUNRISE,   payload:'ray' ,title: 'Ray'},
        {icon: Icons.SPEAKER,   payload:'icon' ,title: 'Icon'},
        {icon: Icons.DOT,   payload:'dot' ,title: 'DOT'},
        {icon: Icons.ANGLE,   payload:'angle' ,title: 'ANGLE'},
        {icon: Icons.BICYCLE,   payload:'lines' ,title: 'Lines'},
        {icon: Icons.SPRITE,   payload:'sprite' ,title: 'Sprite'},
        {icon: Icons.MAP,   payload:'image' ,title: 'Image'},
        {icon: Icons.PIZZA,   payload:'piechart' ,title: 'Pie'},
    ];




</script>

<div class={containerClass}>
    {#each items as item (item.title)}
        <SmallBtnToolbar 
            clk={() => callBack(item.payload)} 
            icon={item.icon} 
            title={item.title} 
        />
    {/each}
</div>
