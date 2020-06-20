import React, { ReactNode, FC, useState } from "react";
import { Context } from './context';

interface Props {
  children: ReactNode;
}

interface ITasks {
    id: number;
    title: string;
    status: string;
}

const Store: FC<Props> = ({ children }) => {

    const [ theme, setTheme ] = useState<string>('light');
    const [ tasks, setTasks ] = useState<Array<ITasks>>([
        {id: 1, title: 'Do some coding', status: 'pending'},
        {id: 2, title: 'Write article', status: 'pending'}
    ]);

    const store = {
      theme: { get: theme, set: setTheme },
      tasks: { get: tasks, set: setTasks }
    }

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}

export default Store;