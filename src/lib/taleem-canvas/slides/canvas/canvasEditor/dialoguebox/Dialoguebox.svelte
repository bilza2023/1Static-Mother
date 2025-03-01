
<script>
import Ellipse from "./items/Ellipse.svelte";
import Rectangle from "./items/Rectangle.svelte";
import Circle from "./items/Circle.svelte";
import Text from "./items/Text.svelte";


export let selectedItemItemExtra;
</script>

{#if selectedItemItemExtra.type == "ellipse"}
<Ellipse    {selectedItemItemExtra} />
{/if}

{#if selectedItemItemExtra.type == "rectangle"}
<Rectangle    {selectedItemItemExtra} />
{/if}

{#if selectedItemItemExtra.type == "circle"}
<Circle    {selectedItemItemExtra} />
{/if}

{#if selectedItemItemExtra.type == "text"}
<Text    {selectedItemItemExtra} />
{/if}

{#if selectedItemItemExtra.type == "list"}
<List    {selectedItemItemExtra} />
{/if}
