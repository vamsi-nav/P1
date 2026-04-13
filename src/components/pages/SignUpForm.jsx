import { useState } from "react";
import { signup } from "/src/components/AuthApi.js"
import "./SignupForm.css";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup(email, password);
    alert("Signup successful, now login");
  };

  return (
    <div className="signup-form">
      <h3 className="SignUpH">Sign Up</h3>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupForm;