import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  return localStorage.getItem("username") === "cihan" &&
    localStorage.getItem("password") === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;

