import { Radio } from "antd";
import { useState } from "react";

interface OptionProps {
  text: string;
  index: number;
}

export function Option({ text, index }: OptionProps) {
  const [isHovered, setHovered] = useState(false);

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#F4F4F5";
    }
    return "white";
  };

  const optionStyle = {
    backgroundColor: getBackgroundColor(),
    transition: "background-color 0.3s",
    padding: "4px",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <Radio
      value={index}
      key={index}
      style={optionStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </Radio>
  );
}
