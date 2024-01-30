import React from "react";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Homepage from "./modules/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import Signin from "./modules/Auth/pages/Signin/Signin";
import Signup from "./modules/Auth/pages/Signup/Signup";
import UserInfo from "./modules/UserInfo/UserInfo";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />

          {/* Public routes */}
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />

          {/* User information */}
          <Route path="users" element={<UserInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
