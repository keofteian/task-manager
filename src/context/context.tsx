import { createContext, Dispatch, SetStateAction } from "react";

interface ITasks {
  id: number;
  title: string;
  status: string;
}

interface IContext {
  theme: { get: string; set: Dispatch<SetStateAction<string>> };
  tasks: { get: Array<ITasks>; set: Dispatch<SetStateAction<Array<ITasks>>> };
}

export const Context = createContext({} as IContext);