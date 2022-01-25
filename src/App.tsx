import React from "react";
import { Route, Routes } from "react-router-dom";
import { globalStyles } from "./styles/stiches.global";
import { Home } from "./pages/Home";
import { FavList } from "./pages/FavList";

export default function App() {
  globalStyles();
  return (
    <Routes>
      <Route path={"*"} element={<Home />} />
      <Route path={"/favorites"} element={<FavList />} />
    </Routes>
  );
}
