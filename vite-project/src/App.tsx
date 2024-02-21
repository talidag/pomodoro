import Box from "@mui/material/Box";
import CountdownTimer from "./components/CountdownTimer";
import OptionButton from "./components/OptionButton";
import { createContext, useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [selectedButton, setSelectedButton] = useState("pomodoro");
  const [timeInSeconds, setTimeInSeconds] = useState(25 * 60);

  const buttonOptions = [
    {
      text: "pomodoro",
      time: 25,
    },
    {
      text: "short break",
      time: 5,
    },
    {
      text: "long break",
      time: 15,
    },
  ];

  const selectedButtonObject = buttonOptions.find(
    (button) => button.text === selectedButton
  );

  const selectedButtonTime = selectedButtonObject?.time || 25; // set a default value for time

  // setTimeInSeconds(selectedButtonTime * 60);

  return (
    <>
      <h1>Pomodoro</h1>

      {/* <SettingsContext.Provider value={{ selectedButton, setSelectedButton }}> */}
      <Box>
        {buttonOptions.map((button, key) => (
          <OptionButton
            key={key}
            text={button.text}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        ))}
      </Box>
      <CountdownTimer time={selectedButtonTime} />
      {/* </SettingsContext.Provider> */}
    </>
  );
}

export default App;
