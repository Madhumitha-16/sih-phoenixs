import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Phase1() {

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
    <div className='bodyWrap'>
        <div>
            <h4>Phase-1</h4>
        </div>
        <div className="contentLoginWrap">
          <form className="loginForm" onSubmit={login}>
            <div className="loginSide">
              <div className="loginWrap">
                <h4>Project Details</h4>
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
                    Project Title<span className="asterisk"> * </span>
                  </label>
                </div>
                <form>
                <div className='input-group'>
        <label>Domain</label>
        <select className='select' id="dropdown"><option value="IoT">IoT</option>
            <option value="IoT with AI">IoT with AI</option>
            <option value="IoT with Cloud">IoT with Cloud</option>
            <option value="IoT with AR/VR">IoT with AR/VR</option>
        </select>
    
        </div>
        <div className="input-group">
                  <input
                    type="text-field"
                    className="input"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    className={`${username.length > 0 ? "focusLabel" : ""}`}
                  >
                    Abstract<span className="asterisk"> * </span>
                  </label>
                </div>
                  <input type="submit" value="Submit" className="button"/>
                </form>
              </div>
            </div>
          </form>
        </div>

    </div>
  )
}

export default Phase1