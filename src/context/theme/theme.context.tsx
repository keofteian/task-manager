import React, { ReactNode, FC, createContext, useState } from "react";

interface IContext {
  theme: { get: string; set: any }
}

interface Props {
  children: ReactNode;
}

export const ThemeContext = createContext({} as IContext);

const ThemeStoreProvider: FC<Props> = ({ children }) => {

    const [ theme, setTheme ] = useState<string>('light');

    const store = {
      theme: { get: theme, set: setTheme }
    }

    return (
        <ThemeContext.Provider value={store}>
          {children}
        </ThemeContext.Provider>
    );
}

export default ThemeStoreProvider;