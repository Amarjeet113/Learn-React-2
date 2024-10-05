import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    switch (buttonText) {
      case "AC":
        setCalVal(""); // Clear the display
        break;
      case "DEL":
        setCalVal(calVal.slice(0, -1)); // Delete the last character
        break;
      case "=":
        try {
          const result = eval(calVal); // Evaluate the expression
          setCalVal(result);
        } catch {
          setCalVal("Error"); // Handle invalid expressions
        }
        break;
      case "%":
        try {
          const result = eval(calVal + "/100"); // Calculate percentage
          setCalVal(result);
        } catch {
          setCalVal("Error");
        }
        break;
      case "^2":
        try {
          const result = Math.pow(eval(calVal), 2); // Square the current value
          setCalVal(result);
        } catch {
          setCalVal("Error");
        }
        break;
      case "√":
        try {
          const result = Math.sqrt(eval(calVal)); // Calculate square root
          setCalVal(result);
        } catch {
          setCalVal("Error");
        }
        break;
      default:
        // Append the buttonText to the current value
        setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
