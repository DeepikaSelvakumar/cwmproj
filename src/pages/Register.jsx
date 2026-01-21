import "../styles/Auth.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2 className="auth-title">Register</h2>

        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />

        <select className="auth-select">
          <option>Select Role</option>
          <option>Contractor</option>
          <option>Buyer</option>
          <option>Recycler</option>
        </select>

        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-button">Register</button>

        <p className="auth-text">
          Already have an account?{" "}
          <Link to="/" className="auth-link">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
