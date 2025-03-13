<script>
    import SmallBtnToolbar from './SmallBtnToolbar.svelte';
    
    export let callBack = () => {};
    export let containerClass = 'flex text-white';

    // Payload-based toolbar items
    export let  items = [
        {icon: '▭', payload: 'rectangle',title: 'Rect'},
        {icon: '🥚',payload:  'ellipse' ,title: 'Ellipse'},
        {icon: 'O',payload:'circle' ,title: 'Circle'},
        {icon: '📃',   payload:'text' ,title: 'Text'},
        {icon: '📜',   payload:'list' ,title: 'List'},
        {icon: '➖',   payload:'line' ,title: 'Line'},
        {icon: '🔺',   payload:'triangle' ,title: 'Tri'},
        {icon: '🌅',   payload:'ray' ,title: 'Ray'},
        // {icon: Icons.SPEAKER,   payload:'icon' ,title: 'Icon'},
        // {icon: Icons.DOT,   payload:'dot' ,title: 'DOT'},
        // {icon: Icons.ANGLE,   payload:'angle' ,title: 'ANGLE'},
        // {icon: Icons.BICYCLE,   payload:'lines' ,title: 'Lines'},
        {icon: '🕹️',   payload:'sprite' ,title: 'Sprite'},
        {icon: '🗺️',   payload:'image' ,title: 'Image'},
        {icon: '🍕',   payload:'piechart' ,title: 'Pie'},
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