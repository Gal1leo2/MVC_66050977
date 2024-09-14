<script lang="ts">
  let ids: string[] = [''];
  let results: string[] = [];

  async function checkID() {
      results = []; 

      for (const id of ids) {
          if (id.trim()) { 
              const response = await fetch('http://localhost:3000/api/check-id', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ id })
              });

              if (response.ok) {
                  const data = await response.json();
                  if (data.result !== null) {
                      results.push(`ID: ${id}, COLOR OF MILK: ${data.color}, Calculated result: ${data.result}`);
                  }
              } else {
                  const data = await response.json();
                  results.push(`ID: ${id}, Error: ${data.error}`);
              }
          }
      }
  }

  function addIDField() {
      ids = [...ids, ''];
  }

  function handleIDChange(index: number, value: string) {
      ids[index] = value;
  }
</script>

<div class="container">
  <h1>Welcome to COW Strike</h1>
  <form on:submit|preventDefault={checkID}>
      {#each ids as id, index}
          <div class="form-group">
              <label for={`id-${index}`}>Enter COW ID:</label>
              <input
                  id={`id-${index}`}
                  type="text"
                  bind:value={ids[index]}
                  placeholder="Enter ID"
                  required
                  on:input={(e) => handleIDChange(index, e.target.value)}
              />
          </div>
      {/each}
      <div class="button-group">
          <button type="button" on:click={addIDField}>+ Add ID</button>
          <button type="submit">Check IDs</button>
      </div>
  </form>

  {#if results.length > 0}
      <div class="results">
          {#each results as result}
              <p class="result">{result}</p>
          {/each}
      </div>
  {/if}
</div>

<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: 'Arial', sans-serif;
      background-color: #f0f4f8;
      padding: 20px;
  }

  h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 1rem;
  }

  .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      width: 100%;
      max-width: 400px;
  }

  label {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #555;
  }

  input {
      padding: 12px;
      font-size: 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      transition: border-color 0.3s, box-shadow 0.3s;
  }

  input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .button-group {
      display: flex;
      gap: 10px;
  }

  button {
      padding: 12px 20px;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
  }

  button:hover {
      background-color: #0056b3;
      transform: scale(1.05);
  }

  button:active {
      transform: scale(0.95);
  }

  .results {
      margin-top: 1.5rem;
      width: 100%;
      max-width: 400px;
  }

  .result {
      font-weight: bold;
      color: #28a745;
      margin-bottom: 0.5rem;
      padding: 10px;
      border: 1px solid #d4edda;
      border-radius: 5px;
      background-color: #d4edda;
  }
</style>
