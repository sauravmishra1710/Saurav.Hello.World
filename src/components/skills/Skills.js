import React, { useContext } from "react";
import Techstack from "./TechStack.js";
import ThemeContext from "../../utility/themeContext";

function Skills() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    
    <Techstack  />
  );
}

export default Skills;
