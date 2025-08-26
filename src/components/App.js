import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";  

function App() {
  // Initialize state
  const [weather] = useState({
    temperature: 25,
    condition: "Sunny"
  });

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay 
        temperature={weather.temperature} 
        condition={weather.condition} 
      />
    </div>
  );
}

export default App;
