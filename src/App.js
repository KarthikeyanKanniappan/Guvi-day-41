import React from "react";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Login from "./components/Login";
import Portal from "./components/Portal";
import CreateUsers from "./components/CreateUsers";
import Userview from "./components/Userview";
import EditUser from "./components/EditUser";
import CreateProducts from "./components/CreateProducts";
import ProductsView from "./components/ProductsView";
import EditProducts from "./components/EditProducts";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/:id" element={<Userview />} />
          <Route path="Users/EditUser/:id" element={<EditUser />} />
          <Route path="Users/CreateUsers" element={<CreateUsers />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductsView />} />
          <Route path="products/EditProducts/:id" element={<EditProducts />} />
          <Route path="products/CreateProducts" element={<CreateProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
