import { useContext } from "react";
import { data } from "./context";

export default function Item() {
  const { todolist, setTodolist } = useContext(data);

  const handleDelete = (id: number) => {
    setTodolist((prevList: string[]) => prevList.filter((item, i) => i !== id));
  };

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {todolist.map((item: string, id: number) => (
          <li key={id}>
            {item}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
