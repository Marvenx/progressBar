import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Button from "./button";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  function updateProgress() {
    setProgress((progress) => (progress >= 100 ? 0 : progress + 10));
  }
  return (
    <div>
      <ProgressBar progress={progress} />
      <Button onClick={updateProgress} />
    </div>
  );
}

export default App;
