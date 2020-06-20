import React, { useContext } from "react";
import { Context } from "../../context/context";

const Tasks = () => {
  const { tasks } = useContext(Context);
  const { get, set } = tasks;

  return (
    <>
      <h3>Tasks:</h3>
      {get.map((item) => (
          <div key={item.id}>
              <p>{item.title} - {item.status}</p>
          </div>
      ))}
    </>
  );
};

export default Tasks;