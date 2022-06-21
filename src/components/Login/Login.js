import React from "react";
import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Login;
