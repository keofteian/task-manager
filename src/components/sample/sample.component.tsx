import React, { useContext } from "react";
import { Context } from "../../context/context";

const Sample = () => {
  const { theme } = useContext(Context);
  const { get, set } = theme;

  const toggleTheme = () => {
    if (get === 'light') return 'dark';
    return 'light';
  }

  return (
    <>
      <h3>Theme: {get}</h3>
      <button onClick={() => set(toggleTheme)}>
          {get === 'dark' ? 'Light' : 'Dark'}
      </button>
    </>
  );
};

export default Sample;