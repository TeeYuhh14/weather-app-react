import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/TeeYuhh14"
            target="_blank"
            rel="noreferrer"
          >
            Tia Demas
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/TeeYuhh14/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://deft-basbousa-42d877.netlify.app/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
