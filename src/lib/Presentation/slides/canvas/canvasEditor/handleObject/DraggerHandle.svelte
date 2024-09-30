<script>
//@ts-nocheck
import {selectedItemStore} from "../store";
import Handle from './Handle';




</script>

{#if selectedItemStore}

<h1>we have store {$selectedItemStore}</h1>

{/if}