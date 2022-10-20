import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const { logout } = useAuth();
  const [, setError] = useState("");
  const history = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history("/");
    } catch {
      setError("Failed to logout!");
    }
  };

  return ( 
    <nav>
      <div className="logo">
        <h1>E Blood Bank</h1>
      </div>
      <div>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Nav;
