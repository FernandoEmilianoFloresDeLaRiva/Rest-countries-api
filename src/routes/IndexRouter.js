import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";

function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/details/:name" Component={Details}/>
      </Routes>
    </BrowserRouter>
  );
}

export default IndexRouter;
