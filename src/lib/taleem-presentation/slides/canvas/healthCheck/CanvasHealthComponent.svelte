<script>
    export let report;
  </script>
  
 {#if report} 

    <h1 style="color: #333;">Report Summary</h1>
    
    <section style="margin-bottom: 1rem;">
      <h2 style="color: #007BFF;">Messages</h2>
      {#if report.messages.length > 0}
        <ul>
          {#each report.messages as message}
            <li style="color: red;">⚠ {message}</li>
          {/each}
        </ul>
      {:else}
        <p style="color: green;">No messages found.</p>
      {/if}
    </section>
  
    <section style="margin-bottom: 1rem;">
      <h2 style="color: #007BFF;">Result</h2>
      <p style="font-weight: bold; color: {report.result ? 'green' : 'red'};">
        {report.result ? "Success" : "Failure"}
      </p>
    </section>
  
    <section>
      <h2 style="color: #007BFF;">Item Type Report</h2>
      {#each Object.entries(report.itemTypeReport) as [type, items]}
        <div style="margin-bottom: 1rem; border-top: 1px solid #ccc; padding-top: 0.5rem;">
          <h3 style="color: #555;">{type} ({items.length} items)</h3>
          {#each items as item}
            <div style="margin-bottom: 0.5rem;">
              <p>Item Index: <strong>{item.itemIndex}</strong></p>
              <p>Missing Fields: {item.missingFields.length > 0 ? item.missingFields.join(', ') : 'None'}</p>
              <p>Extra Fields: {item.extraFields.length > 0 ? item.extraFields.join(', ') : 'None'}</p>
            </div>
          {/each}
        </div>
      {/each}
    </section>

  {/if}