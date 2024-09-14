<script lang="ts">
    let id: string = '';
    let result: string = '';
  
    async function checkID() {
      const response = await fetch('http://localhost:3000/check-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.result !== null) {
          result = `ID found. Calculated result: ${data.result}`;
        } else {
          result = `ID found, but no calculation.`;
        }
      } else {
        result = 'ID not found.';
      }
    }
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: 'Arial', sans-serif;
      background-color: #f9f9f9;
    }
  
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      width: 300px;
    }
  
    label {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #555;
    }
  
    input {
      padding: 10px;
      font-size: 1rem;
      border: 2px solid #ccc;
      border-radius: 5px;
      transition: border-color 0.3s;
    }
  
    input:focus {
      outline: none;
      border-color: #007bff;
    }
  
    button {
      padding: 10px 15px;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    p {
      margin-top: 1.5rem;
      font-size: 1.2rem;
      color: #333;
    }
  
    .result {
      font-weight: bold;
      color: #28a745;
    }
  </style>
  
  <div class="container">
    <form on:submit|preventDefault={checkID}>
      <div class="form-group">
        <label for="id">Enter ID:</label>
        <input
          id="id"
          type="text"
          bind:value={id}
          placeholder="Enter ID"
          required
        />
      </div>
      <button type="submit">Check ID</button>
    </form>
  
    {#if result}
      <p class="result">{result}</p>
    {/if}
  </div>
  