
<script>
    export let text = "";
    export let backgroundColor = "#f0f0f0";
    export let color = "#000";
    export let fontSize = "16px";
  </script>
  
  <div
    style="
      width: 100%;
      background-color: {backgroundColor};
      color: {color};
      font-size: {fontSize};
      text-align: center;
      padding: 0.2rem;
      margin: 0;
    "
  >
    {text}
  </div>
  