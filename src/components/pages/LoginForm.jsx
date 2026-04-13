import { useState, useContext } from "react";
import { login } from "/src/components/AuthApi.js"
import { AuthContext } from "/src/components/AuthContext";
import "./LoginForm.css";
const LoginForm = () => {
  const { login: saveLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await login(email, password);
    if (!data?.token) {
      alert(data?.message || "Login failed");
      return;
    }
    saveLogin(data.token);
  };

  return (
    <div className="login-form">
      <h3 className="LogInH">Log In</h3>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default LoginForm;