import React, { useState ,useRef} from 'react'
import './Styles/phase1.css';
import {db} from "../firebaseConfig"
import {addDoc,collection} from "@firebase/firestore";


function Phase1() {
  const [project_title, setproject_title] = useState("");
  const [abstract,setabstact ] = useState("");
  const [domain,setdomain ] = useState("");
  const handlesetdomain=(e)=>
  {
    setdomain(e.target.value);
  }

  const ref=collection(db,"PhaseI"); 

  const prjtitle=useRef();
  const abs=useRef();
  const dom=useRef();


  const prjdet=async(e)=>
{
e.preventDefault();
console.log(prjtitle.current.value);
console.log(abs.current.value);

let data={
    Project_Title:prjtitle.current.value,
    Abstract:abs.current.value,
    Domain:dom.current.value,    
    userid:""
}
   
try
{
    addDoc(ref,data);
}
catch(e)
{
    console.log(e);
}

}


  return (
   
    <div className='bodyWrap dashboardPage'>
    
        <div className="contentLoginWrap">
          <form className="loginForm" onSubmit={prjdet}>
          <div className='heading'>
            <h2>Phase-I</h2>
            <hr></hr>
        </div>
            <div className="phaseSide">
            <h4>Project Details</h4>
              <div className="loginWrap">
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    onChange={e=>setproject_title(e.target.value)}
                    ref={prjtitle}
                    required
                  />
                  <label
                   className={`${project_title.length > 0 ? "focusLabel" : ""}`}
                  >
                    Project Title<span className="asterisk"> * </span>
                  </label>
                </div>
                
                <div className='input-group'>
        <label>Domain</label>
        <select className='select' id="dropdown" ref={dom} value={domain} onchange={handlesetdomain}><option value="IoT">IoT</option>
            <option value="IoT with AI">IoT with AI</option>
            <option value="IoT with Cloud">IoT with Cloud</option>
            <option value="IoT with AR/VR">IoT with AR/VR</option>
        </select>
    
        </div>
        <div className="input-group">
        <textarea name="abstract" cols="65" rows="10"
        onChange={e=>setabstact(e.target.value)}
        ref={abs}required></textarea>

                  <label
                    className={`${abstract.length > 0 ? "focusLabel" : ""}`}
                  >
                    Abstract<span className="asterisk"> * </span>
                  </label>
                </div>
                  <input type="submit" value="Submit" className="button"/>
                
              </div>
              
            </div>
          
          </form>
          
        </div>
        
    </div>
  )
}

export default Phase1