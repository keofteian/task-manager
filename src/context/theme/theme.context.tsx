import React, { Dispatch, useReducer } from "react";
import { initialState, IState, reducer } from "./theme.reducer";
import { Actions } from './theme.actions';

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}

export const ThemeStore = React.createContext({} as IContextProps);

const ThemeStoreProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <ThemeStore.Provider value={value}>{props.children}</ThemeStore.Provider>
    );
}

export default ThemeStoreProvider;