import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

const Sample = () => {
  const { theme } = useContext(ThemeContext);
  const { get, set } = theme;

  const toggleTheme = () => {
    if (get === 'light') return 'dark';
    return 'light';
  }

  return (
    <>
      <h3>Theme: {get}</h3>
      <button onClick={() => set(toggleTheme)}>
          {get ? 'Light' : 'Dark'}
      </button>
    </>
  );
};

export default Sample;