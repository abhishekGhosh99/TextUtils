import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  // Whether dark mode is enable or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Toggle dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(26, 26,26)";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // Toggle blue themed dark mode
  const secondaryMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#162532";
      document.body.style.color = "white";
      showAlert(" Blue themed dark mode has been enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Blue themed dark mode has been disabled", "success ");
    }
  };

  // Toggle grey themed dark mode
  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#323232";
      document.body.style.color = "#fff";
      showAlert(" Grey themed dark mode has been enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Grey themed dark mode has been disabled", "success ");
    }
  };

  return (
    <>
      <Navbar
        home="Home"
        title="TextUtils"
        // about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        secondaryMode={secondaryMode}
        darkMode={darkMode}
      />

      <Alert alert={alert} />

      <Textform
        showAlert={showAlert}
        heading="Try TextUtils - word counter, character counter, remove extra spaces"
      />
    </>
  );
}

export default App;
