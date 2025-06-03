import React, { useState, useEffect } from "react";
import { Input, Label,  Span } from "./ThemeToggleSwitch.styled";

const ThemeToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!isChecked) {
      htmlElement.classList.toggle("dark");
    } else {
        htmlElement.classList.toggle("dark");
    }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Label >
        <Input  type="checkbox" checked={isChecked} onChange={handleToggle} />
       <Span className="inline-block  font-size-24 text-color-blue border border-blue-500 rounded-full py-1 px-2">{isChecked?"🌙":"☀"}</Span>
     </Label>
    
    </div>
  );
};

export default ThemeToggleSwitch;