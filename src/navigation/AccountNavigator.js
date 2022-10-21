import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import SignUp from "../components/Signup";
import MissingRoute from "./MissingRoute";

function AccountNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </Router>
  );
}

export default AccountNavigator;
