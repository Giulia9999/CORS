import React from 'react';

function App() {
  const fetchApi = async () => {
    console.log("You have clicked the button!");
    try {
      const response = await fetch("http://localhost:8080/custom");
      const text = await response.text();
      console.log("Response: ", text);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button onClick={fetchApi}>Fetch API</button>
    </div>
  );
}

export default App;