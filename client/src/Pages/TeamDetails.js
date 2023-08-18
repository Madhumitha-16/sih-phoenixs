import React, { useEffect, useRef, useState } from 'react'
import './Styles/teamdetails.css';
import team from "../Assets/Images/team.png";
import { collection,addDoc } from 'firebase/firestore';
import {db} from "../firebaseConfig";
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function TeamDetails() {
    const userId = useParams();
    const navigate = useNavigate();
    console.log("team",userId);
    const [docId,setDocId]= useState();
    const notify = () => toast.success('Team Registered successfully');
    const err = () => toast.error('Email already registered!');

    useEffect(() => {
        if (docId) { notify();
            setTimeout(() => {
                navigate(`/login`); 
            }, 1000);
        }
      }, [docId, navigate]);
  

//Team leader
const [tlfirstName,settlFirstName]=useState("");
const [tlLastName,settlLastName]=useState("");
const [tlemail,settlemail]=useState("");
const [tlregnum,settlRegnum]=useState("");
const [tlselectedOption, tlsetSelectedOption] = useState('');
 const tlhandleSelectChange = (event) => {
    tlsetSelectedOption(event.target.value);
  };

//Team mem1
const [t1firstName,sett1FirstName]=useState("");
const [t1LastName,sett1LastName]=useState("");
const [t1email,sett1email]=useState("");
const [t1regnum,sett1Regnum]=useState("");
const [t1selectedOption, t1setSelectedOption] = useState("");
 const t1handleSelectChange = (event) => {
    t1setSelectedOption(event.target.value);
  };

//Team mem2
const [t2firstName,sett2FirstName]=useState("");
const [t2LastName,sett2LastName]=useState("");
const [t2email,sett2email]=useState("");
const [t2regnum,sett2Regnum]=useState("");
const [t2selectedOption, t2setSelectedOption] = useState("");
 const t2handleSelectChange = (event) => {
    t2setSelectedOption(event.target.value);
  };

  //Team mem3
  const [t3firstName,sett3FirstName]=useState("");
  const [t3LastName,sett3LastName]=useState("");
  const [t3email,sett3email]=useState("");
  const [t3regnum,sett3Regnum]=useState("");
  const [t3selectedOption, t3setSelectedOption] = useState("");
   const t3handleSelectChange = (event) => {
      t3setSelectedOption(event.target.value);
    };

//create collection
const ref=collection(db,"Team_Details");

//TL
const tl_fname=useRef("");
const tl_lname=useRef("");
const tl_email=useRef("");
const tl_regnum=useRef("");
const tl_course=useRef("");
const tl_dept=useRef("");

//T1
const t1_fname=useRef("");
const t1_lname=useRef("");
const t1_email=useRef("");
const t1_regnum=useRef("");
const t1_course=useRef("");
const t1_dept=useRef("");

//T2
const t2_fname=useRef("");
const t2_lname=useRef("");
const t2_email=useRef("");
const t2_regnum=useRef("");
const t2_course=useRef("");
const t2_dept=useRef("");

//T3
const t3_fname=useRef("");
const t3_lname=useRef("");
const t3_email=useRef("");
const t3_regnum=useRef("");
const t3_course=useRef("");
const t3_dept=useRef("");

//function for button click submission
const login=async(e)=>
{
e.preventDefault();

let data={

    //TL
    Team_Leader_firstname:tl_fname.current.value,
    Team_Leader_lastname:tl_lname.current.value,
    Team_Leader_Mailid:tl_email.current.value,
    Team_Leader_Course: tl_course.current.value,
    Team_Leader_Regnum:tl_regnum.current.value,
    Team_Leader_Course:tl_course.current.value,
    Team_Leader_Department:tl_dept.current.value,

    //T1
    Team_Member1_firstname:t1_fname.current.value,
    Team_Member1_lastname:t1_lname.current.value,
    Team_Member1_Mailid:t1_email.current.value,
    Team_Member1_Course: t1_course.current.value,
    Team_Member1_Regnum:t1_regnum.current.value,
    Team_Member1_Course:t1_course.current.value,
    Team_Member1_Department:t1_dept.current.value,

    //T2
    Team_Member2_firstname:t2_fname.current.value,
    Team_Member2_lastname:t2_lname.current.value,
    Team_Member2_Mailid:t2_email.current.value,
    Team_Member2_Course: t2_course.current.value,
    Team_Member2_Regnum:t2_regnum.current.value,
    Team_Member2_Course:t2_course.current.value,
    Team_Member2_Department:t2_dept.current.value,

    //T3
    Team_Member3_firstname:t3_fname.current.value,
    Team_Member3_lastname:t3_lname.current.value,
    Team_Member3_Mailid:t3_email.current.value,
    Team_Member3_Course: t3_course.current.value,
    Team_Member3_Regnum:t3_regnum.current.value,
    Team_Member3_Course:t3_course.current.value,
    Team_Member3_Department:t3_dept.current.value,
    userid:userId.userId

}
try
{
    //addDoc(ref,data)
    const docRef=await addDoc(collection(db,"Team_Details"),data);
    console.log("Document written with ID:",docRef.id);
    setDocId(docRef.id)
   
}
catch(e)
{
    console.log(e);
    err();
}
};

    
  return (
    <>
    
          <div className='title'>
        <h1> Nalaiyathiran - Team Details</h1>
      </div>
      <Toaster toastOptions={{
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }} />
      <div className="body">
      <div>
        <img src={team} />
      </div>
      <form onSubmit={login}>
        <div className="contentTeamWrap">
          <div className="TeamSide">
          
            <div className="TeamWrap">
              <h4>Team Leader</h4>
        
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" onChange={e => settlFirstName(e.target.value)} ref={tl_fname} required />
                <label className={`input-label ${tlfirstName.length > 0 ? "focusLabel" : ""}`}>First Name
                 <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => settlLastName(e.target.value)} ref={tl_lname} required />
                <label className={`input-label ${tlLastName.length > 0 ? "focusLabel" : ""}`}>Last Name 
                <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  onChange={e => settlemail(e.target.value)} ref={tl_email} required/>
                <label className={`input-label ${tlemail.length > 0 ? "focusLabel" : ""}`} >Email 
                <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => settlRegnum(e.target.value)} ref={tl_regnum} required  pattern="[0-9]*"
        inputMode="numeric" />
                <label  className={`input-label ${tlregnum.length > 0 ? "focusLabel" : ""}`}>Register No. 
                <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" ref={tl_course} required value="BE" name="course"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' id="dropdown" ref={tl_dept} value={tlselectedOption} onChange={tlhandleSelectChange}> <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </div>
            <div className="TeamWrap">
              <h4>Team Member 2</h4>
          <div className="input-row">
            <div className="input-group">

                <input type="text" className="input"onChange={e => sett2FirstName(e.target.value)} ref={t2_fname} required />
                <label className={`input-label ${t2firstName.length > 0 ? "focusLabel" : ""}`}>First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input"onChange={e => sett2LastName(e.target.value)} ref={t2_lname}  required />
                <label className={`input-label ${t2LastName.length > 0 ? "focusLabel" : ""}`}>Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input"  onChange={e => sett2email(e.target.value)} ref={t2_email}  required/>
                <label className={`input-label ${t2email.length > 0 ? "focusLabel" : ""}`}>Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett2Regnum(e.target.value)} ref={t2_regnum}  required  pattern="[0-9]*"
        inputMode="numeric"/>
                <label className={`input-label ${t2regnum.length > 0 ? "focusLabel" : ""}`} >Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" ref={t2_course} required value="BE" name="course1"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course1"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' ref={t2_dept} value={t2selectedOption} onChange={t2handleSelectChange}id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </div>
          </div>
          <div className="TeamSide">
            <div className="TeamWrap">
              <h4>Team Member 1</h4>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett1FirstName(e.target.value)} ref={t1_fname}  required />
                <label className={`input-label ${t1firstName.length > 0 ? "focusLabel" : ""}`}>First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett1LastName(e.target.value)} ref={t1_lname} required />
                <label className={`input-label ${t1LastName.length > 0 ? "focusLabel" : ""}`}>Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input" onChange={e => sett1email(e.target.value)} ref={t1_email} required/>
                <label className={`input-label ${t1email.length > 0 ? "focusLabel" : ""}`}>Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input"onChange={e => sett1Regnum(e.target.value)} ref={t1_regnum} required  pattern="[0-9]*"
        inputMode="numeric"/>
                <label className={`input-label ${t1regnum.length > 0 ? "focusLabel" : ""}`}>Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" ref={t1_course}required value="BE" name="course2"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course2"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select'ref={t1_dept} value={t1selectedOption} onChange={t1handleSelectChange} id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </div>
            <div className="TeamWrap">
              <h4>Team Member 3</h4>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett3FirstName(e.target.value)} ref={t3_fname} required />
                <label className={`input-label ${t3firstName.length > 0 ? "focusLabel" : ""}`} >First Name <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett3LastName(e.target.value)} ref={t3_lname} required />
                <label className={`input-label ${t3LastName.length > 0 ? "focusLabel" : ""}`} >Last Name <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <input type="email" className="input" onChange={e => sett3email(e.target.value)} ref={t3_email} required/>
                <label className={`input-label ${t3email.length > 0 ? "focusLabel" : ""}`}>Email <span className='asterisk'> * </span></label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => sett3Regnum(e.target.value)} ref={t3_regnum} required  pattern="[0-9]*"
        inputMode="numeric" />
                <label className={`input-label ${t3regnum.length > 0 ? "focusLabel" : ""}`}>Register No. <span className='asterisk'> * </span></label>
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <label>Course <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
        <input type="radio" className="input-radio" ref={t3_course} required value="BE" name="course3"/>BE
        <input type="radio" className="input-radio"  required value="BTech" name="course3"/>BTech
            </div>
            <div className="input-group">
            <label>Department <span className='asterisk'> * </span></label>
            <br></br>
            <br></br>
                <select className='select' ref={t3_dept} value={t3selectedOption} onChange={t3handleSelectChange} id="dropdown" > <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ADS">ADS</option>
                    <option value="CSBS">CSBS</option>
                </select>
            </div>
            </div>
            </div>
          </div>
            
        </div>
        <input type="submit" value="Register" className='button'/>
        </form>
      </div>
   
      
       
        

        

     
       
  

    </>
  )
}

export default TeamDetails