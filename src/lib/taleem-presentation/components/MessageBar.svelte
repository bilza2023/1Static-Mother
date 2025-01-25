<script>
    export let message = ""; // Message to display
    export let bgColor = "#f8d7da"; // Default background color (light red)
    export let textColor = "#721c24"; // Default text color (dark red)
  </script>
  
  <style>
    .message-bar {
      width: 100%;
      padding: 1rem;
      border-radius: 4px;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      box-sizing: border-box;
    }
  </style>
  
  <div
    class="message-bar"
    style="background-color: {bgColor}; color: {textColor};"
  >
    {message}
  </div>
  