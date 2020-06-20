import { createContext, Dispatch, SetStateAction } from "react";

interface IContext {
  theme: { get: string; set: Dispatch<SetStateAction<string>> }
}

export const ThemeContext = createContext({} as IContext);