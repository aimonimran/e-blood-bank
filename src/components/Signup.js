import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Oops! Passwords do not match!");
    }
 
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      history('/');
    } catch {
      setError("Failed to create account.");
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {error && <h4>Error: {error}</h4>}
      <form onSubmit={handleSubmit} className="signup-form">
        <input placeholder="Email" type="email" ref={emailRef} required />
        <input placeholder="Password" type="password" ref={passwordRef} required />
        <input placeholder="Confirm Password" type="password" ref={confirmPasswordRef} required />
        <button style={{ marginTop: "1rem", width: "10%" }} type="submit">
          Sign Up
        </button>

        <p style={{ textTransform: "capitalize" }}>Already have an account? <Link style={{border:'none'}} to='/'>Log In</Link></p>
      </form>
    </div>
  );
};

export default Signup;
