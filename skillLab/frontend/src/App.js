import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/add";
import Inventory from "./components/inventory";
import About from "./components/about";
import Update from "./components/update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/About" element={<About />} />
          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;