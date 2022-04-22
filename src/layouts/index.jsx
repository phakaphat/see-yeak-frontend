import React from "react";
import { Route, Routes } from "react-router-dom";
import InformationPages from "../pages/InformationPages";

export default function Layout() {
  return (
    <Routes>
      <Route
        path={"/test"}
        key={"test"}
        element={<InformationPages />}
      />
    </Routes>
  );
}
