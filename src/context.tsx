import React, { createContext, useState } from "react";

interface IDataContext {
  todolist: string[];
  setTodolist: React.Dispatch<React.SetStateAction<string[]>>;
}

export const data = createContext<IDataContext>({
  todolist: [],
  setTodolist: () => {}
});

interface IContextProps {
  children: React.ReactNode;
}

export default function Context({ children }: IContextProps): JSX.Element {
  const [todolist, setTodolist] = useState<string[]>([]);

  return (
    <data.Provider value={{ todolist, setTodolist }}>{children}</data.Provider>
  );
}
