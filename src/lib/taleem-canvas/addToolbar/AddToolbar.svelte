<script>
    import SmallBtnToolbar from './SmallBtnToolbar.svelte';
    import Create from '../DrawModule/Create';

    export let player;
    // debugger;
    export let clone;
    export let deleteFn;
    export let log;
    // Payload-based toolbar items
    // export let  items = [
    //     {icon: '▭', payload: 'rectangle',title: 'Rect'},
    //     {icon: '🥚',payload:  'ellipse' ,title: 'Ellipse'},
    //     {icon: 'O',payload:'circle' ,title:   'Circle'},
    //     {icon: '📃',   payload:'text' ,title: 'Text'},
    //     {icon: '📜',   payload:'list' ,title: 'List'},
    //     {icon: '➖',   payload:'line' ,title: 'Line'},
    //     {icon: '🔺',   payload:'triangle' ,title: 'Tri'},
    //     {icon: '🌅',   payload:'ray' ,title: 'Ray'},
    //     // {icon: Icons.SPEAKER,   payload:'icon' ,title: 'Icon'},
    //     // {icon: Icons.DOT,   payload:'dot' ,title: 'DOT'},
    //     // {icon: Icons.ANGLE,   payload:'angle' ,title: 'ANGLE'},
    //     // {icon: Icons.BICYCLE,   payload:'lines' ,title: 'Lines'},
    //     {icon: '🕹️',   payload:'sprite' ,title: 'Sprite'},
    //     {icon: '🗺️',   payload:'image' ,title: 'Image'},
    //     {icon: '🍕',   payload:'piechart' ,title: 'Pie'},
    // ];

</script>

<div class="container">
    <div class="innerDiv">
<SmallBtnToolbar clk={() => player.itemsEditor.add.rectangle()} icon="▭" title="Rect"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.ellipse()} icon='🥚' title="Ellipse"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.circle()} icon="O" title="Circle"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.text()} icon='📃' title="Text"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.list()} icon='📜' title="List"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.line()} icon='➖' title="Line"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.triangle()} icon='🔺' title="Tri"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.ray()} icon='🌅' title="Ray"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.sprite()} icon='🕹️' title="Sprite"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.image()} icon='🗺️' title="Image"/>
<SmallBtnToolbar clk={() => player.itemsEditor.add.piechart()} icon='🍕' title="Pie"/>
    
    </div>

    <div class="innerDiv paddingRight">
        <SmallBtnToolbar clk={clone} icon='🐑' title="Clone"/>
        <SmallBtnToolbar clk={deleteFn} icon='🗑️' title="Delete" />
        <SmallBtnToolbar clk={log} icon='🖨️' title="Log" />
    </div>

</div>


<style>

    .paddingRight{
    padding-right: 20px;
    }
    .container{
      display: flex;
      color:azure;
      justify-content: space-between;
    }

    .innerDiv{
      display: flex;
    }
  </style>