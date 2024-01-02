import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (modeType) => {
    if (mode !== "dark" && modeType === "Dark Mode") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextFormatter - Dark Mode";
    }
    if (mode !== "light" && modeType === "Light Mode") {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextFormatter - Light Mode";
    }
  };

  return (
    <div
      className="main-container"
      style={{
        backgroundColor: mode === "dark" ? "grey" : "white",
      }}
    >
      <Navbar
        title="TextFormatter"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alertt={alert} />
      <TextForm showAlert={showAlert} heading="TextFormatter" mode={mode} />
    </div>
  );
}
export default App;
