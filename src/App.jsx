import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calval={calval}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
