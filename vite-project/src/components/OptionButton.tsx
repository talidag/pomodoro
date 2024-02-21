import Button from "@mui/material/Button";
import React, { Dispatch, SetStateAction } from "react";

interface OptionButtonProps {
  text: string;
  selectedButton: string;
  setSelectedButton: Dispatch<SetStateAction<string>>;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  text,
  selectedButton,
  setSelectedButton,
}) => {
  const handleButtonClick = () => {
    setSelectedButton(text);
  };

  return (
    <Button
      variant={selectedButton === text ? "contained" : "text"}
      size="small"
      sx={{ textTransform: "none" }}
      onClick={handleButtonClick}
      value={text}
    >
      {text}
    </Button>
  );
};

export default OptionButton;
