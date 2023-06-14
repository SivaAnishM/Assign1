import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user";
import "./index.css";

const Register = () => {
  const dispatch = useDispatch();

  const [registerpage, setregisterpage] = useState(true);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email === "" || name === "" || password === "") {
      alert("Please enter all required fields");
    } else {
      dispatch(login({ name, email, password }));
      setregisterpage(false);
    }
  };

  const User = useSelector((state) => state.user.value);

  console.log(User);
  const [loginname, setLoginname] = useState("");
  const [loginpass, setLoginpass] = useState("");
  const [loginpage, setLoginpage] = useState(true);

  const LoginRegister = () => {
    if (
      loginname !== User.email ||
      loginpass !== User.password ||
      loginpass === "" ||
      loginname === ""
    ) {
      alert("please check your email and password");
    } else {
      setLoginpage(false);
    }
  };

  return (
    <div>
      {registerpage ? (
        <div className="register">
          <h1>Register Page</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div>
          {loginpage ? (
            <div className="register">
              <h1>Login Page</h1>

              <input
                type="text"
                placeholder="Email"
                value={loginname}
                onChange={(e) => setLoginname(e.target.value)}
              />
              <br />

              <input
                type="password"
                placeholder="Password"
                value={loginpass}
                onChange={(e) => setLoginpass(e.target.value)}
              />
              <br />

              <button onClick={LoginRegister}>Login</button>
              <br />
              <button
                onClick={() => {
                  setregisterpage(true);
                  setEmail("");
                  setName("");
                  setPassword("");
                }}
              >
                Register
              </button>
            </div>
          ) : (
            <div className="table">
              <table>
                <tr>
                  <th>Username</th>
                  <th>EmailId</th>
                </tr>
                <tbody>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                </tbody>
              </table>
              <br />
              <button
                onClick={() => {
                  dispatch(logout());
                  setLoginname("");
                  setLoginpass("");
                  setLoginpage(true);
                }}
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
