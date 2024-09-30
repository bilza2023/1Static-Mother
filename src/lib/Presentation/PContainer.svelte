<script>
export let theme;

</script>

<style>
    .presentation_div{
      background-color: var(--theme-backgroundcolor);
      padding: 0px;
      margin: 0px;

    }
</style>
    

<div class= {`${theme.backgroundColor}`}>

<slot></slot>
</div>
