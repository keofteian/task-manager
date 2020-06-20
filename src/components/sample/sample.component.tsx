import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme.context";

const Sample = () => {
  const { theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme.get == 'light') return 'dark';
    return 'light';
  }

  return (
    <>
      <h3>Theme: {theme.get}</h3>
      <button onClick={() => theme.set(toggleTheme)}>
          {theme.get ? 'Light' : 'Dark'}
      </button>
    </>
  );
};

export default Sample;