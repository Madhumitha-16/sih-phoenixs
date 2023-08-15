import React, { useState } from "react";
import axios from "axios";
import "./Styles/login.css";
import login_img from "../Assets/Images/Secure login.gif";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(
        "http://localhost:5000/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data === "success") {
          window.location.href = "/";
        }
      });
  };

  return (
    <>
      <div className="title">
        <h1> Nalaiyathiran</h1>
      </div>

      <div className="body">
        <div className="contentLoginWrap">
          <form className="loginForm" onSubmit={login}>
            <div className="loginSide">
              <div className="loginWrap">
                <h1>Log in</h1>
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    className={`${username.length > 0 ? "focusLabel" : ""}`}
                  >
                    Email ID<span className="asterisk"> * </span>
                  </label>
                </div>
                <form>
                  <div className="input-group">
                    <input
                      type="password"
                      className="input password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label
                      className={`${password.length > 0 ? "focusLabel" : ""}`}
                    >
                      Password<span className="asterisk"> * </span>
                    </label>
                  </div>
                  <input type="submit" value="Login" className="button"/>
                </form>
                <h4>Haven't registered yet ? Register here!</h4>
              </div>
            </div>
          </form>
        </div>
        <div className="Side">
          <div className="loginWrap">
            <img src={login_img} />
          </div>
        </div>
      </div>
    </>
  );
}
