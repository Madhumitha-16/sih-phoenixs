import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Styles/phase1.css';

function Phase1() {

  return (
   
    <div className='bodyWrap dashboardPage'>
    
        <div className="contentLoginWrap">
       
          <form className="loginForm">
          <div className='heading'>
            <h2>Phase-1</h2>
            <hr></hr>
        </div>
            <div className="phaseSide">
            <h4>Project Details</h4>
              <div className="loginWrap">
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    required
                  />
                  <label
                    // className={`${username.length > 0 ? "focusLabel" : ""}`}
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
                  <textarea name="abstract" cols="65" rows="10" required></textarea>
                  <label
                    // className={`${username.length > 0 ? "focusLabel" : ""}`}
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