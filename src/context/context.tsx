import React, { ReactNode, FC, useState } from "react";
import { ThemeContext } from './theme/theme.context';

interface Props {
  children: ReactNode;
}

const Store: FC<Props> = ({ children }) => {

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

export default Store;