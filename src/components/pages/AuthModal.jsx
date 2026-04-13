import { useState, useContext } from "react";
import { AuthContext } from "/src/components/AuthContext";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import "./Authmodal.css";

const AuthModal = ({ close }) => {
  const { token, logout } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={close} className="close-button">
          X
        </button>
        {!token ? (
          <>
            {isLogin ? <LoginForm /> : <SignupForm />}

            <p>
              {isLogin ? "No account? " : "Already have an account? "}

              <a onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up " : "Log In "}
              </a>

            Here
            </p>
          </>
        ) : (
          <>
            <h3>You're logged in </h3>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};


export default AuthModal;