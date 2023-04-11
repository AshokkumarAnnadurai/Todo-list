import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddTodo from "./addtodo";
import Item from "./Items";
import Context from "./context";

function App() {
  return (
    <BrowserRouter>
      <Link to="/addtodo" style={{ marginRight: 10 }}>
        Addtodo
      </Link>
      <Link to="/items"> Items</Link>
      <Context>
        <Routes>
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/items" element={<Item />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
