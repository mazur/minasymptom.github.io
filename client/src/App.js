import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Checkup } from "./components/Checkup";
import { ONE_HOUR } from "@cocheck/api";
import { COVID19symptoms } from "@cocheck/checks";

function App() {
  const [nextCheckup, setNextCheckup] = React.useState();
  const [showForm, setShowForm] = React.useState();
  const saveCheckup = React.useCallback((data) => {
    console.log("save checkup...", data);
    setNextCheckup(new Date() + ONE_HOUR);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!showForm && <Home onStartForm={() => setShowForm(true)} />}
        {showForm && (
          <Checkup
            checks={COVID19symptoms}
            nextCheckup={nextCheckup}
            onSave={saveCheckup}
          />
        )}
      </header>
    </div>
  );
}

export default App;
