import React from "react";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Landing />
      <Login />
    </BrowserRouter>
  );
};

export default App;
