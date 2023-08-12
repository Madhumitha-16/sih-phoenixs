import React, {useState} from 'react';
import axios from 'axios';
import './Styles/register.css';
import register from "../Assets/Images/regsiteration.png"
import { Select } from '@mui/material';

export default function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [password, setPassword] = useState("")
  
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const login = () => {
    axios.post("http://localhost:5000/login", {
    //   username,
      password
    }, {withCredentials: true}).then(res => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    })
  };

  return (<div className="bodyWrap">
    <div className="contentRegisterWrap">
    
      <div className="loginSide">
        <div className="loginWrap">
          <h1>Register</h1>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" onChange={e => setFirstName(e.target.value)} required />
                <label className={`input-label ${firstName.length > 0 ? "focusLabel" : ""}`}>First Name</label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => setLastName(e.target.value)} required />
                <label className={`input-label ${lastName.length > 0 ? "focusLabel" : ""}`}>Last Name</label>
            </div>
            </div>
        <div className="input-group">
        <input type="email" className="input"  required="required"/>
        <label >Email</label>
        </div>
        <div className="input-group">
        <input type="text" className="input"  required="required"/>
        <label >Register No.</label>
        </div>
        <div className="input-row">
        <div className="input-group">
        <label className='radio-label'>Course</label>
        <div className="radio">
        <input type="radio" className="input-radio"  required="required" value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required="required" value="BTech" name="course"/>BTech
        </div>
        </div>
        <div className='input-group'>
        <label>Department</label>
        <select className='select' id="dropdown" value={selectedOption} onChange={handleSelectChange}> <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="ADS">ADS</option>
            <option value="CSBS">CSBS</option>
        </select>
        </div>
        </div>
        
          <div className="input-group">
            <input type="password" className="input password" onChange={e => setPassword(e.target.value)} required="required"/>
            <label className={`${password.length > 0 ? "focusLabel" : ""}`}>Password</label>
          </div>
          <div className="input-group">
            <input type="password" className="input password" onChange={e => setPassword(e.target.value)} required="required"/>
            <label className={`${password.length > 0 ? "focusLabel" : ""}`}>Confirm Password</label>
          </div>
          <button onClick={login}>Register</button>
        </div>
      </div>
      <div className="infoSide">
        <div className="loginWrap">
          <h2>Nalaiyathiran</h2>
          <hr></hr>
          <p>Log in, collaborate with your team and submit your innovations here!  .</p>
          <img src={register} />
        </div>
      </div>
    </div>
  </div>)
}
