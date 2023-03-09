import { useState } from 'react';
import './Login.css'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errArr = [];
    Object.keys(user).forEach((key) => {
      if (user[key] === "") {
        errArr.push(key);
        return;
      }
      // else console.log(user)
    });
    if (errArr.length > 0) {
      setError(errArr);
      console.log(errArr);
      return;
    } else {
      setError([]);
      console.log(user);
    }
  };

  return (
    <div className="section" id="register">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h3 className="sec-title">Login</h3>
        <div className="row">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {error.includes("email") && (
              <span style={{ color: "red" }}>{"error"}</span>
            )}
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            {error.includes("password") && (
              <span style={{ color: "red" }}>{"error"}</span>
            )}
          </div>
        </div>
        <div className="row">
          <button
            className="btn"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login