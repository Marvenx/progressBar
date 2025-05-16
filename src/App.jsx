import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  function updateProgress() {
    setProgress((progress) => (progress >= 100 ? 0 : progress + 10));
  }
  return (
    <div>
      <ProgressBar progress={progress} />
      {/*<Button onClick={updateProgress} />*/}
      <button onClick={updateProgress}>Increase Progress</button>;
    </div>
  );
}

export default App;
