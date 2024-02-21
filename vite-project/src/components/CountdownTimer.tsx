import { Box, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SettingsContext from "./SettingsContext";

interface CountdownTimerProps {
  time: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ time }) => {
  const settings = useContext(SettingsContext);

  //   console.log(settings);

  const [countdownPercentage, setCountdownPercentage] = useState(100);
  const [timeInSeconds, setTimeInSeconds] = useState(time * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInSeconds((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const totalSeconds = 60;
  const percentage = (timeInSeconds / totalSeconds) * 100;

  let minutes = Math.floor(timeInSeconds / 60).toString();
  if (Number(minutes) < 10) minutes = "0" + minutes;

  let seconds = (timeInSeconds % 60).toString();
  if (Number(seconds) < 10) seconds = "0" + seconds;

  return (
    <Box>
      <CircularProgress
        variant="determinate"
        size={80}
        thickness={4}
        value={percentage}
        // style={{
        //   transform: "scaleX(1) rotate(-90deg)",
        // }}
      />
      <p>
        {minutes} : {seconds}
      </p>
    </Box>
  );
};

export default CountdownTimer;
