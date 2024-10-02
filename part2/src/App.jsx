import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import LocalStorageComponent from "./components/LocalStorageComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TodoList />} />
            <Route path="/form" element={<Form />} />
            <Route path="/local-storage" element={<LocalStorageComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
