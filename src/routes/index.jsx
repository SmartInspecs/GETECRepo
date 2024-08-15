import React from "react";
import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/form";
import ViewPage from "../pages/viewPage";
import ListPage from "../pages/listPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewPage />} />
      <Route path="/registro" element={<FormPage />} />
      <Route path="/view" element={<ListPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RoutesMain;
