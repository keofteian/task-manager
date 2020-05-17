import React, { useContext } from "react";
import { ThemeStore } from "../../context/theme/theme.context";

const Sample = () => {
  const { state, dispatch } = useContext(ThemeStore);
  console.log('state');
  console.log(state);

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' })

//   const logout = () => dispatch({ type: "LOGOUT" });
//   const login = () => dispatch({ type: "LOGIN" });

  return (
    <div>
      <h3>Theme: {state.dark}</h3>
      {/* <button onClick={state.isAuth ? logout : login}>
        {state.isAuth ? "Logout" : "Login"}
      </button> */}
      <button onClick={toggleTheme}>
          {state.dark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Sample;