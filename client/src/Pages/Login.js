import React, { useEffect, useState } from "react";
import "./Styles/login.css";
import login_img from "../Assets/Images/Secure login.gif";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

 const loginfunc=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,username,password)
      .then((userCredential)=>
      {    
        const user = userCredential.user;
        console.log(user.uid);
        setUserId(user.uid)
      }).catch((error)=>
      {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    };
  
    useEffect(() => {
      if (userId) { 
        navigate(`/home/${userId}`); 
      }
    }, [userId, navigate]);
    
  
  

  return (
    <>
      <div className="title">
        <h1> Nalaiyathiran</h1>
      </div>
      <div className="body">
        <div className="contentLoginWrap">

          <form className="loginForm" onSubmit={loginfunc}>
            <div className="loginSide">
              <div className="loginWrap">
                <h1>Log in</h1>
                <div className="input-group">
                  <input
                    type="email"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    className={`${username.length > 0 ? "focusLabel" : ""}`}
                  >
                    Email ID<span className="asterisk"> * </span>
                  </label>
                </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="input password"
                      value={password}
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
                <h4>Haven't registered yet ? 
                <Link to="/register">
                Register here!
                </Link></h4>
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
export default Login;