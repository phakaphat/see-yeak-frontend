import React from "react";
import { Route, Routes } from "react-router-dom";
import InformationPages from "../pages/InformationPages";
import Main from "./Main/index"
export default function Layout() {
  return (
    <Main>
      <Routes>
        <Route
          path={"/test"}
          key={"test"}
          element={<InformationPages />}
        />
      </Routes>
    </Main>

  );
}
