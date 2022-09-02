import { Routes, Route } from "react-router-dom";

import { DataProvider } from "../context/DataContext";

const Main = () => {
  return (
    <>
      <DataProvider>Helpdesk</DataProvider>
    </>
  );
};

export default Main;
