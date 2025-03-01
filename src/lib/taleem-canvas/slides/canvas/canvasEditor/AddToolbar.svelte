<script>
   import Icons from "../../../Icons.js"; 

  
    export let taleemCanvas;
  
    // List of toolbar buttons
    const shapeItems = [
        { icon: Icons.RECTANGLE, payload: 'rectangle', title: 'Rect' },
        { icon: Icons.ELLIPSE, payload: 'ellipse', title: 'Ellipse' },
        { icon: Icons.ELLIPSE, payload: 'circle', title: 'Circle' },
        { icon: Icons.TEXT, payload: 'text', title: 'Text' },
        { icon: Icons.TEMPLATE, payload: 'list', title: 'List' },
        { icon: Icons.LINE, payload: 'line', title: 'Line' },
        { icon: Icons.TRIANGE, payload: 'triangle', title: 'Tri' },
        { icon: Icons.SUNRISE, payload: 'ray', title: 'Ray' },
        { icon: Icons.SPRITE, payload: 'sprite', title: 'Sprite' },
        { icon: Icons.MAP, payload: 'image', title: 'Image' },
        { icon: Icons.PIZZA, payload: 'piechart', title: 'Pie' },
    ];
  
    function addItem(type) {
        if (taleemCanvas && taleemCanvas.add[type]) {
            taleemCanvas.add[type]();
            taleemCanvas.draw(); // Ensure item appears immediately
        }
    }
  </script>
  <!-- Toolbar UI -->
<div class="toolbar">
    {#each shapeItems as item}
        <button on:click={() => addItem(item.payload)} title={item.title}>
            <span class="icon">{item.icon}</span>
            <span class="label">{item.title}</span>
        </button>
    {/each}
</div>

<!-- Styles -->
<style>
    .toolbar {
        display: flex;
        gap: 10px;
        background: #222;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 2px;
        display: flex;
        flex-direction: column; /* Stack icon and text */
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: background 0.2s;
        width: 60px; /* Fixed width for uniformity */
        height: 70px; /* Fixed height */
        color: white;
    }

    button:hover {
        background: #333;
    }

    .icon {
        font-size: 24px; /* Increase icon size */
        display: block;
    }

    .label {
        font-size: 12px; /* Smaller text */
        margin-top: 4px;
    }
</style>
