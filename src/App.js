import React from "react";
import AuthProvider from "./contexts/AuthContext";
import Navigation from ".//navigation/Navigation";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
