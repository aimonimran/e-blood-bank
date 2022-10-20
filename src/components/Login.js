import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { login } = useAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history('/dashboard');
    } catch {
      setError("Email or password is incorrect.");
    }
  }; 

  return (
    <div className="signup">
      <h1>Log In</h1>
      {error && <h4>Error: {error}</h4>}
      <form onSubmit={handleSubmit} className="signup-form">
        <input placeholder="Email" type="email" ref={emailRef} defaultValue='omama@gmail.com' required />
        <input placeholder="Password" type="password" ref={passwordRef} defaultValue='123456' required />
        <button style={{ marginTop: "1rem", width: "10%" }} type="submit">
          Log In
        </button>

        <p style={{ textTransform: "capitalize" }}>
          Need a new account?
          <Link style={{ border: "none" }} to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
