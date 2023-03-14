import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMonster from "./pages/AddMonster";
import DeleteMonster from "./pages/DeleteMonster";
import Monster from "./pages/Monster";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Monster />}></Route>
        <Route path="/add-monster" element={<AddMonster />}></Route>
        <Route path="/delete-monster" element={<DeleteMonster />}></Route>
      </Routes>
    </>
  );
};

export default App;
