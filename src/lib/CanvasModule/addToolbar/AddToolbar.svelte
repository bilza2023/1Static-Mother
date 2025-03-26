<script>
    import SmallBtnToolbar from './SmallBtnToolbar.svelte';

    export let callback;
    // debugger;
    // export let clone;
    // export let deleteFn;
    // export let log;

</script>

<div class="container">
    <div class="innerDiv">
<SmallBtnToolbar clk={() => callback("rectangle")} icon="▭" title="Rect"/>
<SmallBtnToolbar clk={() => callback("ellipse")} icon='🥚' title="Ellipse"/>
<SmallBtnToolbar clk={() => callback("circle")} icon="O" title="Circle"/>
<SmallBtnToolbar clk={() => callback("text")} icon='📃' title="Text"/>
  <SmallBtnToolbar clk={() => callback("line")} icon='➖' title="Line"/>
<SmallBtnToolbar clk={() => callback("triangle")} icon='🔺' title="Tri"/>
<SmallBtnToolbar clk={() => callback("ray")} icon='🌅' title="Ray"/>
<SmallBtnToolbar clk={() => callback("dot")} icon='🌸' title="Dot"/>

  <SmallBtnToolbar clk={() => callback("list")} icon='📜' title="List"/>
<SmallBtnToolbar clk={() => callback("icon")} icon='🏃' title="icon"/>
<SmallBtnToolbar clk={() => callback("sprite")} icon='🕹️' title="Sprite"/>
<SmallBtnToolbar clk={() => callback("image")} icon='🗺️' title="Image"/>
<SmallBtnToolbar clk={() => callback("piechart")} icon='🍕' title="Pie"/>
    
    </div>

    <div class="innerDiv paddingRight">
        <!-- <SmallBtnToolbar clk={clone} icon='🐑' title="Clone"/>
        <SmallBtnToolbar clk={deleteFn} icon='🗑️' title="Delete" />
        <SmallBtnToolbar clk={log} icon='🖨️' title="Log" /> -->
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