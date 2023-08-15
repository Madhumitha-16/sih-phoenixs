import React from 'react'
import './Styles/teamdetails.css';
import team from "../Assets/Images/team.png";
function TeamDetails() {
  return (
    <>
          <div className='title'>
        <h1> Nalaiyathiran - Team Details</h1>
      </div>
      <div className="body">
      <div>
        <img src={team} />
      </div>
        <div className="contentTeamWrap">
          <div className="TeamSide">
            <div className="TeamWrap">
              <h4>Team Leader</h4>
              <form>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" required />
                <label >First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  required/>
                <label >Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" required value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </form>
            </div>
            <div className="TeamWrap">
              <h4>Team Member 2</h4>
              <form>
          <div className="input-row">
            <div className="input-group">

                <input type="text" className="input" required />
                <label >First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  required/>
                <label >Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" required value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
</form>
            </div>
          </div>
          <div className="TeamSide">
            <div className="TeamWrap">
              <h4>Team Member 1</h4>
              <form>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" required />
                <label >First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  required/>
                <label >Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" required value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </form>
            </div>
            <div className="TeamWrap">
              <h4>Team Member 3</h4>
              <form>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" required />
                <label >First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  required/>
                <label >Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" required />
                <label >Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" required value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </form>
            </div>
          </div>
        </div>
       
      </div>
      <div className='team-button'>
          <button >Register</button>
        </div>
      
       
        

        

     
       
  

    </>
  )
}

export default TeamDetails