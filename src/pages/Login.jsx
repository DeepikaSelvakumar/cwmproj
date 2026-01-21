import "../styles/Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2 className="auth-title">CWM Login</h2>

        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-button">Login</button>

        <p className="auth-text">
          New user?{" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
