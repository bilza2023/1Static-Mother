<script>
    import ToolbarDiv from '../../../components/ToolbarDiv.svelte';
    import ToolBarCallbackWithArgs from '../../../components/ToolBarCallbackWithArgs.svelte';
    import ToolBarCallback from '../../../components/ToolBarCallback.svelte';
    
    import Icons from '../../icons';

    export let addNewItem;

    export let clone=()=>{};
    export let deleteFn=()=>{};
    export let showCanvas=()=>{};

    // Payload-based toolbar items
    const shapeItems = [
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

    // Simple callback toolbar items
    const actionItems = [
        {icon: Icons.SHEEP,callback: clone,title: 'Clone'},
        {icon: Icons.CANVAS,callback: showCanvas,title: 'Canvas'},
        {icon: Icons.WASTEBASKET,callback: deleteFn,title: 'Delete'}
    ];


</script>

<ToolbarDiv>
    <ToolBarCallbackWithArgs 
        items={shapeItems} 
        callBack={addNewItem} 
    />

    <ToolBarCallback 
        items={actionItems} 
    />
</ToolbarDiv>