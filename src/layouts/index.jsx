import React from "react";
import { Route, Routes } from "react-router-dom";
import InformationPages from "../pages/InformationPages";

export default function Layout() {
  return (
    <Routes>
      <Route
        path={"/login"}
        key={"login"}
        element={<Login />}
      />
    </Routes>
    
  );
}
