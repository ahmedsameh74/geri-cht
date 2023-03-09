import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'


const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let errArr = []
    Object.keys(user).forEach(key => {
      if(user[key] === '') {
        errArr.push(key)
        return
      }
      // else console.log(user)
    })
    if (errArr.length > 0) {
      setError(errArr);
      console.log(errArr);
      return;
    } else {
      setError([])
      console.log(user)
    };
  }
  return (
    <div className="section" id="register">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h3 className="sec-title">Register</h3>
        <div className="row">
          <div className="input">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              name="first"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            {error.includes("firstName") && (
              <span style={{ color: "red" }}>{"error"}</span>
            )}
          </div>
          <div className="input">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              name="last"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
            {error.includes("lastName") && (
              <span style={{ color: "red" }}>{"error"}</span>
            )}
          </div>
        </div>
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
          <span style={{color: 'white', fontWeight: '400'}}>
            Already have account? <Link style={{fontWeight: '700', borderBottom: '1px solid white'}} to="/login">Login</Link>
          </span>
        </div>
        <div className="row">
          <button
            className="btn"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register