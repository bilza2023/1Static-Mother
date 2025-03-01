<script>
    export let title;
  </script>
  
  <div class="row">
    <div class="column title-column">{title}</div>
    <div class="column content-column">
      <slot />
    </div>
  </div>
  
  <style>
.row {
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding: 0.5rem;
    box-sizing: border-box;
}

.column {
    flex: 1;
    text-align: left;
    border-color: aliceblue;
    padding: 2px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.title-column {
    font-weight: bold;
    flex: 2; /* Increased width */
}

  </style>