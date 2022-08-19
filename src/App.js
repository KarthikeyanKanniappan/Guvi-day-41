import React from "react";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Login from "./components/Login";
import Portal from "./components/Portal";
import CreateUsers from "./components/CreateUsers";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/CreateUsers" element={<CreateUsers />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
