import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { RecipeContext } from "../App";

const PrivateRouter = () => {
  const { name, pass } = useContext(RecipeContext);

  // return localStorage.getItem("username") === "cihan" &&
  //   localStorage.getItem("password") === "1234" ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" />
  // );

  return name === "cihan" && pass === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
